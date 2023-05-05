import React from 'react'
import ReactPlayer from 'react-player/lazy'

type VideoPlayerProps = {
  url: string
}

export const VideoPlayer = ({ url }: VideoPlayerProps) => {
  return <ReactPlayer url={url} width="720" height="400" controls />
}
