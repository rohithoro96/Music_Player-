import React, { useState, useEffect } from "react";
import { Audio_player } from "../Audio_player";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleRight, faAngleLeft, faPause } from "@fortawesome/free-solid-svg-icons";
const Player = ({ currentSong, isplaying, setIsPlaying, audioRef, songs, setCurrentsong, setSongs }) => {

    //useEffect
    useEffect(() => {
        const selectedAudio = songs.map((song) => {
            if (song.id === currentSong.id) {
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
    }, [currentSong])

    //selecting HTML via useRef

    const playSongHandler = () => {
        if (isplaying) {
            setIsPlaying(!isplaying);
            audioRef.current.pause()
        } else {
            setIsPlaying(!isplaying)
            audioRef.current.play()
        }
    }
    //timeUpateHandler
    const timeUpateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({ ...songinfo, currentTime: current, duration: duration })

    }


    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }
    const [songinfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0
    })

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songinfo, currentTime: e.target.value })
    }
    const skipTrackHandler = async (direction) => {
        const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if (direction === "skip-forward") {
            await setCurrentsong(songs[(currentIndex + 1) % songs.length]);

        }
        if (direction === "skip-back") {
            if (((currentIndex - 1) % songs.length === -1)) {
                await setCurrentsong(songs[songs.length - 1]);
                if (isplaying) audioRef.current.play();
                return;
            }
            await setCurrentsong(songs[(currentIndex - 1) % songs.length])
        }
        if (isplaying) audioRef.current.play();
    }

    //SongEnd Handler
    const songEndHandler = async () => {
        const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        await setCurrentsong(songs[(currentIndex + 1) % songs.length]);
        if (isplaying) {

            setTimeout(() => {

                audioRef.current.play()
            }, 2000)




        }


    }
    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songinfo.currentTime)}</p>
                <input type="range" min={0} max={songinfo.duration || 0} value={songinfo.currentTime} onChange={dragHandler} />
                <p>{songinfo.duration ? getTime(songinfo.duration) : "0.00"}</p>

            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x" onClick={() => { skipTrackHandler('skip-back') }} />
                <FontAwesomeIcon icon={isplaying ? faPause : faPlay} size="2x" onClick={playSongHandler} />
                <FontAwesomeIcon className="skip-forward" icon={faAngleRight} size="2x" onClick={() => { skipTrackHandler('skip-forward') }} />
            </div>
            <audio src={currentSong.audio} ref={audioRef} onTimeUpdate={timeUpateHandler} onLoadedMetadata={timeUpateHandler} onEnded={songEndHandler}></audio>
        </div>
    )
}

export default Player;