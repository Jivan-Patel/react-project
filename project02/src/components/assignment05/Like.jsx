import React, { useState } from 'react'
import './socialMedia.css'

function Like(props) {
  let [like, updateLike] = useState(props.like)
  let [isClicked, setClick] = useState(false)
  function handleClick() {
    updateLike(like + 1);
    setClick(true)
  }
  return (
    <div className='likeSection'>
      <p>
        Likes: {like}
      </p>
      <p>
        <button className='likeBtn' onClick={handleClick} disabled={isClicked}>
          {isClicked ? "Liked Post" : "Like Post"}
        </button>
      </p>
    </div>
  )
}

export default Like
