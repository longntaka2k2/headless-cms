import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Support = ({lang } : any) => {
  return(
    <div className="px-4 lg:px-0 mt-4 lg:mt-8 container">
        <div className="text-center">
          <div className="text-[16px] font-bold lg:text-[20px] text-brand-secondary">
            {lang?.support?.title}
          </div>
          <div className="text-xs text-[#666]">{lang?.support?.subtitle}</div>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-6">
          {lang?.support?.item.map((value: any, index: number) => (
            <div
              className="p-4 lg:p-5 border border-[#F2F2F2] rounded-lg shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)]"
              key={index}
            >
              <div className="flex">
                <div className="text-sm font-bold mr-2  lg:text-lg">{value?.title}</div>
                <div className="text-xs whitespace-nowrap lg:text-sm border border-[#389E0D] text-[#389E0D] bg-[#F6FFED] rounded py-[2px] px-2 h-max  w-max">
                  {value?.tag}
                </div>
              </div>
              <div className="grid grids-col-1 gap-2 mt-2 lg:mt-5">
                {value?.content?.map((x: any, x_index: number) => (
                  <div key={x_index} className="flex items-center ">
                    <div>
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="w-5 h-5 text-[#0F62FE] mr-[6px] lg:mr-3"
                      />
                    </div>
                    <div className="text-sm lg:text-base">{x}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Support