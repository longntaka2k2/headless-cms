import HighlightWord from "@/components/commons/HighlightWord";
import CardVideo from "./CardVideo";

// var cElement: YouTubeEvent = { data: null, target: null };
const Discover = ({ lang ,locale}: any) => {
  const imgs = [
    "/uploads/Image_7_5ed584bcb4.png",
    "/uploads/Image_8_5af3cb5d72.png",
    "/uploads/Image_9_c2391089f9.png",
    "/uploads/Image_10_361eb1e1fe.png",
  ];
  return (
    <div className="py-6 lg:py-0 ">
      <div className="container mb-5 lg:mb-10 ">
        <h2 className="lg:w-[440px] px-4 lg:px-0">
          {lang.heading[0]} <span className="text-brand-primary">{lang.heading[1]}</span>{lang.heading[2]}
        </h2>
      </div>
      <div className="flex gap-4 lg:gap-6 overflow-auto no-scrollbar snap-x snap-mandatory">
        {imgs.map((x, idx) => (
          <CardVideo
            src={x}
            key={idx}
            className="snap-center"
            des={lang.contents[idx]}
          />
        ))}
      </div>
    </div>
  );
};
export default Discover;
