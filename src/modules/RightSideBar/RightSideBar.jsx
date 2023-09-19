import React from "react";
import { useSelector } from "react-redux";

import {
  getPickedDate,
  getCaloriesReceived,
} from "../../redux/products/products-selectors";
import {
  getDailyCaloriesRate,
  getForbidenCategories,
} from "../../redux/userAccount/userAccount-selectors";

import styles from "./rightSideBar.module.scss";

function RightSideBar() {
  const dailyCalories = useSelector(getDailyCaloriesRate);
  const userForbidenCategories = useSelector(getForbidenCategories);
  const caloriesReceived = useSelector(getCaloriesReceived);

  const date = useSelector(getPickedDate).replace(/-/g, ".");
  const categoriesString = Array.isArray(userForbidenCategories)
    ? userForbidenCategories.reduce((acc, item, index, arr) => {
        if (index !== Math.min(arr.length, 20) - 1) {
          acc = acc + `${item.title.ua}, `;
          return acc;
        }
        acc = acc + `${item.title.ua}`;
        return acc;
      }, "")
    : "";

  const caloriesPercent = isNaN(
    parseInt((caloriesReceived / dailyCalories) * 100)
  )
    ? 0
    : parseInt((caloriesReceived / dailyCalories) * 100);

  const caloriesRemaining = isNaN(dailyCalories - caloriesReceived)
    ? "0"
    : dailyCalories - caloriesReceived;

  return (
    <div className={styles.rightSideBarWrapper}>
      <div className={styles.rightSideBarCalories}>
        <h3 className={styles.rightSideBarHeader}>Informe para {date}</h3>
        <ul className={styles.rightSideBarData}>
          <li className={styles.rightSideBarItem}>
            <span className={styles.rightSideBarInfo}>Queda</span>
            <span className={styles.rightSideBarInfo}>
              {caloriesRemaining} cal
            </span>
          </li>
          <li className={styles.rightSideBarItem}>
            <span className={styles.rightSideBarInfo}>Usado</span>
            <span className={styles.rightSideBarInfo}>
              {caloriesReceived} cal
            </span>
          </li>
          <li className={styles.rightSideBarItem}>
            <span className={styles.rightSideBarInfo}>Tarifa diaria</span>
            <span className={styles.rightSideBarInfo}>
              {dailyCalories ?? "0"} cal
            </span>
          </li>
          <li className={styles.rightSideBarItem}>
            <span className={styles.rightSideBarInfo}>n% de la norma</span>
            <span className={styles.rightSideBarInfo}>
              {caloriesPercent ?? "0"} %
            </span>
          </li>
        </ul>
      </div>

      <div className={styles.rightSideBarCategories}>
        <h3 className={styles.rightSideBarHeader}>Productos no deseados</h3>
        <p className={styles.rightSideBarInfo}>
          {userForbidenCategories?.length
            ? categoriesString
            : "Aquí verás productos que debes evitar"}
        </p>
      </div>
      <div className={styles.rightSideBarDecoration}></div>
    </div>
  );
}

export default RightSideBar;
