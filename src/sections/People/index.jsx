import cn from "./People.module.scss";
import cx from "classnames";
import content from "../../content";
import Button from "../../components/Button";

function People() {
  return (
    <section className={cn.wrapper}>
      <h2 dangerouslySetInnerHTML={{ __html: content.people.title }} />
      {window.innerWidth > 768 ? (
        <p dangerouslySetInnerHTML={{ __html: content.people.subtitle }} />
      ) : (
        <h3 dangerouslySetInnerHTML={{ __html: content.people.subtitle }} />
      )}
      {content.people.content.map((item, index) => (
        <div
          className={cx(cn.peopleWrapper, index % 2 === 0 ? cn.right : cn.left)}
          key={item.id}
        >
          <div>
            <div>
              <div
                className={cn.image}
                style={{
                  backgroundImage: `url(${item.img.src})`,
                  backgroundSize: item.img.fit,
                  backgroundPosition: "center center",
                }}
              ></div>
            </div>
          </div>
          <div>
            <p className='vorwort'>&quot;{item.intro}&quot;</p>
            <p>{item.name}</p>
            <p>{item.position}</p>
          </div>
        </div>
      ))}
      <div className={cn.btnWrapper}>
        <Button to={content.people.link} label={content.people.btnText} />
      </div>
    </section>
  );
}

export default People;
