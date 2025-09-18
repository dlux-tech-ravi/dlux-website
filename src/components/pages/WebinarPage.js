import React from 'react'
import HeroSection from '../Webinar/HeroSection'
import VideoShowcase from '../Webinar/VideoShowcase.js'
import WhoWeAreSection from '../Webinar/WhoWeAreSection.js'
import Speakers from '../Webinar/Speakers.js'
import FAQSection from '../Webinar/FAQSection.js'
import CommunityCTA from '../Webinar/CommunityCTA.js'

export const WebinarPage = () => {
  return (
  <>
  <HeroSection/>
  <VideoShowcase/>
  <WhoWeAreSection/>
  <Speakers/>
  <CommunityCTA/>
  <FAQSection/>
  </>
  )
}
