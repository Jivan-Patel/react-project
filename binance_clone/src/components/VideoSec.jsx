import React from 'react'

function VideoSec() {
    return (
        <div className="vdoSection">
            <div className="vdoContainer">
                <video src="https://res.cloudinary.com/dkohpqbdj/video/upload/v1762162684/humans-luis-en_rf7dz1.mp4"
                    controls
                    poster="https://res.cloudinary.com/dkohpqbdj/image/upload/v1762163066/humans-luis-thumb_o0hpjg.png"></video>
            </div>
            <div className="vdoContainer">
                <video src="https://res.cloudinary.com/dkohpqbdj/video/upload/v1762162700/humans-mohit-en_hbzo0w.mp4"
                    controls
                    poster="https://res.cloudinary.com/dkohpqbdj/image/upload/v1762163083/humans-mohit-thumb_jq3n7g.png"></video>
            </div>
            <div className="vdoContainer">
                <video src="https://res.cloudinary.com/dkohpqbdj/video/upload/v1762162711/humans-dennis-en_hhfhii.mp4"
                    controls
                    poster="https://res.cloudinary.com/dkohpqbdj/image/upload/v1762163088/humans-dennis-cn_jlg8bj.png"></video>
            </div>
        </div>
    )
}

export default VideoSec
