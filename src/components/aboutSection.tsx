import * as React from "react";
import { Link, useAnalytics } from "@yext/pages/components";
// import abbanner from "../../images/ab-banner.jpg"
// import dt12 from "../../images/dtl2.jpg"
import PhotoSlider from "./PhotoSlider";
import { svgIcons } from "../svgIcon";

export default function About(props: any) {
  const { c_aboutData, photo, title, Cta } = props;
  return (
    <>
      {c_aboutData ? (
        <div className=" py-10">
          <div className="container mx-auto ab-secmain flex flex-wrap items-center">
            <div className="w-full md:w-1/2 px-5">
              <img style={{ height: "80%", width: "80%" }} src={photo.url} />
            </div>
            <div className="w-full md:w-1/2 about-sec px-5">
              <h3 className="font-bold text-2xl sec_heading">{title}</h3>
              <p> {c_aboutData}</p>
              {/*  */}
              {Cta ? (
                <>
                  <Link
                    style={{
                      alignItems: "center",
                      marginLeft: "22%",
                      marginTop: "10px",
                      textAlign: "center",
                    }}
                    className="bg-[#0f9675] hover:bg-[#ab131b] text-white rounded w-[calc(50%_-_5px)] xl:w-[170px] transition-all duration-300"
                    href={
                      Cta.linkType == "PHONE"
                        ? `tel:${Cta.link}`
                        : Cta.linkType == "EMAIL"
                        ? `mailto:${Cta.link}`
                        : Cta.link
                    }
                    target={
                      Cta.linkType == "PHONE"
                        ? "_self"
                        : Cta.linkType == "URL"
                        ? "_self"
                        : Cta.linkType == "OTHER"
                        ? "_blank"
                        : "_self"
                    }
                    rel="noopener noreferrer"
                    eventName={`clickforcollection`}
                    // conversionDetails={conversionDetails_phone}
                    data-ya-track="seocta"
                  >
                    {Cta.link?(Cta.label):""}
                  </Link>
                </>
              ) : (
                <>{""}</>
              )}

              {/*  */}
              {/* <div className="cta_btn">
              <Link
                style={{ backgroundColor: "#0f9675", color: "white" }}
                className="button ml-48 mt-8"
                href="#"
                rel="noopener noreferrer"
                eventName={`ReadMore`}
              >
                {" "}
                FILL OUT YOUR PAPA TALK SURVEY
              </Link>
            </div> */}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
