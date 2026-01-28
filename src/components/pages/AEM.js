import AemClientsSection from "../AEM/AemClientsSection";
import AemCtaSection from "../AEM/AemCtaSection";
import AemFaqSection from "../AEM/AemFaqSection";
import AemFooterCtaSection from "../AEM/AemFooterCtaSection";
import AemHero from "../AEM/AemHero";
import AemSitesTabs from "../AEM/AemSitesTabs";
import AemTwoColumnScroll from "../AEM/AemTwoColumnScroll";
import HomeFooter from "../HomeFooter/HomeFooter";
import Navbar from "../Navbar";

export default function AemPage() {
  return (
    <>
      <Navbar />
      <AemHero />
      <AemSitesTabs />
      <AemTwoColumnScroll />
      <AemCtaSection />
      <AemClientsSection />
      <AemFaqSection />
      <AemFooterCtaSection />
      <HomeFooter />
    </>
  );
}
