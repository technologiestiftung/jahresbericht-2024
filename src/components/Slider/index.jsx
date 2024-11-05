import { useEffect, useRef, useState } from "react";
import content from "../../content";
import Button from "../Button";
import cn from "./Slider.module.scss";
import cx from "classnames";
import Arrow from "../../icons/Arrow.svg";

const Slider = () => {
  const [indexActive, indexActiveSet] = useState(0);

  const sliderRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);
  const sliderGap = 28;

  const { content: rueckblick, title } = content.rueckblick;

  useEffect(() => {
    if (sliderRef.current && !sliderWidth) {
      const elementWidth = sliderRef.current.getBoundingClientRect().width;
      setSliderWidth(elementWidth + sliderGap);
    }
  }, []);

  return (
    <section className={cn.sliderContainer}>
      <div className={cn.headingContainer}>
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      <div className={cn.sliderWrapper}>
        {/* Arrow left */}
        <div
          className={cn.arrow}
          onClick={() => {
            if (indexActive - 1 < 0)
              return indexActiveSet(rueckblick.length - 1);
            indexActiveSet(indexActive - 1);
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
          className={cn.arrow}
          onClick={() => {
            if (indexActive + 1 === rueckblick.length) return indexActiveSet(0);
            indexActiveSet(indexActive + 1);
          }}
        >
          <Arrow />
        </div>

        {/* Mobile navigation */}
        {/* TODO: refactor */}
        <div
          className={cx(cn.mobileArrow, cn.left)}
          onClick={() => {
            if (indexActive - 1 < 0)
              return indexActiveSet(rueckblick.length - 1);
            indexActiveSet(indexActive - 1);
          }}
        >
          <Arrow />
        </div>
        <div
          className={cx(cn.mobileArrow, cn.right)}
          onClick={() => {
            if (indexActive + 1 === rueckblick.length) return indexActiveSet(0);
            indexActiveSet(indexActive + 1);
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
