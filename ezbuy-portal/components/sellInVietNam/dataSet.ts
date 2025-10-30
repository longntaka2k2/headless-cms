import { Content } from "next/font/google";
import { title } from "process";
import costIcon from "@/public/images/services/siv/whatwedo/costIcon.svg";
import costIconActive from "@/public/images/services/siv/whatwedo/costIconActive.svg";
import costImg from "@/public/images/services/siv/whatwedo/costImg.webp";
import digitalIcon from "@/public/images/services/siv/whatwedo/digitalIcon.svg";
import digitalIconActive from "@/public/images/services/siv/whatwedo/digitalIconActive.svg";
import digitalImg from "@/public/images/services/siv/whatwedo/digitalImg.webp";
import mistakeIcon from "@/public/images/services/siv/whatwedo/mistakeIcon.svg";
import mistakeIconActive from "@/public/images/services/siv/whatwedo/mistakeIconActive.svg";
import mistakeImg from "@/public/images/services/siv/whatwedo/mistakeImg.webp";
import transIcon from "@/public/images/services/siv/whatwedo/transIcon.svg";
import transIconActive from "@/public/images/services/siv/whatwedo/transIconActive.svg";
import transImg from "@/public/images/services/siv/whatwedo/transImg.webp";
import professional from "@/public/images/services/siv/whatwedo/professional.webp";
import shipment from "@/public/images/services/siv/whatwedo/shipment.webp";
import significantly from "@/public/images/services/siv/whatwedo/significantly.webp";
import build from "@/public/images/services/siv/whatwedo/build.webp";
import create from "@/public/images/services/siv/whatwedo/create.svg";
import increase from "@/public/images/services/siv/whatwedo/increase.svg";
import integrate from "@/public/images/services/siv/whatwedo/integrate.svg";
import seo from "@/public/images/services/siv/whatwedo/seo.svg";
import building from "@/public/images/services/siv/whatwedo/building.svg";
import setUpAndRun from "@/public/images/services/siv/whatwedo/setUpAndRun.svg";
import livestream from "@/public/images/services/siv/whatwedo/Livestream.svg";
import store from "@/public/images/services/siv/whatwedo/store.svg";
import pick from "@/public/images/services/siv/whatwedo/pick.svg";
import last from "@/public/images/services/siv/whatwedo/last.svg";
import manage from "@/public/images/services/siv/whatwedo/manage.svg";
import realtime from "@/public/images/services/siv/whatwedo/realtime.svg";
import design from "@/public/images/services/siv/whatwedo/design.svg";
import cash from "@/public/images/services/siv/whatwedo/cash.svg";

