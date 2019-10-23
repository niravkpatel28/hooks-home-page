import React,{useState} from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Gallery from './Gallery';
// import Joke from './components/Joke'
// import News from './components/News';
import Tasks from './components/Tasks'
function App() {

  const [showGallery, setShowGallery] = useState(true);
  return (
    <div className="App">
      <h2> React-Hooks</h2>
      <SearchBar/>
      {/* <Joke/> */}
      <Tasks/>
      {/* <News/> */}
      <hr/>
      {showGallery? <Gallery/>:null}
      <button onClick={()=>{
        setShowGallery(!showGallery);
      }}> Show Gallery </button>    
    </div>
  );
}

export default App;
