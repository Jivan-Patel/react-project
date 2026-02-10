import React from 'react'
import MainSec from './MainSec'
import CertificateSec from './CertificateSec'
import VideoSec from './VideoSec'
import AddDownloadSection from './addDownloadSection'
import Faq from './Faq'

function MainSection() {
    return (
        <main>
            <MainSec />
            <CertificateSec />
            <VideoSec />
            <AddDownloadSection />
            <Faq />
        </main>
    )
}

export default MainSection
