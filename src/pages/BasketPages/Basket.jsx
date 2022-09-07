import React from "react";
import BasketCroos from "../../components/Basket/BasketCroos";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "./Basket.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  clearBasket,
  removeCount,
  plusCroos,
  minusCroos,
} from "../../redux/actions/backet";
import { Link } from "react-router-dom";

function Basket() {
  const dispatch = useDispatch();
  const { totalPrice, totalCount, items } = useSelector(({ basket }) => basket);
  console.log(items);

  const addBasket = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  const clearBasketCross = () => {
    dispatch(clearBasket());
  };

  const removeCroos = (id) => {
    dispatch(removeCount(id));
  };

  const onPlusItem = (id) => {
    dispatch(plusCroos(id));
  };

  const onMinusItem = (id) => {
    dispatch(minusCroos(id));
  };

  return (
    <div>
      <Header />
      <div className={style.container_basket}>
        {totalCount ? (
          <div>
            <div className={style.title_basket}>
              <h1>Корзина</h1>
              <div className={style.basket_delete} onClick={clearBasketCross}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 5H4.16667H17.5"
                    stroke="#B6B6B6"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                    stroke="#B6B6B6"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.33337 9.16667V14.1667"
                    stroke="#B6B6B6"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.6666 9.16667V14.1667"
                    stroke="#B6B6B6"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span>Очистить корзину</span>
              </div>
            </div>
            <div>
              {addBasket.map((obj) => (
                <BasketCroos
                  id={obj.id}
                  imageUrl={obj.imageUrl}
                  name={obj.name}
                  type={obj.type}
                  size={obj.size}
                  totalPrice={items[obj.id].totalPrice}
                  totalCount={items[obj.id].items.length}
                  remove={removeCroos}
                  onPlus={onPlusItem}
                  onMinus={onMinusItem}
                />
              ))}
            </div>
            <div className={style.price_wrap}>
              <span className={style.price_home}>ИТОГО: {totalPrice}р</span>
              <span className={style.price_home}>
                Всего выбрано: {totalCount} шт.
              </span>
            </div>
            <button className={style.pay_croos}>Оплатить</button>
          </div>
        ) : (
          <div className={style.basket_null}>
            <h1>Корзина пуста</h1>
            <div className={style.link_main}>
              <Link to="/">На главную</Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Basket;
