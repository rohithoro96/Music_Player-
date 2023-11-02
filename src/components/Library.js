import React from "react";
import LibrarySongs from "./LibrarySongs";

const Library = ({ songs, setCurrentsong, audioRef, isplaying, setSongs, libraryStatus }) => {
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ""}`}>
            <h1>Music Library</h1>

            <div className="library-songs">
                {songs.map(song => {
                    return (
                        <LibrarySongs song={song} songs={songs} id={song.id} setCurrentsong={setCurrentsong} audioRef={audioRef} isplaying={isplaying} setSongs={setSongs} />
                    )
                })}
            </div>


        </div>
    )
}

export default Library;