import Song from "./components/Song";
import Player from "./components/Player";
import './styles/app.scss';
import data from './Util';
import Library from "./components/Library";
import Nav from "./components/Nav";
import { useState, useRef } from "react";


function App() {
  //state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentsong] = useState(songs[0])
  const [isplaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const audioRef = useRef(null);
  return (
    <div className={`App ${libraryStatus ? 'library-active' : ""}`}>
      <Nav setLibraryStatus={setLibraryStatus} libraryStatus={libraryStatus} />
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} isplaying={isplaying} setIsPlaying={setIsPlaying} audioRef={audioRef} songs={songs} setCurrentsong={setCurrentsong} setSongs={setSongs} />
      <Library songs={songs} setCurrentsong={setCurrentsong} audioRef={audioRef} isplaying={isplaying} setSongs={setSongs} libraryStatus={libraryStatus} />
    </div>
  );
}

export default App;
