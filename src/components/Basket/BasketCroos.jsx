import React from "react";
import style from "./BasketCross.module.scss";

function BasketCroos({
  id,
  name,
  type,
  size,
  totalPrice,
  imageUrl,
  totalCount,
  remove,
  onPlus,
  onMinus,
}) {
  const removeClick = () => {
    remove(id);
  };

  const handleClickPlus = () => {
    onPlus(id);
  };

  const handleClickMinus = () => {
    onMinus(id);
  };

  return (
    <div className={style.basket_croos}>
      <img className={style.img_basket} src={imageUrl} alt="" />
      <div className={style.text_basket}>
        <h3>{name}</h3>
        <h4>Сезон: {type}</h4>
        <h4>Размер: {size}</h4>
      </div>

      <div className={style.basket_count}>
        <div onClick={handleClickPlus}>
          <svg
            className={style.svg_count}
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.3906 14.0625H15.9375V9.60938C15.9375 9.48047 15.832 9.375 15.7031 9.375H14.2969C14.168 9.375 14.0625 9.48047 14.0625 9.60938V14.0625H9.60938C9.48047 14.0625 9.375 14.168 9.375 14.2969V15.7031C9.375 15.832 9.48047 15.9375 9.60938 15.9375H14.0625V20.3906C14.0625 20.5195 14.168 20.625 14.2969 20.625H15.7031C15.832 20.625 15.9375 20.5195 15.9375 20.3906V15.9375H20.3906C20.5195 15.9375 20.625 15.832 20.625 15.7031V14.2969C20.625 14.168 20.5195 14.0625 20.3906 14.0625Z"
              fill="#D7B399"
            />
            <path
              d="M15 1.875C7.75195 1.875 1.875 7.75195 1.875 15C1.875 22.248 7.75195 28.125 15 28.125C22.248 28.125 28.125 22.248 28.125 15C28.125 7.75195 22.248 1.875 15 1.875ZM15 25.8984C8.98242 25.8984 4.10156 21.0176 4.10156 15C4.10156 8.98242 8.98242 4.10156 15 4.10156C21.0176 4.10156 25.8984 8.98242 25.8984 15C25.8984 21.0176 21.0176 25.8984 15 25.8984Z"
              fill="#D7B399"
            />
          </svg>
        </div>

        <div className={style.block_count}>{totalCount}</div>
        <div onClick={handleClickMinus}>
          <svg
            className={style.svg_count}
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.3906 14.0625H9.60938C9.48047 14.0625 9.375 14.168 9.375 14.2969V15.7031C9.375 15.832 9.48047 15.9375 9.60938 15.9375H20.3906C20.5195 15.9375 20.625 15.832 20.625 15.7031V14.2969C20.625 14.168 20.5195 14.0625 20.3906 14.0625Z"
              fill="#D7B399"
            />
            <path
              d="M15 1.875C7.75195 1.875 1.875 7.75195 1.875 15C1.875 22.248 7.75195 28.125 15 28.125C22.248 28.125 28.125 22.248 28.125 15C28.125 7.75195 22.248 1.875 15 1.875ZM15 25.8984C8.98242 25.8984 4.10156 21.0176 4.10156 15C4.10156 8.98242 8.98242 4.10156 15 4.10156C21.0176 4.10156 25.8984 8.98242 25.8984 15C25.8984 21.0176 21.0176 25.8984 15 25.8984Z"
              fill="#D7B399"
            />
          </svg>
        </div>
      </div>
      <h3>{totalPrice}</h3>
      <div className={style.delete} onClick={removeClick}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.175 21.1L25.5125 23.75L28.175 26.4L26.4 28.175L23.75 25.5125L21.1 28.175L19.3375 26.4L21.9875 23.75L19.3375 21.1L21.1 19.3375L23.75 21.9875L26.4 19.325L28.175 21.1ZM28.75 12.5L28.7 12.8625L27.5 17.25C26.3592 16.5935 25.0658 16.2486 23.7496 16.2497C22.4334 16.2509 21.1407 16.5981 20.001 17.2566C18.8614 17.915 17.9149 18.8616 17.2565 20.0013C16.5982 21.141 16.2511 22.4338 16.25 23.75C16.25 24.625 16.4125 25.4625 16.6875 26.25H6.875C5.9 26.25 5.05 25.6875 4.6375 24.875L1.375 13.05L1.25 12.5C1.25 11.8125 1.8125 11.25 2.5 11.25H8.225L13.975 3.03747C14.0902 2.86982 14.2448 2.73292 14.4251 2.63875C14.6055 2.54457 14.8061 2.49598 15.0096 2.49722C15.213 2.49845 15.4131 2.54947 15.5922 2.64582C15.7714 2.74218 15.9243 2.88093 16.0375 3.04997L21.775 11.25H27.5C28.1875 11.25 28.75 11.8125 28.75 12.5ZM17.5 18.75C17.5 17.375 16.3875 16.25 15 16.25C13.6125 16.25 12.5 17.375 12.5 18.75C12.5 20.125 13.625 21.25 15 21.25C16.375 21.25 17.5 20.1375 17.5 18.75ZM18.75 11.25L15 5.92497L11.25 11.25H18.75Z"
            fill="black"
          />
        </svg>
        <span>Удалить</span>
      </div>
    </div>
  );
}

export default BasketCroos;
