import * as ReactDOM from 'react-dom';
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


function render() {
  ReactDOM.render(<App/>, document.body);
}

render();