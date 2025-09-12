import React from 'react'
import HeroBanner from '../NewVideo/HeroBanner'
import Testimonials from '../NewVideo/Testimonials'
import ClientLogos from '../NewVideo/ClientLogos'
import Navbar from '../Navbar.js'
import HomeFooter from '../HomeFooter/HomeFooter.js'
import WorkflowAutomation from '../NewVideo/WorkflowAutomation.js'
import DigitalCommerce from '../NewVideo/DigitalCommerce.js'
import AprimoDam from '../NewVideo/AprimoDam.js'
import Salesforce from '../NewVideo/Salesforce.js'


const NewVideopage = () => {
  return (
   <>
   <Navbar/>
   <HeroBanner/>
   <ClientLogos/>
   <Testimonials/>
   <WorkflowAutomation/>
   <DigitalCommerce/>  
   <AprimoDam/>
    <Salesforce/>
   <HomeFooter/>
   </>
  )
}

export default NewVideopage