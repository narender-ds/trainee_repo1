import * as React from "react";
import BannerSlide from "./bannerSlide";
import Footer from "./footer";
import Header from "./header";

type Props = {
   global: any;
  children?: React.ReactNode;
};

const PageLayout = ({  global, children }: Props) => {
  return (
    <>
      <Header HeaderData={global.c_header} HeaderLogo={global.c_headerLogo} />
      <BannerSlide BackgroundImage={global?.c_bannerPhoto} title={global.c_titleForBanner} c_cTAForBanner={global.c_cTAForBanner} c_bannerSlogan={global.c_bannerSlogan} />
      {children}
      <Footer FooterData={global.c_footer} />
    </>
  );
};

export default PageLayout;
