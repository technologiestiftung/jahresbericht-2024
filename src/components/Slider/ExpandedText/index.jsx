import { useState } from "react";
import cn from "../Slider.module.scss";
import cx from "classnames";

const ExpandedText = ({ content, maxChars = 110 }) => {
  const [makeExpanded, setMakeExpanded] = useState(false);
  const displayText = makeExpanded
    ? content
    : `${content.slice(0, maxChars)}...`;

  return (
    <p
      dangerouslySetInnerHTML={{ __html: content }}
      className={cx(cn.limitedLines, makeExpanded ? cn.expanded : "")}
      onClick={() => setMakeExpanded(!makeExpanded)}
    />
  );
};

export default ExpandedText;
