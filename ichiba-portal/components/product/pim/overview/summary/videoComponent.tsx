import { useRouter } from "next/router";

const VideoComponent = () => {
  const router = useRouter();

  // Tạo một key duy nhất dựa trên locale để khi locale thay đổi, component sẽ được render lại
  const key =
    "https://cms-strapi.ichiba.net/uploads/V1_VP9_e8dlku.webm";

  return (
    <div>
      <video
        style={{ width: "612px" }}
        poster="https://cms-strapi.ichiba.net/uploads/V1_VP9_e8dlku.webm"
        playsInline
        autoPlay
        muted
        loop
        preload="auto"
      >
        <source src={key} type="video/webm; codecs=vp9" />
      </video>
    </div>
  );
};
export default VideoComponent;
