import React from 'react'

const Video = (trailer) => {
console.log(trailer)
let videoURL;
{trailer.trailer.site === 'YouTube' ? videoURL = (`https://www.youtube.com/embed/${trailer.trailer.key}`) : videoURL = (`https://player.vimeo.com/video/${trailer.trailer.key}`)}
  return (
    <div className="video-responsive">
      <iframe
       width="400"
       height="240"
       src={videoURL}
       frameBorder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
       allowFullScreen
       title="Embedded movie trailer"
       data-cy="movie-trailer"
       />
    </div>
  )
}

export default Video
