import {
  StrapiMediaModel,
  StrapiRelationModel,
} from "@/src/lib/models/StrapiModel";
import Image from "next/image";
import { useRouter } from "next/router";
interface Props {
  heading?: string;
  id?: number;
  subHeading?: string;
  items?: {
    link?: string;
    image: StrapiRelationModel<StrapiMediaModel>;
  }[];
}
const slider = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  return (
    <>
      <div className="inf-slider">
        <div style={{ width: "100%" }}>
          <div className="hrhr text-center">
            {router?.locale === "vi"
              ? "ĐƯỢC TIN TƯỞNG BỞI 1,000+ KHÁCH HÀNG TẠI HƠN 220 QUỐC GIA"
              : "Trusted by 1,000+ professional companies in 220+ countries"}
          </div>
        </div>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Delivery_Shipment_Box_Arrows_5849227eb9.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_21098_4df46593f2.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_21099_da5ee432bc.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_21100_dc9f31b69c.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_21101_398a147fd1.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_21097_64491da689.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_21107_96d1d67820.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_21106_d3456b3fcc.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_21105_9345ffd148.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_21104_fe14a5e76a.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_21103_35ddf99b58.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_21102_e56df1039a.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_21107_1_1c03cb713f.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_21106_1_dcdfccfc24.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_21105_1_ff303d1a16.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_21104_1_93e831b46e.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_21103_1_b3c059cd80.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_21102_1_99904daaeb.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_21107_2_aa0afe2413.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_21106_2_10dfc2fba1.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_21104_2_3cc0e639e5.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_21103_2_50d2f51ddb.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_21102_2_f0395b72cb.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_21107_3_fa7a2c3f22.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_21106_3_657508501e.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_21105_2_89c39b854e.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_21104_3_e996b3c3be.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_21103_3_2b0e68faf4.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_21102_3_16d4b0a0ca.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_21107_4_2c62599f47.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_21106_4_b069fe415c.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_21105_3_a88bb49036.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_21104_4_67002501b3.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
            <div className="slide">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_21108_87ca1c4c34.png"
                height={100}
                width={250}
                alt="slide"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default slider;
