import Import from "./WhatWedo/Import";
import SetupBusiness from "./WhatWedo/setUpBusiness";
import Build from "./WhatWedo/Build";
import Promote from "./WhatWedo/Promote";
import Manage from "./WhatWedo/Manage";
import dataSet from "./dataSet";
import After from "./WhatWedo/After";
import Cash from "./WhatWedo/Cash";
import AnchorLinks from "./AnchorLinks";
import { removeAccent } from "@/utils/ultils";
const WhatWeDo = ({ lang, locale }: { lang: any; locale: string }) => {
  return (
    <div id="what-we-do" className=" lg:px-0 lg:py-[60px] py-6">
      <div className="font-bold text-2xl lg:text-4xl text-center lg:pb-5 px-4">
        {lang.whatWeDoHeading}
      </div>
      <AnchorLinks
        items={[...lang.whatWeDo.slice(0, lang.whatWeDo.length - 1)].map(
          (x) => ({
            label: x?.title!,
            href: "#" + (locale == "ja" ? x?.title : removeAccent(x?.title!)),
          })
        )}
      />
      <SetupBusiness lang={lang.whatWeDo[0] as any} locale={locale} />
      <Import
        lang={lang.whatWeDo[1]}
        data={dataSet.whatWeDo[1] as any}
        locale={locale}
      />
      <Build
        data={dataSet.whatWeDo[2] as any}
        lang={lang.whatWeDo[2]}
        locale={locale}
      />
      <Promote
        data={dataSet.whatWeDo[3] as any}
        lang={lang.whatWeDo[3]}
        locale={locale}
      />
      <Manage
        data={dataSet.whatWeDo[4] as any}
        lang={lang.whatWeDo[4]}
        locale={locale}
      />
      <After
        data={dataSet.whatWeDo[5] as any}
        lang={lang.whatWeDo[5]}
        locale={locale}
      />
      <Cash
        data={dataSet.whatWeDo[6] as any}
        lang={lang.whatWeDo[6]}
        locale={locale}
      />
    </div>
  );
};

export default WhatWeDo;
