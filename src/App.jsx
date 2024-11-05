import cn from "./App.module.scss";
import content from "./content";

import Intro from "./sections/Intro";
import NavBar from "./components/NavBar";
import Main from "./sections/Main";
import Vorwort from "./sections/Vorwort";
import Slider from "./components/Slider";
import Sticky from "./sections/Sticky";
import People from "./sections/People";
import Outro from "./sections/Outro";
import Footer from "./sections/Footer";
import { useRef, useState, useEffect } from "react";

function App() {
  const sectionRef = useRef();
  const [showNav, setShowNav] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    const getScrollPosition =
      sectionRef.current.scrollHeight + window.innerHeight / 2;
    if (position >= getScrollPosition && !showNav) return setShowNav(true);
    if (position < getScrollPosition && showNav) return setShowNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showNav]);

  return (
    <div className={cn.app}>
      {showNav && <NavBar />}
      <Intro />
      <div ref={sectionRef}>
        <Main content={content.offenheit} />
      </div>
      <Vorwort />
      <Slider />
      {content.chapters.map(chapter => (
        <span key={chapter.id}>
          <Main content={chapter} />
          <Sticky content={chapter.projects} title={chapter.title} />
        </span>
      ))}
      <People />
      <Outro />
      <Footer />
    </div>
  );
}

export default App;
