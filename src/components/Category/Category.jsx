import React, { useCallback } from "react";
import style from "./Category.module.scss";

const Category = React.memo(function Category({
  activeCategory,
  items,
  onClickItem,
}) {
  return (
    <div className={style.category}>
      <ul>
        <li
          className={activeCategory === null ? style.active : ""}
          onClick={() => onClickItem(null)}
        >
          Все бренды
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeCategory === index ? style.active : ""}
              onClick={() => onClickItem(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Category;
