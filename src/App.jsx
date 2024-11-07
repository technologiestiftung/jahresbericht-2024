import cn from "./App.module.scss";
import content from "./content";

import { useCallback, useEffect, useRef, useState } from "react";
import NavBar from "./components/NavBar";
import Slider from "./components/Slider";
import Footer from "./sections/Footer";
import Intro from "./sections/Intro";
import Main from "./sections/Main";
import Outro from "./sections/Outro";
import People from "./sections/People";
import Sticky from "./sections/Sticky";
import Vorwort from "./sections/Vorwort";

function App() {
  const sectionRef = useRef();
  const [showNav, setShowNav] = useState(false);

  const handleScroll = useCallback(() => {
    const position = window.scrollY;
    const getScrollPosition =
      sectionRef.current.scrollHeight + window.innerHeight / 2;
    if (position >= getScrollPosition && !showNav) return setShowNav(true);
    if (position < getScrollPosition && showNav) return setShowNav(false);
  }, [sectionRef, showNav]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

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
