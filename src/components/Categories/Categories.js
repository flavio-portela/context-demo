/** @jsx jsx */
import { jsx } from "@emotion/core";
import classNames from "classnames";
import styles from "./styles";
const Item = ({ className, onClick, children }) => {
  return (
    <li
      className={className}
      onClick={onClick}
    >
      {children}
    </li>
  );
};
function Categories({ setCategory, category }) {
  return (
    <div css={styles}>
      <ul>
        <Item
          className={classNames({ selected: category === "dev" })}
          onClick={() => setCategory("career")}
        >
          SOMETHING ELSE
        </Item>
        <li
          className={classNames({ selected: category === "career" })}
          onClick={() => setCategory("career")}
        >
          career
        </li>
        <li
          className={classNames({ selected: category === "science" })}
          onClick={() => setCategory("science")}
        >
          science
        </li>
      </ul>
    </div>
  );
}

export default Categories;
