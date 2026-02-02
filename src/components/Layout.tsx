import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="w-full 2xl:max-w-7xl 2xl:mx-auto">
            {children}
        </div>
    );
}
