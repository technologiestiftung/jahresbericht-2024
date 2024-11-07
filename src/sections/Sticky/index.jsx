import cx from "classnames";
import { useEffect, useRef, useState } from "react";
import Button from "../../components/Button";
import cn from "./Sticky.module.scss";

function Sticky({ content, title }) {
  const sectionRef = useRef(null);
  const firstContainerRef = useRef(null);
  const secondContainerRef = useRef(null);
  const [isFirstVisible, setIsFirstVisible] = useState(true);

  const testing = false;

  useEffect(() => {
    const handleScroll = () => {
      if (
        content?.length === 2 &&
        firstContainerRef.current &&
        secondContainerRef.current
      ) {
        const firstRect = firstContainerRef.current.getBoundingClientRect();
        const secondRect = secondContainerRef.current.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        if (firstRect.bottom >= 0 && firstRect.top <= windowHeight) {
          setIsFirstVisible(true);
        } else if (secondRect.top <= windowHeight && secondRect.bottom >= 0) {
          setIsFirstVisible(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [content?.length]);

  if (!content) return <></>;

  return (
    <section className={cn.wrapper} ref={sectionRef}>
      {window.innerWidth > 1280 && (
        <>
          <div className={cn.bg}>
            {isFirstVisible && (
              <img alt={content[0].img.alt} src={content[0].img.src} />
            )}
            {!isFirstVisible && content?.length === 2 && (
              <img alt={content[1].img.alt} src={content[1].img.src} />
            )}
          </div>
        </>
      )}
      <div className={cn.content}>
        {content.map((current, index) => (
          <div
            key={current.id}
            style={{
              backgroundImage: testing
                ? `url('${index % 2 === 0 ? "assets/images/test-img.jpg" : "assets/images/test-img-2.jpg"}')`
                : `url('${current.img.src}')`,
            }}
            className={cx(
              cn.bgMobile,
              content.length === 3
                ? !index
                  ? cn.firstBG
                  : index === 1
                    ? cn.midBG
                    : cn.lastBG
                : content.length === 2
                  ? !index
                    ? cn.firstBG
                    : cn.lastBG
                  : cn.oneBG
            )}
          >
            <div
              className={cx(cn.container, !index ? cn.first : cn.second)}
              ref={!index ? firstContainerRef : secondContainerRef}
            >
              <p className={cn.sub}>{title}</p>
              <h4>{current.title}</h4>
              <p
                dangerouslySetInnerHTML={{ __html: current.paragraph }}
                className={cn.paragraph}
              />
              {!!current.link && (
                <Button to={current.link} label='Zur Webseite' />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sticky;
