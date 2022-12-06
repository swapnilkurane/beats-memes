import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { Router } from 'next/router'

function Home() {
  const router = useRouter()
  const toNotes= () => {
    router.push("/notes/theNotes")
  }
  const toMemes= () => {
    router.push("/notes/meme")
  }
  
  return (
    <>
    <div style={{
      zIndex: -1,
      position: "fixed",
      width: "100vw",
      height: "100vh"
    }}>
      <Image 
        src="/background.jpg"
        alt="backg"
        layout="fill"
        objectFit='cover' 
      />
    </div>
    <div>
      {/* <Head>
        <title>THE SOUND PROJECT</title>
        <meta name="description" content="Generated by SK" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <h1 className={styles.textle}> THE SOUND PROJECT </h1>
      {/* <div className={styles.textle}>
        WELCOME TO SK'S SOUND PROJECT.
      </div> */}
      <button className={styles.button1} onClick={toNotes}> HIT THE NOTES </button>
      <a/>
      <button className={styles.button2} onClick={toMemes}> Make me Laugh! </button>
      </div>
      </>
  )
}
export default Home;