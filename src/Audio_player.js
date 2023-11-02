export const Audio_player = ({ isplaying, audioRef }) => {
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
