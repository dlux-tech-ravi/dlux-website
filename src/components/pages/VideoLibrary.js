import HeroBanner from '../VideoLibrary/HeroBanner'
import Testimonials from '../VideoLibrary/Testimonials'
import ClientLogos from '../VideoLibrary/ClientLogos'
import Navbar from '../Navbar.js'
import HomeFooter from '../HomeFooter/HomeFooter.js'
import WorkflowAutomation from '../VideoLibrary/WorkflowAutomation.js'
import DigitalCommerce from '../VideoLibrary/DigitalCommerce.js'
import AprimoDam from '../VideoLibrary/AprimoDam.js'
import Salesforce from '../VideoLibrary/Salesforce.js'
import CEDVideo from '../VideoLibrary/CEOVideo.js'
import CtaBanner from '../VideoLibrary/CtaBanner.js'
import './VideoTailwind.css';


const VideoLibrary = () => {
  return (
   <div className='body-video-library'>
    
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
  )
}

export default VideoLibrary;