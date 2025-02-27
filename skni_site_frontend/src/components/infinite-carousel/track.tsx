import React from 'react';

interface TrackProps {
    children: React.ReactNode;
}

const Track = ({
    children,
               } : TrackProps) => {
    return (
        <div className="flex absolute left-0 justify-center items-center gap-x-4 w-[200%] h-full animate-slide">
            {children}
        </div>
    );
};

export { Track };