const dataSet = {
  whatWeDo: [
    {
      title: "Set up business",
      items: {
        number: "#1",
        title: "Business Registration Service",
        content: [
          {
            title: "Digital documents",
            content:
              "Submit your documents and acquire licenses, certificat es, and permits digitally, which hold the same legal validity as their physical counterparts.",
            icon: digitalIcon,
            active: digitalIconActive,
            img: digitalImg,
          },
          {
            title: "No mistakes and delays",
            content:
              "Leverage expertise within many years to ensure the precise and timely registering completion of your application within 5-7 days, preventing expensive delays and ensuring a swift start for your business.",
            icon: mistakeIcon,
            active: mistakeIconActive,
            img: mistakeImg,
          },
          {
            title: "Cost-effective & Time-saving",
            content:
              "Complete the registration process more efficiently & smoothly, avoid costly mistakes and enjoy various fees reduction from the Vietnamese Government.",
            icon: costIcon,
            active: costIconActive,
            img: costImg,
          },
          {
            title: "Transparent & various payment methods",
            content:
              "See all listed line-by-line fees and pay them online within an instant with many payment method options.",
            link: "Just pay as you go!",
            url: "",
            icon: transIcon,
            active: transIconActive,
            img: transImg,
          },
        ],
      },
    },
    {
      title: "Import - Export",
      items: {
        number: "#2",
        title: "Import - Export Service",
        content: [
          {
            title: "Professional & prompt customs clearance",
            content:
              "Prepare procedure, provide a faster & simpler customs clearance process with encrypted & secure digital documents, moving all shipments across the border within 1-3 days.",
            img: professional,
          },
          {
            title: "Significantly optimize customs cost",
            content:
              "Assist in calculating the customs value of your goods accurately so as not to incur unexpected costs when shipping.",
            img: shipment,
          },
          {
            title: "100% shipment visibility at every step",
            content:
              "Gain peace of mind by tracking your cargo status during the exporting-importing journey on one platform.",
            img: significantly,
          },
        ],
      },
    },
    {
      title: "Build business",
      items: {
        number: "#3",
        title: "Open online stores on multiple marketplaces",
        img: build,
        content: [
          {
            title: "Create online stores professionally",
            content:
              "Set up your customized onlines stores on multiple platforms such as Shopee, Tiki, TikTok, Lazada, Facebook, Instagram,... in some minutes.",
            img: create,
          },
          {
            title: "SEO optimization",
            content:
              "Enhance your SEO strategy to expand visibility to new audiences, and adopt a language & messaging style to connects with buyers across all sales channels.",
            img: seo,
          },
          {
            title: "Increase brand trust",
            content:
              "Optimize indicators of stores: customer reviews, followers & chat response rate, which leads to customer trust, increases conversion rates, and contributes to overall business growth.",
            img: increase,
          },
          {
            title: "Integrate & sync multichannel order",
            content:
              "Integrate & synchonize all order data from all sales channels to a single dashboard, easily managing & controlling selling in real-time right on our proprietary software for",
            img: integrate,
            free: "free,",
          },
        ],
      },
    },
    {
      title: "Promote brand awareness",
      items: {
        number: "#4",
        title: "Marketing Service",
        content: [
          {
            title: "Building sales channels (Tiktok, Facebook, Instagram,...)",
            content:
              "Set up your customized onlines stores on multiple platforms such as Shopee, Tiki, TikTok, Lazada, Facebook, Instagram,... in some minutes.",
            img: building,
          },
          {
            title: "Set up and run campaign/ads smoothly",
            content:
              "Create effective strategies by utilizing genuine consumer sentiments, insights, and essential metric recommendations to enhance your customer experience. ",
            img: setUpAndRun,
          },
          {
            title: "Livestream solution",
            content:
              "Engage followers or customers around the world, wherever they watch with the best quality across devices. Increase customer satisfaction and stimulate conversions maximum in each livestream session.",
            img: livestream,
          },
        ],
      },
    },
    {
      title: "Manage supply chain",
      items: {
        number: "#5",
        title: "Order Fulfillment Service (FBE)",
        content: [
          {
            title: "Store inventory safely 24x7x365",
            content:
              "Just send goods to our fulfillment centers, EzBuy Japan will handle the rest from receiving, putting away and storing inventory securely 24x7x365. Update stock level continuously for you to keep your goods volume exactly in our warehouses.",
            img: store,
          },
          {
            title: "Pick, pack and ship orders fastest",
            content:
              "Fulfill orders swiftly right after we receive a notification of your new orders. Ensure orders are handled exactly such as adding vouchers/ value added services,... if required.",
            img: pick,
          },
          {
            title: "Last-mile delivery",
            content:
              "Automatically suggest the shortest way to the receivers. Fastest door-to-door delivery time on the same day or within 2 days, enhancing customer overall shopping experience and satisfaction.",
            img: last,
          },
          {
            title: "Manage returns",
            content:
              "Effectively conduct returned product testing, evaluation, sorting, reintegrate sellable items into the active inventory. Always ensure a streamlined, cost-effective returns process to enhance the best client experience.",
            img: manage,
          },
        ],
      },
    },
    {
      title: "Manage after sales",
      items: {
        number: "#6",
        title: "After-sales Support",
        content: [
          {
            title: "Real-time online support 24/7",
            content:
              "Immediate online assistance through various channels, such as email, chat, forums, and a social media interface (with monitoring) to aid in addressing customer complaints and feedback.",
            img: realtime,
          },
          {
            title: "Design appropriate customer care ",
            content:
              "Study users’ post-sale behavior and design self-service solutions to nurture and motivate customers to return and become loyal to your brand.",
            img: design,
          },
        ],
      },
    },
    {
      title: "Support Cash on Delivery & Reconciliation",
      items: {
        number: "#7",
        img: cash,
        content: [
          {
            title: "Support Cash on Delivery (COD)",
            content:
              "Simplify the purchasing process for customers who prefer to pay upon delivery of their orders, especially for those living in suburban or rural areas where a lot of people do not use cards.",
          },
          {
            title: "Reconcile COD & send to sellers on the same day",
            content:
              "Our Cash-on-delivery (COD) reconciliation and returning refunds to the sellers on the same day guarantees that sellers can rapidly access their funds, ensuring a smooth financial process and effective business.",
          },
        ],
      },
    },
  ],
};

export default dataSet;
