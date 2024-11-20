import cx from "classnames";
import { useEffect, useRef, useState } from "react";
import Button from "../../components/Button";
import cn from "./Sticky.module.scss";

function Sticky({ content, title }) {
  const sectionRef = useRef(null);
  const firstContainerRef = useRef(null);
  const secondContainerRef = useRef(null);
  const thirdContainerRef = useRef(null);
  const [visible, setVisible] = useState("first");
  const topPadding = 160;
  const mobilePadding = 1;
  const [margins, setMargins] = useState({
    first: 0,
    second: 0,
    third: 0,
  });

  const RenderIMG = () => {
    const setIndex = visible === "first" ? 0 : visible === "second" ? 1 : 2;
    if (window.innerWidth < 1280)
      return (
        <div
          className={cn.bg}
          style={{
            backgroundImage: `url('${content[setIndex].img.src}')`,
            backgroundSize: title === "Prototyping" ? "contain" : "cover",
          }}
        />
      );
    return (
      <div className={cn.bg}>
        <img alt={content[setIndex].img.alt} src={content[setIndex].img.src} />
        {content[setIndex].img.copyright && (
          <div className={cn.copyright}>
            <p>{content[setIndex].img.copyright}</p>
          </div>
        )}
      </div>
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!content || content?.length === 1) return;
      const first = firstContainerRef?.current?.getBoundingClientRect();
      const second = secondContainerRef?.current?.getBoundingClientRect();
      const third = thirdContainerRef?.current?.getBoundingClientRect();
      if (window.innerWidth < 1280) {
        if (first.bottom >= 0) return setVisible("first");
        if (first.bottom < 0 && second.top >= 0) return setVisible("second");
        if (!!third && second.bottom < 0) return setVisible("third");
        return;
      }
      if (first.top >= 0) return setVisible("first");
      if (first.top < 0 && second.top >= 0) return setVisible("second");
      if (!!third && second.top < 0) return setVisible("third");
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [content?.length]);

  useEffect(() => {
    const getMargins = {
      ...margins,
    };
    if (!!thirdContainerRef?.current) {
      margins.third =
        window.innerHeight -
        thirdContainerRef?.current?.getBoundingClientRect().height -
        topPadding;
    }
    if (!!secondContainerRef?.current) {
      margins.second =
        window.innerHeight -
        secondContainerRef?.current?.getBoundingClientRect().height -
        topPadding;
    }
    if (!!firstContainerRef?.current) {
      margins.first =
        window.innerHeight -
        firstContainerRef?.current?.getBoundingClientRect().height -
        topPadding;
    }
    setMargins(getMargins);
  }, []);

  if (!content) return <></>;

  return (
    <section className={cn.wrapper} ref={sectionRef}>
      <RenderIMG />
      <div
        className={cn.content}
        style={
          window.innerWidth >= 1280
            ? {
                paddingBottom: margins.third || margins.second || margins.first,
              }
            : { paddingBottom: window.innerHeight * mobilePadding * 0.5 }
        }
      >
        {content.map((current, index) => (
          <div
            key={current.id}
            style={
              window.innerWidth >= 1280
                ? {
                    marginBottom:
                      content?.length === 3
                        ? !index
                          ? margins.first
                          : index === 1
                            ? margins.second
                            : 0
                        : content?.length === 2
                          ? !index
                            ? margins.first
                            : 0
                          : 0,
                  }
                : {
                    marginBottom:
                      content?.length === 3
                        ? !index
                          ? window.innerHeight * mobilePadding
                          : index === 1
                            ? window.innerHeight * mobilePadding
                            : 0
                        : content?.length === 2
                          ? !index
                            ? window.innerHeight * mobilePadding
                            : 0
                          : 0,
                  }
            }
          >
            <div
              className={cn.container}
              ref={
                !index
                  ? firstContainerRef
                  : index === 1
                    ? secondContainerRef
                    : thirdContainerRef
              }
            >
              <p className={cn.sub}>{title}</p>
              <h3 dangerouslySetInnerHTML={{ __html: current.title }} />
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
