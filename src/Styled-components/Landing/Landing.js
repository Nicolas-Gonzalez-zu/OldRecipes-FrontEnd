import React from "react";
import LandingIMG from "./img/Landing.jpg";
import LandingContactUsIMG from "./img/Landing_ContactUs.jpg";
import LandingFAQIMG from "./img/Landing_FAQ.jpg";
import LandingAboutUsIMG from "./img/Landing_AboutUs.jpg";

import { withTheme } from "styled-components";

import LandingComponent from "./LandingComponent";

export default withTheme(({ theme }) => {
  return (
    <React.Fragment>
      <section id="">
        <LandingComponent
          theme={theme}
          img={LandingIMG}
          justifyContent="flex-end"
          button={true}
          title={false}
          titleContent=""
          textContent="Share your recipes and discover new flavors."
        />
      </section>
      <section id="AboutUs">
        <LandingComponent
          theme={theme}
          img={LandingAboutUsIMG}
          justifyContent="flex-start"
          button={false}
          title={true}
          titleContent="About Us"
          textContent="Share your recipes and discover new flavors."
        />
      </section>
      <section id="FAQ">
        <LandingComponent
          theme={theme}
          img={LandingFAQIMG}
          justifyContent="flex-start"
          button={false}
          title={true}
          titleContent="FAQ"
          textContent="Share your recipes and discover new flavors."
        />
      </section>
      <section id="ContactUs">
        <LandingComponent
          theme={theme}
          img={LandingContactUsIMG}
          justifyContent="flex-start"
          button={false}
          title={true}
          titleContent="Contact Us"
          textContent="Share your recipes and discover new flavors."
        />
      </section>
    </React.Fragment>
  );
});
