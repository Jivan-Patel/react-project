import React, { useState } from 'react'
import Like from './Like'
import './socialMedia.css'

function SocialMedia() {

    return (
        <div className='postContainer'>
            <div className="post">
                <h1>My Post</h1>
                <p>This is my first post</p>
                <Like like={0} />
            </div>
            <div className="post">
                <h1>My another Post</h1>
                <p>This is my another post</p>
                <Like like={10} />
            </div>
            <div className="post">
                <h1>Hello</h1>
                <p>Hello everyone!!!</p>
                <Like like={55} />
            </div>
            <div className="post">
                <h1>Lorem</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, iusto.</p>
                <Like like={55} />
            </div>
            <div className="post">
                <h1>qwerty</h1>
                <p>Hello Lorem ipsum dolor sit amet.</p>
                <Like like={55} />
            </div>
        </div>
    )
}

export default SocialMedia
