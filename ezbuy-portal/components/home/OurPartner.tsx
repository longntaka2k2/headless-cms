"use client";
import { Tab, Transition } from "@headlessui/react";
import { useState, useEffect } from "react";
import clsx from "clsx";
import EzImage from "../commons/EzImage";

const OurPartner = ({ lang }: { lang: any }) => {
  const { ourPartner } = lang.home;

  const [active, setActive] = useState<any>(null);
  const [imgsLoaded, setImgsLoaded] = useState(false);
  const [tabs] = useState([
    {
      title: ourPartner.tabs[0].title,
      description: ourPartner.tabs[0].description,
      icons: [
        "/uploads/fed_Ex_38ed765f17.png",
        "/uploads/DHL_251c760305.png",
        "/uploads/ups_8ea1633ba6.png",
        "/uploads/sagawa_0f06bdcbe8.png",
        "/uploads/sagawa_613e3c9232.png",
        "/uploads/yamato_1f9ebc3e5a.png",
        "/uploads/nippon_Express_7a27e8f1f8.png",
        "/uploads/jp_Holding_fd6a2ca234.png",
      ],
    },
    {
      title: ourPartner.tabs[1].title,
      description: ourPartner.tabs[1].description,
      icons: [
        "/uploads/amazon_c2d358d6be.png",
        "/uploads/mercari_6f73fd2e80.png",
        "/uploads/locondo_a2e2ca5a9d.png",
        "/uploads/muji_7f6b54dfdb.png",
        "/uploads/pandora_3f5f4e918b.png",
      ],
    },
  ]);

  useEffect(() => {
    const loadImage = (image: any) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image;
        // wait 2 seconds to simulate loading time
        loadImg.onload = () => resolve(image);

        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(
      tabs
        .map((x) => x.icons)
        .flat()
        .map((image: any) => loadImage(image))
    )
      .then(() => setImgsLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, []);

  useEffect(() => {
    setActive(tabs[0]);
  }, [tabs]);
  return (
    <section className="px-4 mt-[120px] lg:mt-0 py-10">
      <h2 className="mb-8 text-center text-2xl md:text-4xl font-black uppercase">
        {ourPartner.heading}
      </h2>
      <div className="container">
        <div className="flex justify-center flex-col content-center items-center w-full">
          <Tab.Group>
            <Tab.List
              className={clsx(
                "flex gap-1",
                "rounded-3xl p-1 bg-whitesmoke-100 w-fit md:mb-6  overflow-auto ",
                "transition-all duration-1000"
              )}
            >
              {tabs.map((x) => (
                <Tab
                  key={x.title}
                  className={({ selected }) =>
                    clsx(
                      "rounded-3xl px-6 py-3 text-sm lg:text-base",
                      selected
                        ? "bg-brand-primary text-white lg:font-bold"
                        : "!text-brand-primary"
                    )
                  }
                >
                  <span className="w-full truncate">{x.title}</span>
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className={"w-full"}>
              {tabs.map((x, idx) => (
                <Tab.Panel key={idx} className={" min-w-min"}>
                  {({ selected }) => (
                    <>
                      <Transition show={selected}>
                        <h3 className="text-center mb-10 flex justify-center">
                          <span className="lg:max-w-[80%]">
                            {x.description}
                          </span>
                        </h3>
                        <div className="flex flex-wrap gap-6 justify-center items-center lg:h-[230px]">
                          {x.icons.map((icon, iconIdx) => (
                            <Transition.Child
                              enter="transform transition duration-[400ms]"
                              enterFrom="opacity-0 rotate-[-120deg] scale-50"
                              enterTo="opacity-100 rotate-0 scale-100"
                              leave="transform duration-200 transition ease-in-out"
                              leaveFrom="opacity-100 rotate-0 scale-100"
                              leaveTo="opacity-0 scale-95"
                              key={icon + x.title}
                            >
                              <div
                                className={clsx(
                                  "md:w-[150px]  object-center md:mx-4",
                                  "rounded-xl ",
                                  "transition-all duration-200 hover:scale-125 ease-out"
                                )}
                              >
                                <EzImage
                                  src={icon}
                                  alt="Ezbuy"
                                  className="rounded-lg h-[90px] object-contain"
                                  width={150}
                                  height={83}
                                />
                              </div>
                            </Transition.Child>
                          ))}
                        </div>
                      </Transition>
                    </>
                  )}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
};
export default OurPartner;
