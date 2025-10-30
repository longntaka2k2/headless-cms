import Image from "next/image";

const CustomerStories = ({ lang }: { lang: any }) => {
  return (
    <div className="bg-[#E2ECFF] py-6 lg:py-15 lg:pb-[100px] px-3">
      <div className="container p-6 lg:py-10 rounded-2xl bg-white relative">
        <h2 className="mb-2 text-xl sm:text-2xl font-bold lg:text-4xl lg:leading-[48px] text-center">
          {lang.heading}
        </h2>
        <p className="mb-6 lg:mb-10 text-sm lg:text-lg text-center lg:w-[45%] mx-auto">
          {lang.subHeading}
        </p>
        <div className="grid lg:grid-cols-2 lg:w-[70%] mx-auto">
          <Image
            src="https://strapi-efex.ichiba.net/uploads/Body_8b8513676f.svg"
            alt="EFEX"
            width={462}
            height={301}
            className="mx-auto"
          />
        </div>
        <Image
          src="https://strapi-efex.ichiba.net/uploads/Group_1171275983_f1e113e008.svg"
          alt="EFEX"
          width={589}
          height={460}
          className="absolute bottom-[-40px] right-[-60px] hidden xl:block" 
        />
        <Image
          src="https://strapi-efex.ichiba.net/uploads/Group_1171276003_2f9d45eab6.svg"
          alt="EFEX"
          width={281}
          height={200}
          className="xl:hidden mx-auto"
        />
      </div>
    </div>
  );
};

export default CustomerStories;
