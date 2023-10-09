import React from 'react';
import { createRoot } from 'react-dom/client';
import { Registration } from './components/Registration';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Registration</h1>
      </header>
      <main>
               <Registration />
      </main>
      <footer>
        <p>Czechitas, Kurz React 2</p>
      </footer>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
