"use client";
import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PIPEDRIVE_API_TOKEN = "aca3924064e0f8e8acaecfe808d671950dd0b102";
const PIPEDRIVE_API_URL = "https://api.pipedrive.com/v1";

const FromVietNam = ({ lang }: { lang: any }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneValid, setValidPhone] = useState(false);

  const validateForm = () => {
    let isValid = true;
    if (phoneNumber === "" || phoneNumber.length < 10) {
      setValidPhone(true);
      isValid = false;
    } else {
      setValidPhone(false);
    }
    return isValid;
  };
  const sendToPipedrive = async (phoneNumber: string) => {
    try {
      // Tạo person trước
      const personData = {
        name: `Contact - ${phoneNumber}`,
        phone: [
          {
            value: phoneNumber,
            primary: true,
            label: "mobile",
          },
        ],
        visible_to: "3",
      };

      const personResponse = await fetch(
        `${PIPEDRIVE_API_URL}/persons?api_token=${PIPEDRIVE_API_TOKEN}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(personData),
        }
      );

      const personResult = await personResponse.json();

      if (personResult.success) {
        // Sau khi tạo person thành công, tạo lead
        const leadData = {
          title: `EFEX-CTAFromVietnam - ${phoneNumber}`,
          person_id: personResult.data.id,
          visible_to: "3",
          label_ids: [],
          expected_close_date: new Date().toISOString().split("T")[0],
          value: {
            amount: 0,
            currency: "USD",
          },
        };

        const leadResponse = await fetch(
          `${PIPEDRIVE_API_URL}/leads?api_token=${PIPEDRIVE_API_TOKEN}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(leadData),
          }
        );

        const leadResult = await leadResponse.json();

        // Update lead with Groupdata after creation
        if (leadResult.success) {
          // Get custom fields first
          const fieldsResponse = await fetch(
            `${PIPEDRIVE_API_URL}/leadFields?api_token=${PIPEDRIVE_API_TOKEN}`
          );
          const fieldsResult = await fieldsResponse.json();

          // Find Groupdata field
          const groupdataField = fieldsResult.data.find(
            (field: any) => field.name === "Groupdata"
          );

          if (groupdataField) {
            // Update using the correct field key
            const updateResponse = await fetch(
              `${PIPEDRIVE_API_URL}/leads/${leadResult.data.id}?api_token=${PIPEDRIVE_API_TOKEN}`,
              {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  [groupdataField.key]: "Subscribe phone",
                }),
              }
            );
            const updateResult = await updateResponse.json();
            console.log("Lead update response:", updateResult);
          }
        }

        return leadResult.success;
      }
      return false;
    } catch (error) {
      console.error("Pipedrive error:", error);
      return false;
    }
  };
  async function submit() {
    const validFrom = validateForm();
    if (validFrom) {
      const param = {
        phone: phoneNumber,
      };
      const result = await sendToPipedrive(phoneNumber);

      if (result) {
        toast.success(lang.contactsale.success, { autoClose: 700 });
        setPhoneNumber("");
      } else {
        toast.warning("Saved but failed to sync with CRM", {
          autoClose: 700,
        });
      }
    }
  }

  return (
    <div>
      <div className={clsx(
        "w-full bg-[url('https://strapi-efex.ichiba.net/uploads/Group_1171276207_0484f7e09a.svg')]",
        "lg:bg-[url('https://strapi-efex.ichiba.net/uploads/Group_1171276366_cf4af79cbb.svg')] bg-center overflow-hidden"
      )}>
        <div className="container relative px-4 py-6 lg:px-0 lg:pt-6 lg:pb-9">
          <div className="flex flex-col-reverse xl:flex-row items-center justify-between gap-6 lg:gap-10">
            {/* Left section with logo and text */}
            <div className="flex-1 w-full">
              <div className="flex items-center gap-2 mb-2 lg:mb-4">
                <Image
                  src="https://strapi-efex.ichiba.net/uploads/unnamed_1_336d024f0a.png"
                  alt="EFEX"
                  width={1920}
                  height={654}
                  className="w-[100px] h-[34px] lg:w-[160px] lg:h-[55px]"
                />
              </div>
              <h2 className="text-[#0A142F] text-sm  lg:text-2xl uppercase font-bold mb-2 lg:w-max">
                {lang?.fromVietNam?.heading}
              </h2>

              <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder={lang?.fromVietNam?.placeholderDes}
                  className={clsx(
                    "hidden md:block max-w-[418px] w-full px-3 sm:px-4 py-2 border rounded text-sm",
                    phoneValid ? "border-red-500" : "border-gray-300"
                  )}
                />
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder={lang?.fromVietNam?.placeholderMob}
                  className={clsx(
                    "md:hidden max-w-[418px] w-full px-3 sm:px-4 py-2 border rounded text-sm",
                    phoneValid ? "border-red-500" : "border-gray-300"
                  )}
                />
                <button
                  onClick={() => submit()}
                  className="w-max bg-brand-primary text-white px-4 py-2 rounded whitespace-nowrap text-sm hover:bg-brand-primary-active transition-colors"
                >
                  {lang?.fromVietNam?.textBtn}
                </button>
              </div>
            </div>

            {/* Right section with illustration */}
            <Image
              src="https://strapi-efex.ichiba.net/uploads/unnamed_2_67700db248.png" 
              alt="FromVietNam Illustration"
              width={512}
              height={280}
              className="mx-auto lg:hidden"
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default FromVietNam;
