import os
import sys
import subprocess
import time
import argparse
from pathlib import Path


def start_django_server():
    """Start the Django development server"""
    print("Starting Django server...")

    # Change directory to the backend folder
    backend_dir = Path(__file__).resolve().parent.parent
    os.chdir(backend_dir)

    # Run migrations first
    print("Running migrations...")
    try:
        subprocess.run(
            [sys.executable, "manage.py", "migrate"],
            check=True,
            capture_output=True,
            text=True,
        )
        print("Migrations completed successfully")
    except subprocess.CalledProcessError as e:
        print("Error running migrations:")
        print(e.stderr)
        return None

    # Start the Django server
    server_process = subprocess.Popen(
        [sys.executable, "manage.py", "runserver"],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
    )

    # Wait for the server to start
    print("Waiting for server to start...")
    time.sleep(5)  # Give the server some time to start

    # Check if the server started successfully
    if server_process.poll() is not None:
        # Server exited prematurely
        stdout, stderr = server_process.communicate()
        print("Server failed to start:")
        print(stderr)
        return None

    print("Django server started successfully")
    return server_process


def run_test(test_module):
    """Run a specific test module"""
    print(f"\nRunning {test_module}...")

    # Change to the tests directory
    os.chdir(Path(__file__).resolve().parent)

    # Run the test script
    result = subprocess.run(
        [sys.executable, test_module], capture_output=True, text=True
    )

    # Print the test output
    print(result.stdout)

    if result.stderr:
        print("Errors during test:")
        print(result.stderr)

    return result.returncode == 0


def run_all_tests():
    """Run all test modules"""
    test_modules = [
        "test_user_endpoints.py",
        "test_article_endpoints.py",
        "test_news_endpoints.py",
        "test_project_endpoints.py",
        "test_section_endpoints.py",
        "test_sponsor_endpoints.py",
        "test_history_entry_endpoints.py",
    ]

    results = {}

    for module in test_modules:
        results[module] = run_test(module)

    return results


def main():
    """Main function to run the server and tests"""
    parser = argparse.ArgumentParser(description="Run API endpoint tests")
    parser.add_argument(
        "--test", help="Specific test module to run (e.g., test_user_endpoints.py)"
    )
    parser.add_argument(
        "--list", action="store_true", help="List available test modules"
    )
    args = parser.parse_args()

    # List available test modules
    if args.list:
        print("Available test modules:")
        test_files = [
            f
            for f in os.listdir(Path(__file__).resolve().parent)
            if f.startswith("test_") and f.endswith(".py")
        ]
        for test_file in test_files:
            print(f"  {test_file}")
        return

    print("=== Django API Test Runner ===")

    # Start the Django server
    server_process = start_django_server()
    if server_process is None:
        print("Failed to start Django server. Aborting tests.")
        return

    try:
        # Run the tests
        if args.test:
            # Run a specific test module
            test_success = run_test(args.test)

            # Print summary
            print("\n=== Test Runner Summary ===")
            print(f"{args.test} execution: {'COMPLETED' if test_success else 'FAILED'}")
        else:
            # Run all test modules
            test_results = run_all_tests()

            # Print summary
            print("\n=== Test Runner Summary ===")
            for module, success in test_results.items():
                print(f"{module}: {'PASSED' if success else 'FAILED'}")

            all_passed = all(test_results.values())
            print(f"\nOverall result: {'PASSED' if all_passed else 'FAILED'}")

    finally:
        # Stop the Django server
        print("\nStopping Django server...")
        server_process.terminate()
        server_process.wait()
        print("Django server stopped")


if __name__ == "__main__":
    main()
