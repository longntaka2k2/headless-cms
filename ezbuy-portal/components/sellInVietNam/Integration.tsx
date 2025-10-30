"use client";
import { Tab, Transition } from "@headlessui/react";
import { useState, useEffect } from "react";
import clsx from "clsx";
import EzImage from "../commons/EzImage";

const Integration = ({ lang }: { lang: any }) => {
  const [active, setActive] = useState<any>(null);
  const [imgsLoaded, setImgsLoaded] = useState(false);
  const [tabs] = useState([
    {
      title: lang.contents[0].title,
      des: lang.contents[0].des,
      icons: [
        "/uploads/Rectangle_29_1_a2cd587f6e.png",
        "/uploads/Rectangle_29_2_8a4b388780.png",
        "/uploads/Rectangle_30_1_c4d4080ab7.png",
        "/uploads/Group_260935_daca10aeb7.png",
        "/uploads/Rectangle_29_3_a167e5be5c.png",
        "/uploads/Group_260936_060c972fa9.png",
      ],
    },
    {
      title: lang.contents[1].title,
      des: lang.contents[1].des,
      icons: [
        "/uploads/Group_260929_020ae99400.png",
        "/uploads/Group_260930_32aed7d3e5.png",
        "/uploads/Rectangle_29_0417183f63.png",
        "/uploads/Rectangle_30_5ff5547469.png",
        "/uploads/Group_260931_40f4241cab.png",
        "/uploads/Group_260932_48b3fd8505.png",
        "/uploads/Group_260933_c4b843e4e3.png",
        "/uploads/Group_260934_150a53f61f.png",
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
    <section
      className={clsx(
        "px-4 py-6 lg:py-10",
        "bg-[url('https://strapi-ezbuy.ichiba.net/uploads/Layer_1_717b30b0ca.svg')]",
        "bg-cover bg-no-repeat"
      )}
    >
      <h2 className="mb-8 text-center text-2xl md:text-4xl font-black uppercase">
        {lang.heading}
      </h2>
      <div className="container">
        <div className="flex justify-center flex-col content-center items-center w-full">
          <Tab.Group>
            <Tab.List
              className={clsx(
                "flex gap-1",
                "p-1 mb-6 bg-white w-fit md:mb-6 overflow-auto ",
                "border border-brand-primary rounded-full"
              )}
            >
              {tabs.map((x, idx) => (
                <Tab
                  key={idx}
                  className={({ selected }) =>
                    clsx(
                      "rounded-full px-6 py-3 text-sm lg:text-base",
                      "max-w-[186px]",
                      selected
                        ? "bg-brand-primary text-white lg:font-bold"
                        : "!text-brand-primary "
                    )
                  }
                >
                  <span className="">{x.title}</span>
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className={"w-full"}>
              {tabs.map((x, idx) => (
                <Tab.Panel key={idx} className={" min-w-min"}>
                  {({ selected }) => (
                    <Transition show={selected}>
                      <h3 className="text-center mb-6 lg:mb-10 flex justify-center">
                        <span className="lg:max-w-[80%]">{x.des}</span>
                      </h3>
                      <div
                        className={clsx(
                          "grid grid-cols-2 justify-items-center",
                          x.icons.length == 6
                            ? "lg:grid-cols-3"
                            : "lg:grid-cols-4",
                          "w-full gap-4 "
                        )}
                      >
                        {x.icons.map((icon, iconIdx) => (
                          <Transition.Child
                            enter="transform transition duration-[400ms]"
                            enterFrom="opacity-0 rotate-[-120deg] scale-50"
                            enterTo="opacity-100 rotate-0 scale-100"
                            leave="transform duration-200 transition ease-in-out"
                            leaveFrom="opacity-100 rotate-0 scale-100"
                            leaveTo="opacity-0 scale-95"
                            key={icon + x.title}
                            className={"w-fit"}
                          >
                            <div
                              className={clsx(
                                // "h-full flex justify-center items-center",
                                "rounded-xl mx-auto",
                                "transition-all duration-200 hover:scale-110 ease-out "
                              )}
                            >
                              <EzImage
                                src={icon}
                                alt="Icon"
                                className="rounded-lg"
                                width={240}
                                height={96}
                                unoptimized
                              />
                            </div>
                          </Transition.Child>
                        ))}
                      </div>
                    </Transition>
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
export default Integration;
