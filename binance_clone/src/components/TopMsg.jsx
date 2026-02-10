import React from 'react'

function TopMsg() {
    return (
        <div className="topMsg">
            <p>
                To see content specific to your location, we suggest <span>India</span> as your preferred country/region.
                <button>Continue</button>
                <svg className="crose-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4.863 17.863L10.726 12 4.863 6.137a.9.9 0 011.274-1.274L12 10.727l5.863-5.864a.9.9 0 011.274 1.274L13.273 12l5.864 5.863.061.069a.9.9 0 01-1.266 1.266l-.069-.061L12 13.273l-5.863 5.864a.9.9 0 01-1.274-1.274z"
                        fill="currentColor"></path>
                </svg>
            </p>
        </div>

    )
}

export default TopMsg
