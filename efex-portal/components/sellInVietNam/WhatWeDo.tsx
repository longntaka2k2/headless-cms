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
const WhatWeDo = ({ lang, params }: any) => {

  return (
    <div id="what-we-do" className="py-6 lg:px-0 lg:py-15">
      <div className="font-bold text-2xl lg:text-4xl text-center lg:pb-5 px-4">
        {lang.title[0]} <span className="text-contact">{lang.title[1]}</span>{" "}
        {lang.title[2]}
      </div>
      <AnchorLinks
        items={[...lang.listLable].map(
          (x) => ({
            label: x,
            href: "#" + removeAccent(x),
          })
        )}
      />
      <SetupBusiness lang={lang.setup} />
      <Import lang={lang.import} />
      <Build lang={lang.build} params={params} />
      <Promote lang={lang.promote} />
      <Manage lang={lang.manageSup} />
      <After lang={lang.manageAfter} />
      <Cash data={lang.support} />
    </div>
  );
};

export default WhatWeDo;
