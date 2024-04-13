import React, { useState } from "react"
import memesData from "../memedata.jsx"

export default function Meme() {
    
    const [meme,setMeme] = useState(
        {
            topText:"",
            botText:"",
            randomImage:"http://i.imgflip.com/1bij.jpg",
        }
    );
    // const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    
    const [allMemeImage,setAllMemeImage]=useState(memesData);
    function getMemeImage() {
        const memesArray = allMemeImage.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url =memesArray[randomNumber].url 
        setMeme(prevEle=>{
            return({
                ...prevEle,
                randomImage:url
            })
    })
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={meme.randomImage} className="meme--image" />
        </main>
    )
}