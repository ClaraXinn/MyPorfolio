import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 mb-[100px]" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:claraxin340@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 flex-col items-center justify-center gap-6">


        <div className="flex items-center lg:gap-8 md:gap-3 gap-6">
        {socialMedia.map((info) => (
  <a
    key={info.id}
    href={info.link}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex justify-center items-center cursor-pointer backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:scale-110 transition-transform duration-200"
  >
    <img src={info.img} alt="icon" width={20} height={20} />
  </a>
))}

        </div>
      </div>
    </footer>
  );
};

export default Footer;
