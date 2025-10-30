import { useRouter } from "next/router";

const VideoComponent = () => {
  const router = useRouter();
  const { locale } = router;

  // Tạo một key duy nhất dựa trên locale để khi locale thay đổi, component sẽ được render lại
  const key = locale === 'vi' ? 'https://res.cloudinary.com/ddfimvvmo/video/upload/v1685943287/com1Vi_f9m4ub.mp4' : 'https://res.cloudinary.com/ddfimvvmo/video/upload/v1685943459/discover_iq2lqa.mp4'

  return (
    <div key={key}>
      <video style={{ width: '100%' }} controls autoPlay muted loop>
        <source src={key} type="video/mp4" />
      </video>
    </div>
  );
};
export default VideoComponent;