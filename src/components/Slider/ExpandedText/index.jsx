import cx from "classnames";
import { useState } from "react";
import cn from "../Slider.module.scss";

const ExpandedText = ({ content }) => {
  const [makeExpanded, setMakeExpanded] = useState(false);

  return (
    <div
      role='button'
      tabIndex={0}
      className={cx(cn.limitedLines, makeExpanded ? cn.expanded : "")}
      onClick={() => setMakeExpanded(!makeExpanded)}
      onKeyDown={event => {
        if (event.key === "Enter" || event.key === " ") {
          setMakeExpanded(!makeExpanded);
        }
      }}
    >
      <p dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default ExpandedText;
