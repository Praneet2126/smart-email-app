import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="App-header">
      <h1>Think. Make. Solve.</h1>
    </header>
  );
}

function Content() {
  return (
    <div className="App-content">
      <p>What we Do we enjoy creating delightful, human-centred digital experiences</p>
      <button>See more</button>
    </div>
  );
}

function Footer() {
  return (
    <footer className="App-footer">
      <p>© 2023 Your Company. All rights reserved.</p>
    </footer>
  );
}

export default App;