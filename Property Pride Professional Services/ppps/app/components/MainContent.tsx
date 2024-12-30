import React from 'react';

interface MainContentProps {
    title: string;
    body: string;
}

const MainContent: React.FC<MainContentProps> = ({ title, body }) => {
    return (
        <main className="p-8">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="mt-4 text-lg">{body}</p>
        </main>
    );
};

export default MainContent;