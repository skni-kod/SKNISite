import React from "react";

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return <div className="h-screen flex flex-row w-full mx-0">
        {children}
    </div>;
};

export default AuthLayout;