import os
import sys
import subprocess
import time
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


def run_login_test():
    """Run the login test script"""
    print("\nRunning login test...")

    # Change to the tests directory
    os.chdir(Path(__file__).resolve().parent)

    # Run the login test script
    result = subprocess.run(
        [sys.executable, "test_login.py"], capture_output=True, text=True
    )

    # Print the test output
    print(result.stdout)

    if result.stderr:
        print("Errors during test:")
        print(result.stderr)

    return result.returncode == 0


def main():
    """Main function to run the server and test"""
    print("=== Django Login Test Runner ===")

    # Start the Django server
    server_process = start_django_server()
    if server_process is None:
        print("Failed to start Django server. Aborting test.")
        return

    try:
        # Run the login test
        test_success = run_login_test()

        # Print summary
        print("\n=== Test Runner Summary ===")
        print(f"Login test execution: {'COMPLETED' if test_success else 'FAILED'}")

    finally:
        # Stop the Django server
        print("\nStopping Django server...")
        server_process.terminate()
        server_process.wait()
        print("Django server stopped")


if __name__ == "__main__":
    main()
