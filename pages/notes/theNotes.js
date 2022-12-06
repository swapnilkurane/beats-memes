import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../../styles/Home.module.css'

function theNotes() {
    
    useEffect(
        () => {
            window.addEventListener('keydown', (e)=>{
                // console.log("you triggered", e.key)
                console.log("keycode", e.keyCode)
            })
        }
    )


    return(
        <>
            <h1 className={styles.textle}>THE NOTES</h1>
            <div className={styles.keys}>
                <div data-key="65" className={styles.key}>
                    <kbd>A</kbd>
                    <span className={styles.sound}>clap</span>
                </div>
                <div data-key="83" className={styles.key}>
                    <kbd>S</kbd>
                    <span className={styles.sound}>hihat</span>
                </div>
                <div data-key="68" className={styles.key}>
                    <kbd>D</kbd>
                    <span className={styles.sound}>kick</span>
                </div>
                <div data-key="70" className={styles.key}>
                    <kbd>F</kbd>
                    <span className={styles.sound}>openhat</span>
                </div>
                <div data-key="71" className={styles.key}>
                    <kbd>G</kbd>
                    <span className={styles.sound}>boom</span>
                </div>
                <div data-key="72" className={styles.key}>
                    <kbd>H</kbd>
                    <span className={styles.sound}>ride</span>
                </div>
                <div data-key="74" className={styles.key}>
                    <kbd>J</kbd>
                    <span className={styles.sound}>snare</span>
                </div>
                <div data-key="75" className={styles.key}>
                    <kbd>K</kbd>
                    <span className={styles.sound}>tom</span>
                </div>
                <div data-key="76" className={styles.key}>
                    {/* <kbd>L</kbd> */}
                    <kbd>L</kbd>
                    <span className={styles.sound}>tink</span>
                </div>
            </div>
            {/* <audio data-key="65" src="./sounds/clap.wav"></audio>
            <audio data-key="83" src="./sounds/hihat.wav"></audio>
            <audio data-key="68" src="./sounds/kick.wav"></audio>
            <audio data-key="70" src="./sounds/openhat.wav"></audio>
            <audio data-key="71" src="./sounds/boom.wav"></audio>
            <audio data-key="72" src="./sounds/ride.wav"></audio>
            <audio data-key="74" src="./sounds/snare.wav"></audio>
            <audio data-key="75" src="./sounds/tom.wav"></audio>
            <audio data-key="76" src="./sounds/tink.wav"></audio> */}
        </>
    )
}
export default theNotes;