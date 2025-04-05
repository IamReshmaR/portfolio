import React from 'react';
import Projects from './components/Projects';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <Projects />
      </main>
    </div>
  );
};

export default App; 