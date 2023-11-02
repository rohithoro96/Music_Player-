import React from "react";

const LibrarySongs = ({ songs, setCurrentsong, song, id, audioRef, isplaying, setSongs }) => {

    const selectsongHandler = () => {
        const selectedSong = songs.filter(theSong => theSong.id === id);
        setCurrentsong(selectedSong[0])
        const selectedAudio = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song, active: true
                }
            } else {
                return {
                    ...song, active: false
                }
            }
        });
        setSongs(selectedAudio)
        //check if audio is playing
        if (isplaying) {
            const playAudio = audioRef.current.play()
            if (playAudio !== undefined) {
                playAudio.then(() => {
                    audioRef.current.play()
                }).catch((err) => {
                    console.log(err)
                })
            }
        }





    }
    return (
        <div className={`library-song ${song.active ? "selected-song" : ""}`} onClick={selectsongHandler}>
            <img src={song.cover} alt={song.name} />
            <div className="song-description">
                <h2>{song.name}</h2>
                <h3>{song.artist}</h3>
            </div>

        </div>
    )
}

export default LibrarySongs;