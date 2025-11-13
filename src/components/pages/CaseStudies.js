import React from 'react'
import CaseStudy from '../SuccessStories/FeaturedStories'
import HeroBanner from '../SuccessStories/HeroBanner'
import Navbar from '../Navbar'
import IconCards from '../SuccessStories/IconCards'
import SuccessCTA from '../SuccessStories/SuccessCTA'
import HomeFooter from '../HomeFooter/HomeFooter'

export const CaseStudies = () => {
  return (
   <>
   <Navbar/>
   <HeroBanner/>
   <IconCards/>
   <CaseStudy/>
   <SuccessCTA/>
   <HomeFooter />

   </>
  )
}
