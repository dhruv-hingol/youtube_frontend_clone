import React from 'react'
import "./video.css"


const video = ({video}) => {

  const countViews =(number)=>{
    if(number.toString().length ===4){
      return number.toString().slice(0,1)+'K'
    }
    if(number.toString().length ===5){
      return number.toString().slice(0,2)+'K'
    }
    if(number.toString().length ===6){
      return number.toString().slice(0,3)+'K'
    }
    if(number.toString().length ===7){
      return number.toString().slice(0,1)+'M'
    }
    if(number.toString().length ===8){
      return number.toString().slice(0,2)+'M'
    }
  }

  return (
    <>
    <div className="videoBox">
        <div className="thumbnailInfo">
            <img src={video.image} alt="thumbnail" className="videoThumbnail" />
            <p>{video.duration}</p>
        </div>
        <div className="videoInfo">
            <img src={video.logo} alt="channel logo" className="video_channel" />
            <div>
                <h2>{video.title.length <=70? video.title : `${video.title.substr(0,70)}...`}</h2>
                <h3>{video.channel}{video.isVerified}<span className="material-symbols-outlined active">check_circle</span></h3>
                <p>{countViews(video.views)} views • {video.uploadTime} ago</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default video