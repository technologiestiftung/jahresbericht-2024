import cx from "classnames";
import { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import content from "../../content";
import Arrow from "../../icons/Arrow.svg";
import Button from "../Button";
import cn from "./Slider.module.scss";

const Slider = () => {
  const [indexActive, indexActiveSet] = useState(0);

  const sliderRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);
  const sliderGap = 28;

  const { content: rueckblick, title } = content.rueckblick;

  const left = () => {
    if (indexActive - 1 < 0) return indexActiveSet(rueckblick.length - 1);
    indexActiveSet(indexActive - 1);
  };
  const right = () => {
    if (indexActive + 1 === rueckblick.length) return indexActiveSet(0);
    indexActiveSet(indexActive + 1);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => right(),
    onSwipedRight: () => left(),
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: true,
  });

  useEffect(() => {
    if (sliderRef.current && !sliderWidth) {
      const elementWidth = sliderRef.current.getBoundingClientRect().width;
      setSliderWidth(elementWidth + sliderGap);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={cn.sliderContainer}>
      <div className={cn.headingContainer}>
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      <div className={cn.sliderWrapper} {...handlers}>
        {/* Arrow left */}
        <div
          aria-label='Pfeil links'
          className={cn.arrow}
          role='button'
          tabIndex={0}
          onClick={left}
          onKeyDown={event => {
            if (event.key === "Enter" || event.key === " ") {
              left();
            }
          }}
        >
          <Arrow />
        </div>
        {/* Slider content container */}
        <div className={cn.sliderContentContainer}>
          {/* Slider content */}
          <div
            className={cn.contentSlider}
            style={{
              transform: `translateX(${sliderWidth * -indexActive}px)`,
              gap: `${sliderGap}px`,
            }}
          >
            {rueckblick.map((slide, index) => (
              <div
                className={cn.slide}
                key={index}
                ref={index === 0 ? sliderRef : null}
                style={{
                  flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                }}
              >
                <div className={cn.content}>
                  <h4>{slide.title}</h4>
                  <p dangerouslySetInnerHTML={{ __html: slide.content }} />
                  <Button to={slide.link} label={slide.btnText} />
                </div>
                <div
                  className={cn.bgImage}
                  style={{ backgroundImage: `url(${slide.img.src})` }}
                ></div>
              </div>
            ))}
          </div>
        </div>
        {/* Arrow right */}
        <div
          aria-label='Pfeil rechts'
          className={cn.arrow}
          role='button'
          tabIndex={0}
          onClick={right}
          onKeyDown={event => {
            if (event.key === "Enter" || event.key === " ") {
              right();
            }
          }}
        >
          <Arrow />
        </div>

        {/* Mobile navigation */}
        {/* TODO: refactor */}
        <div
          aria-label='Pfeil links'
          className={cx(cn.mobileArrow, cn.left)}
          role='button'
          tabIndex={0}
          onClick={left}
          onKeyDown={event => {
            if (event.key === "Enter" || event.key === " ") {
              left();
            }
          }}
        >
          <Arrow />
        </div>
        <div
          className={cx(cn.mobileArrow, cn.right)}
          role='button'
          aria-label='Pfeil rechts'
          tabIndex={0}
          onClick={right}
          onKeyDown={event => {
            if (event.key === "Enter" || event.key === " ") {
              right();
            }
          }}
        >
          <Arrow />
        </div>
      </div>
      <div className={cn.nav}>
        <p>
          {indexActive + 1} / {rueckblick.length}
        </p>
      </div>
    </section>
  );
};

export default Slider;
