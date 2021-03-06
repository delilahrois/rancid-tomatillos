import React from 'react'
import '../CSS/Video.css'

const Video = (trailer) => {
if(!trailer.trailer) {
  return (
    <div className='no-trailer'>
      <h3>Sorry, no movie preview available at this time!</h3>
    </div>
  )} else {
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
           title="Embedded youtube"
           />
        </div>
      )}
}

export default Video
