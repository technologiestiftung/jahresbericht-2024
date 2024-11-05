import { useEffect, useRef, useState } from "react";
import cn from "./SingleAccordion.module.scss";
import Arrow from "../../icons/Arrow.svg";

function SingleAccordion({ content, title = "Vorwort lesen" }) {
  const clickEl = useRef();
  const panelEl = useRef();
  const [isOpen, setOpen] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);

  const clickHandler = () => {
    if (!isOpen && window.innerWidth > 768) {
      const topPosition =
        clickEl.current.getBoundingClientRect().top + window.scrollY;
      const offset = 400;
      window.setTimeout(
        () =>
          window.scrollTo({
            top: topPosition - offset,
            behavior: "smooth",
          }),
        400
      );
    }
    setOpen(!isOpen);
  };

  useEffect(() => {
    if (panelEl.current) {
      setScrollHeight(panelEl.current.scrollHeight);
    }
  }, [panelEl.current]);

  return (
    <div className={cn.accordion} id={`accordion-${Math.random()}`}>
      <div
        className={cn.clickable}
        onClick={e => clickHandler(e)}
        ref={clickEl}
      >
        <div className={isOpen ? cn.turned : ""}>
          <Arrow />
        </div>
        <p className={cn.title}>{title}</p>
      </div>
      <div
        className={cn.panel}
        style={isOpen ? { maxHeight: scrollHeight + 60 } : { maxHeight: "0px" }}
      >
        <div ref={panelEl} className={cn.paragraph}>
          <p
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default SingleAccordion;
