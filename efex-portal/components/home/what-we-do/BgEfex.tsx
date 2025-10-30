import Image from "next/image";
import efex from "@/public/images/home/whatWeDo/efexbg.svg";

const BGEfex = () => { 
    
    return(
        <div className="absolute lef-0 bottom-0 hidden lg:block z-[-1]">
            <Image src={efex} alt="efex" quality={100} />
        </div>
    )
}
export default BGEfex;