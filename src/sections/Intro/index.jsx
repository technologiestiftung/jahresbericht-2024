import content from "../../content";
import cn from "./Intro.module.scss";

function Intro() {
  const { headline, logo, header } = content.intro;

  return (
    <section className={cn.intro}>
      <div className={cn.content}>
        <div className={cn.logoAndHeadline}>
          <img className={cn.logo} src={logo.src} alt={logo.alt} />
          <h1
            className={cn.headline}
            dangerouslySetInnerHTML={{ __html: headline }}
          />
        </div>
        <div className={cn.headerImage}>
          <img className={cn.header} src={header.src} alt={header.alt} />
        </div>
      </div>
      <div className={cn.scroll}></div>
    </section>
  );
}

export default Intro;
