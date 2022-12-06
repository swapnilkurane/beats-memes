import { imageConfigDefault } from 'next/dist/shared/lib/image-config'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Router } from 'next/router'
import { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'

function meme(){
    const [mainres, setMainres] = useState([])
    // const [author, setAuthor] = useState([])
    // const [subreddit, setSubreddit] = useState([])
    // const [ups, setUps] = useState([])
    // const [image, setImage] = useState([])

    const fetchMeme = () => {
        fetch("https://www.reddit.com/r/dankmemes.json")
        .then(res => res.json())
        .then(res => res.data.children)
        .then(res=> {
            setMainres(res)
        })
    }
    useEffect(()=>{
        fetchMeme()
    },[])
    // return(
    //     <div>
    //     <h1>MEME</h1>
    //     {
    //         mainres && mainres.map((dn, i) => (
    //         <div className={styles.fixedContainer}>
    //             <div className={styles.memeTemplate}>
    //                 {i>0 && dn.data.post_hint === 'image' ? <h3>{i}</h3> : <a>{i}</a>}
    //                 {/* {i>0 && dn.data.post_hint === 'image' ? <h3>Subreddit: {dn.data.subreddit_name_prefixed}</h3> : <a>Cant Fetch</a>} */}
    //                 {/* {i>0 && dn.data.post_hint === 'image' ? <h3>Author: {dn.data.author}</h3> : <a>Cant Fetch</a>} */}
    //                 {/* {i>0 && dn.data.post_hint === 'image' ? <h3>Upotes: {dn.data.ups}</h3> : <a>Cant Fetch</a>} */}
    //                 {/* <h3>Link img: {dn.data.url_overridden_by_dest}</h3> */}
    //                 {i>0 && dn.data.post_hint === 'image' ? <img className={styles.img} src={dn.data.url_overridden_by_dest} width='400' height='400'/> : <h3>No Image</h3>}
    //                 {/* {i > 0 && dn.data.post_hint === 'image' ? <Image src={image} width='70' height='70'/> : <h3>No Image</h3>} */}
    //             </div>
    //         </div>
    //         ))
    //     }

    //     </div>
    // )
    return (
        <div className={styles.memeMainscr}>
            {mainres && mainres.map((dn, i)=>(
                <div className={styles.memeBox}>
                    {i > 0 && dn.data.post_hint === 'image' ? <img className={styles.img} src={dn.data.url_overridden_by_dest} width='400' height='400'/>:<></>}
                    {/* <img className={styles.img} src={dn.data.url_overridden_by_dest} width='400' height='400'/> */}
                </div>
            ))}
            {/* <button className={styles.memebutton} onClick={fetchMeme}>Refresh Memes</button> */}
        </div>
    )

}
export default meme;