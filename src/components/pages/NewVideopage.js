import HeroBanner from '../NewVideo/HeroBanner'
import Testimonials from '../NewVideo/Testimonials'
import ClientLogos from '../NewVideo/ClientLogos'
import Navbar from '../Navbar.js'
import HomeFooter from '../HomeFooter/HomeFooter.js'
import WorkflowAutomation from '../NewVideo/WorkflowAutomation.js'
import DigitalCommerce from '../NewVideo/DigitalCommerce.js'
import AprimoDam from '../NewVideo/AprimoDam.js'
import Salesforce from '../NewVideo/Salesforce.js'
import CEDVideo from '../NewVideo/CEOVideo.js'
import CtaBanner from '../NewVideo/CtaBanner.js'


const NewVideopage = () => {
  return (
   <>
   <div className='bg-[#1B0A31]'>

   
   <Navbar/>
   <HeroBanner/>
   <ClientLogos/>
   <Testimonials/>
   <CEDVideo/>
   <WorkflowAutomation/>
   <DigitalCommerce/>  
   <AprimoDam/>
    <Salesforce/>
    <CtaBanner/>
   <HomeFooter/>
   </div>
   </>
  )
}

export default NewVideopage