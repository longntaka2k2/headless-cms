import clsx from "clsx";
import Image from "next/image";

export default function CaseStudieSlider({ lang }: { lang: any }) {
  const logo = [
    "https://strapi-ezbuy.ichiba.net/uploads/9_d0b77f1572.webp",
    "https://strapi-ezbuy.ichiba.net/uploads/10_77a4eb92f3.webp",
    "https://strapi-ezbuy.ichiba.net/uploads/13_7d954e4f6b.webp",
    "https://strapi-ezbuy.ichiba.net/uploads/6_ddd3e9f78a.webp",
    "https://strapi-ezbuy.ichiba.net/uploads/5_779647aece.webp",
    "https://strapi-ezbuy.ichiba.net/uploads/12_64580d0b51.webp",
    "https://strapi-ezbuy.ichiba.net/uploads/8_5d78d2d8f5.webp",
    "https://strapi-ezbuy.ichiba.net/uploads/11_ac87ddeb10.webp",
    "https://strapi-ezbuy.ichiba.net/uploads/7_eca7342b70.webp",
    "https://strapi-ezbuy.ichiba.net/uploads/1_3fe1bb1d88.webp",
    "https://strapi-ezbuy.ichiba.net/uploads/4_06911d7cc5.webp",
    "https://strapi-ezbuy.ichiba.net/uploads/2_dea3ecb855.webp",
    "https://strapi-ezbuy.ichiba.net/uploads/3_225290706d.webp",
    "https://strapi-ezbuy.ichiba.net/uploads/9_d0b77f1572.webp",
    "https://strapi-ezbuy.ichiba.net/uploads/10_77a4eb92f3.webp",
    "https://strapi-ezbuy.ichiba.net/uploads/13_7d954e4f6b.webp",
    "https://strapi-ezbuy.ichiba.net/uploads/6_ddd3e9f78a.webp",
    "https://strapi-ezbuy.ichiba.net/uploads/5_779647aece.webp",
    "https://strapi-ezbuy.ichiba.net/uploads/12_64580d0b51.webp",
    "https://strapi-ezbuy.ichiba.net/uploads/8_5d78d2d8f5.webp",
    "https://strapi-ezbuy.ichiba.net/uploads/11_ac87ddeb10.webp",
    "https://strapi-ezbuy.ichiba.net/uploads/7_eca7342b70.webp",
    "https://strapi-ezbuy.ichiba.net/uploads/1_3fe1bb1d88.webp",
    "https://strapi-ezbuy.ichiba.net/uploads/4_06911d7cc5.webp",
    "https://strapi-ezbuy.ichiba.net/uploads/2_dea3ecb855.webp",
    "https://strapi-ezbuy.ichiba.net/uploads/3_225290706d.webp",
  ];

  return (
    <div className="inf-slider">
      <div
        style={{ width: "100%" }}
        className="flex items-center justify-between"
      >
        <hr className="w-full lg:hidden" />
        <p
          className={clsx(
            "min-w-[300px] lg:w-full mb-0 text-center uppercase",
            "text-[10px] lg:text-xs text-ic-black-5 font-medium leading-4"
          )}
        >
          {lang.contentSider}
        </p>
        <hr className="w-full lg:hidden" />
      </div>
      <div className="slider">
        {/* <div className="slide-track">
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_21098_4df46593f2_a1997e239c.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_21097_64491da689_465ea66988.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Delivery_Shipment_Box_Arrows_5849227eb9_fbfc5e9859.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_21103_2_50d2f51ddb_b47c52acbf.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_21099_da5ee432bc_f758b329be.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_21100_dc9f31b69c_0bbec859af.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_21103_35ddf99b58_b94ee307eb.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_21101_398a147fd1_d839f802d5.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_21103_1_b3c059cd80_e56019ab70.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_21102_1_99904daaeb_d5901989b3.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_21102_e56df1039a_36976d52c6.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_21105_1_ff303d1a16_a958ba35b5.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_21102_3_16d4b0a0ca_23fdb3bc32.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_21105_9345ffd148_293bb38eed.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_21102_2_f0395b72cb_4a5ad8d7d4.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_21104_4_67002501b3_90d258cece.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_21105_2_89c39b854e_4559944b13.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_21106_1_dcdfccfc24_37676422f0.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_21104_3_e996b3c3be_953c89ac72.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_21103_3_2b0e68faf4_fe374a12ba.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_21104_1_93e831b46e_9c3d7b7c23.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_21108_87ca1c4c34_4b7c31aac8.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_21104_fe14a5e76a_0fca995e6b.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_21105_3_a88bb49036_eb69f1c0fe.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_21104_2_3cc0e639e5_c7c7da8518.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_21107_96d1d67820_e527e50003.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_21107_1_1c03cb713f_5b57aabccf.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_21107_4_2c62599f47_5e1f0bb6ca.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_21106_3_657508501e_2e9f5ddcb3.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_21106_2_10dfc2fba1_0149acf314.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_21106_d3456b3fcc_776e09e4f5.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_21107_3_fa7a2c3f22_6956691a8c.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_21107_2_aa0afe2413_d51ce4fac2.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
          <div className="slide">
            <Image
              src="https://strapi-efex.ichiba.net/uploads/Frame_21106_4_b069fe415c_bd7082b62a.png"
              height={100}
              width={250}
              alt="slide"
            />
          </div>
        </div> */}

        <div className="slide-track">
          {logo.map((item, index) => (
            <div key={index} className="slide">
              <Image
                src={item}
                height={100}
                width={250}
                alt="slide"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
