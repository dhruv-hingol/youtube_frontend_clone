import React from 'react'
import {useState} from 'react'
import './home.css'
import Video from'./video'
import VideoData from './videos.json'

const Home = () => {

    const categoryData = ["All" , "Gaming" , "Mixes" ,"Music" , "Comedy", "JavaScript" , "Python"  , "Lives"  , "Bollywood" , "Zayn" ,"Traiers" , "Arijit Singh" , "T-series" ,"Standup"]

    const [category, setCategory] = useState("All");
    const {videos} = VideoData;
    const [onDisplay, setonDisplay] = useState(videos);

    const handleCategory = (tag) =>{
        setCategory(tag)
        if(tag === 'All') {
            setonDisplay(videos)
            return
        }
        setonDisplay(videos.filter((video)=> video.category === tag))
    }

    
    return ( 
        <>
        <div className="homeContainer" id="homeContainer">
            <div className="categoryContainer">
                {categoryData.map((tab) => {
                   return <h3 className={`categoryTab ${category ===tab && 'active'}`} key={tab} onClick={()=> handleCategory(tab)}>{tab}</h3>
                })} 
            </div>
            <div className="videoContainer">
                {onDisplay.map((video) => {
                return <Video video={video} key={video.image} />})}
            </div>
        </div>
        </>
    )
}

export default Home

//46.12 