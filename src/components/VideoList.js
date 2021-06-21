import React from 'react'
import Videoitem  from './VideoItem'


const VideoList = ({videos, onVideoSelect}) => {
   const renderedList =  videos.map(video => {
        return <Videoitem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
    })
    return  <div className="ui relaxed divided list"> {renderedList} </div>
}


export default VideoList;