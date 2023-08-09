import React from "react";
import ReactDOM from "react-dom/client";
import './App.css';
import Header from './components/Header/Header';
import Downloader from './components/Downloader/Downloader';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Downloader />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);