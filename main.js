import "./css/style.scss";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import "animate.css";
import gsap from "gsap";
// import Lenis from '@studio-freight/lenis'
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import fullpage from "fullpage.js";

// if mobile
const isMobile = () => {
  return window.innerWidth < 1024;
};

document.addEventListener("DOMContentLoaded", (e) => {
  // cookie banner
  const cookieBanner = document.querySelector(".cookieBanner");
  const cookieBtn = document.querySelector(".closeCookie");
  // check if cookie is set
  if (localStorage.getItem("cookie") === "true") {
    cookieBanner.style.display = "none";
  } else {
    cookieBanner.style.display = "flex";
  }
  // set cookie
  cookieBtn.addEventListener("click", () => {
    localStorage.setItem("cookie", "true");
    cookieBanner.style.display = "none";
  });

  var myFullpage = new fullpage("#fullpage", {
    // Required for ScrollMagic to work
    scrollBar: true,
    responsiveWidth: 800,
  });

  gsap.registerPlugin(ScrollTrigger);

  var sections = gsap.utils.toArray(".animateUp");
  sections.forEach((section) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "30% 70%",
        end: "-80% 30%",
        markers: false,
        scrub: 2,
      },
    });
    //  up animation
    tl.from(section, {
      y: 150,
      opacity: 0,
    });
  });

  var texts = gsap.utils.toArray(".textanim");

  texts.forEach((text) => {
    new SplitType(text);
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: text,
        start: isMobile ? "10% 80%" : "center center",
        end: isMobile ? "10% 80%" : "center center",
        markers: false,
        scrub: 2,
      },
    });

    //  up animation
    tl2.from(text.querySelectorAll(".word"), {
      y: 150,
      stagger: 0.4,
      duration: 1,
      opacity: 0,
    });
  });

  var mocs = gsap.utils.toArray(".mocImage");
  mocs.forEach((moc) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: moc,
        start: "10% 70%",
        end: "-20% 30%",
        markers: false,
        scrub: 2,
      },
    });
    //  up animation
    tl.from(moc, {
      y: 150,
      opacity: 0,
    });
  });
});
