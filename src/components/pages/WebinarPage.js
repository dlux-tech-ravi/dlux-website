import React from 'react'
import HeroSection from '../Webinar/HeroSection'
import VideoShowcase from '../Webinar/VideoShowcase.js'
import WhoWeAreSection from '../Webinar/WhoWeAreSection.js'
import Speakers from '../Webinar/Speakers.js'
import FAQSection from '../Webinar/FAQSection.js'
import CommunityCTA from '../Webinar/CommunityCTA.js'
import BlogSection from '../Webinar/BlogSection.js'
import Navbar from '../Navbar.js'

export const WebinarPage = () => {
  return (
  <>
  <Navbar/>
  <HeroSection/>
  {/* <VideoShowcase/> */}
  <WhoWeAreSection/>
  <Speakers/>
  <BlogSection/>
  <CommunityCTA/>
  <FAQSection/>
  </>
  )
}
