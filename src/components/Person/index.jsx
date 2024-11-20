import cn from "./Person.module.scss";
import cx from "classnames";
import SingleAccordion from "../../components/SingleAccordion";

function Person({ item, align, accordion, index }) {
  return (
    <div
      className={
        align
          ? cx(cn.peopleWrapper, index % 2 === 0 ? cn.right : cn.left)
          : cn.peopleWrapper
      }
    >
      <div>
        <div>
          <div
            className={cn.image}
            style={{
              backgroundImage: `url(${item.img.src})`,
            }}
          ></div>
        </div>
      </div>
      <div>
        <p
          dangerouslySetInnerHTML={{
            __html: `&bdquo;${item.vorwort || item.intro}&ldquo;`,
          }}
        />
        <p>{item.name}</p>
        <p
          dangerouslySetInnerHTML={{
            __html: item.position,
          }}
        />
        {!!accordion && <SingleAccordion content={item.content} />}
      </div>
    </div>
  );
}

export default Person;
