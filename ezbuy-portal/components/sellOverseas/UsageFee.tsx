import EzImage from "../commons/EzImage";

const UsageFee = ({ lang }: any) => {
  return (
    <div className="bg-[url(https://strapi-ezbuy.ichiba.net/uploads/Trust_and_Security_1_dcbb62456e.png)] bg-no-repeat bg-cover lg:py-10 py-6">
      <div className="container text-white lg:px-0 px-4">
        <h2 className="text-center lg:text-4xl text-2xl font-black text-white uppercase">
          {lang.title}
        </h2>
        <div className="text-center  ">{lang.subtitle}</div>
        <div className="grid lg:grid-cols-2 gap-5 lg:mt-10 mt-6 items-center">
          <div className="bg-[rgba(255,_255,_255,_0.25);] rounded-xl lg:p-6 p-4 h-full flex items-center ">
            <EzImage
              src={"/uploads/Group_109a1ced40.svg"}
              alt="/uploads/Group_109a1ced40.svg"
              width={46}
              height={46}
              className="max-w-[46px] mr-7"
            />
            <div className="mt-2 ">
              <div className="font-bold lg:text-xl text-lg">
                {lang.forJapan}
              </div>
              <div>
                <span className="lg:text-base text-sm">
                  {lang.initial.title}
                </span>{" "}
                <span className="lg:text-xl text-base font-bold">
                  {lang.initial.value}
                </span>
              </div>
              <div>
                <span className="lg:text-base text-sm">
                  {lang.monthy.title}
                </span>{" "}
                <span className="lg:text-xl text-base font-bold">
                  {lang.monthy.value}
                </span>
              </div>
              <div>
                <span className="lg:text-base text-sm">{lang.sale.title}</span>{" "}
                <span className="lg:text-xl text-base font-bold">
                  {lang.sale.value}
                </span>
              </div>
            </div>
          </div>
          <div className="bg-[rgba(255,_255,_255,_0.25);] rounded-xl lg:p-6 p-4  h-full flex items-center">
            <EzImage
              src={"/uploads/Group_1_f4167dffaa.svg"}
              alt="/uploads/Group_1_f4167dffaa.svg"
              width={46}
              height={46}
              className="max-w-[46px] mr-7"
            />
            <div className="mt-2">
              <div className="font-bold lg:text-xl text-lg">
                {lang.forOverseas}
              </div>
              <div>
                <span className="lg:text-xl text-base font-bold">
                  {lang.purchase.title}
                </span>{" "}
                <span className="lg:text-base text-sm">
                  {lang.purchase.value}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:mt-10 mt-6 lg:text-base text-sm">
          {lang.ezbuy}
        </div>
        <div className="lg:text-base text-sm ">
        {lang.custom}
        </div>
        <div className="lg:text-base text-sm mt-4">
        {lang.incase}
        </div>
      </div>
    </div>
  );
};
export default UsageFee;
