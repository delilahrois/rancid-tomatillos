import React from 'react'

const Video = (trailer) => {

  console.log(trailer)
  return (
    <div className="video-responsive">
     <iframe
       width="400"
       height="240"
       src={`https://www.youtube.com/embed/${trailer.trailer}`}
       frameBorder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
       allowFullScreen
       title="Embedded youtube"
       />
    </div>
  )
}

export default Video
