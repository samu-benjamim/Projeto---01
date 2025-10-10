import beep from '../assets/audio/beep.mp3'


export function loadAudio() {
    const audio = new Audio(beep)
    audio.load()

    return () => {
        audio.currentTime = 0
        audio.play()
    }
}