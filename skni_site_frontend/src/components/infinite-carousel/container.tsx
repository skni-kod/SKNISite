import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
    return (
        <div className="overflow-hidden relative h-80">
            {children}
        </div>
    );
};

export { Container };
