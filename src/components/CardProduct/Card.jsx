import React, { useState } from "react";
import style from "./Card.module.scss";
import classNames from "classnames";
import { useSelector } from "react-redux";

function Card({
  name,
  id,
  price,
  imageUrl,
  sizes,
  onClickAddCross,
  addCountCross,
}) {
  const typeNumber = ["лето", "зима"];
  const typeSizes = ["40", "41", "42"];
  const [activeType, setActiveType] = useState();
  const [activeSize, setActiveSize] = useState();

  const onSelectActive = (index) => {
    setActiveType(index);
  };

  const onSelectSizeActive = (index) => {
    setActiveSize(index);
  };

  const addCrossBasket = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      size: typeSizes[activeSize],
      type: typeNumber[activeType],
    };
    onClickAddCross(obj);
  };

  return (
    <div className={style.card_wrapper}>
      <img className={style.img_block} src={imageUrl} alt="" />
      <h2>{name}</h2>
      <div className={style.color_product}>
        <ul>
          {typeNumber.map((type, index) => (
            <li
              key={type}
              onClick={() => onSelectActive(index)}
              className={activeType === index ? style.active : ""}
            >
              {type}
            </li>
          ))}
        </ul>
      </div>
      <div className={style.size_product}>
        <ul>
          {sizes.map((size, index) => (
            <li
              key={size}
              onClick={() => onSelectSizeActive(index)}
              className={activeSize === index ? style.active : ""}
            >
              {size}
            </li>
          ))}
        </ul>
      </div>
      <div className={style.price_block}>
        <span>Цена: {price}р</span>
        <button className={style.button_card} onClick={addCrossBasket}>
          Добавить
          {addCountCross && (
            <div className={style.circle}>
              <h4>{addCountCross}</h4>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default Card;
