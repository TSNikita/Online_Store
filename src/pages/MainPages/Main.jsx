import React, { useCallback } from "react";
import Header from "../../components/Header/Header";
import style from "./Main.module.scss";
import first from "../../assets/first.png";
import { useEffect } from "react";
import Category from "../../components/Category/Category";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/CardProduct/Card";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../../redux/actions/category";
import { getCroos } from "../../redux/actions/croos";
import Loading from "../../components/Loading/Loading";
import { setBasket } from "../../redux/actions/backet";

const CategoryItem = ["addidas", "nike", "reebok"];

function Main() {
  const dispatch = useDispatch();
  const itemsCount = useSelector(({ basket }) => basket.items);
  const { items, isloaded, category } = useSelector(({ croos, category }) => {
    return {
      items: croos.items,
      category: category.category,
      isloaded: croos.isloaded,
    };
  });

  useEffect(() => {
    dispatch(getCroos(category));
  }, [category]);

  // cвязь между реакт редакс (категории)
  const onSelectActiveCategory = useCallback((ind) => {
    dispatch(setCategory(ind));
  });

  // связывем редакс с реактом(добавление кросов)
  const handleAddCrossBasket = (obj) => {
    dispatch(setBasket(obj));
  };

  return (
    <div>
      <div className={style.container}>
        <Header />
        <div className={style.banner}>
          <div className={style.block_left}>
            <h2>Зимняя распродажа</h2>
            <h1>СКИДКИ ДО 90%</h1>
            <button className={style.button_banner}>СМОТРЕТЬ МОДЕЛИ</button>
          </div>
          <img className={style.img_banner} src={first} alt="" />
        </div>
      </div>
      <div className={style.info}>
        <h1>БЕСПЛАТНАЯ ДОСТАВКА ОТ 3000₽</h1>
        <span>Сделайте заказ и получите подарок!</span>
      </div>
      <div className={style.category_position}>
        <Category
          activeCategory={category}
          items={CategoryItem}
          onClickItem={onSelectActiveCategory}
        />
      </div>
      <div className={style.card_container}>
        {isloaded ? (
          items.map((obj) => (
            <Card
              key={obj.id}
              {...obj}
              addCountCross={
                itemsCount[obj.id] && itemsCount[obj.id].items.length
              }
              onClickAddCross={handleAddCrossBasket}
            />
          ))
        ) : (
          <Loading />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Main;
