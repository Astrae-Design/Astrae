import ChatWidget from "@/components/common/chat-widget";
import GalleryShowcase from "@/components/custom/gallery";
import Hero from "@/sections/common/hero";
import LogoTicker from "@/sections/common/logo-ticker";
import Reviews from "@/sections/common/reviews";
import Value from "@/sections/common/value";
import FaqCentral from "@/sections/home/faq";

const Home = () => {
  return (
    <div>
      <ChatWidget />
      <Hero />
      <LogoTicker />
      <GalleryShowcase />
      <div className="h-[10rem]" />
      <Value />
      <FaqCentral />
      <Reviews />
    </div>
  );
};

export default Home;