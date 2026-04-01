import "./css/reset.css";
import "./css/background.css";
import "./css/App.css";
import "./css/Strength.css";
import "./css/Infobox.css";
import "./css/Carrer.css";
import "./css/Carrer.css";
import "./css/Portfolio.css";

import { useEffect, useRef } from "react";
import Circle from "./components/common/shape/Circle";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { triggers } from "./animation/triggers";
import { targets } from "./animation/targets";
import { motion } from "./animation/motion";
import MainSlideTexts from "./components/presentation/MainSlideTexts";
import Infobox from "./components/layout/Infobox";
import Strength from "./components/layout/Strength";
import Carrer from "./components/layout/Carrer";
import Portfolio1 from "./components/layout/portfolio/Portfolio1";
import Portfolio2 from "./components/layout/portfolio/Portfolio2";
import Portfolio3 from "./components/layout/portfolio/Portfolio3";
import Portfolio4 from "./components/layout/portfolio/Portfolio4";
import Portfolio5 from "./components/layout/portfolio/Portfolio5";
import Cursor from "./components/common/Cursor";
import Contact from "./components/layout/Contact";
import Portfolio6 from "./components/layout/portfolio/Portfolio6";
import Portfolio7 from "./components/layout/portfolio/Portfolio7";
import Portfolio8 from "./components/layout/portfolio/Portfolio8";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    gsap
      .timeline({
        scrollTrigger: {
          ...triggers.main,
          end: isMobile ? "+=400%" : "+=200%",
        },
      })
      .to(".info", { y: "-100%", opacity: 1, duration: 1, ease: "power1.out" })
      .to(".circle-main", {
        scale: 3,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      }, "<")
      .to("." + targets.textName, motion.slideToRightx, "<")
      .to("." + targets.textFrontend, motion.slideToLeftx, "<");

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".strength",
          scrub: true,
          start: "top center",
          end: "bottom bottom",
        },
      })
      .to(".three div", { rotateY: 0, stagger: 0.3 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".exp",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      })

      .to(".para", { opacity: 1, rotateX: 0, duration: 0.9, stagger: 1 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".exp2",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      })
      .to(".para2", { opacity: 1, rotateX: 0, duration: 0.9, stagger: 1 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".portbox",
          start: "top top",
          end: "800% bottom",
          pin: true,
          scrub: 1,
        },
      })
      .to(".port8", { duration: 3, y: 0 })
      .to(".port5", { duration: 3, y: 0 })
      .to(".port4", { duration: 3, y: 0 })
      .to(".port6", { duration: 3, y: 0 })
      .to(".port3", { duration: 3, y: 0 })
      .to(".port2", { duration: 3, y: 0 })
      .to(".port1", { duration: 3, y: 0 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".contactbox",
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 1,
        },
      })
      .to(".contact_detail", { duration: 1.5, y: 0, opacity: 1 });
  }, []);

  return (
    <>
      <Cursor />
      <div className="main"></div>
      <div className="test">
        <section className="main_container">
          <Circle />
          <MainSlideTexts />
        </section>
        <section className="info">
          <Infobox />
        </section>
      </div>
      <section className="strength_section">
        <Strength />
      </section>

      <Carrer />
      <section className="portbox">
        <Portfolio7 />
        <Portfolio8 />
        <Portfolio5 />
        <Portfolio4 />
        <Portfolio6 />
        <Portfolio3 />
        <Portfolio2 />
        <Portfolio1 />
      </section>
      <section className="contactbox">
        <Contact />
      </section>
    </>
  );
}

export default App;
