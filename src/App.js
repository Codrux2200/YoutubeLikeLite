import logo from './logo.svg';
import './App.css';
import { Navbar } from './navbar/Navbar';
import { Sections } from './navbar/section';
import { Videos } from './Video/video';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Sections></Sections>
      <Videos></Videos>
    </div>
  );
}

export default App;
