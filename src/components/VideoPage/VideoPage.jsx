import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


const VideoPage = () => {
  const {id} = useParams()
  console.log(id)
  return (
    <div>VideoPage</div>
  )
}

export default VideoPage