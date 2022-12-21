import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { NextPage } from "next";

// Style import
import styles from "./Day2.module.scss";

// Image imports
import check from "./images/check.svg";
import chevron from "./images/chevron.svg";
import plateBaconEggs from "./images/plate__bacon-eggs.png";
import plateChickenSalad from "./images/plate__chicken-salad.png";
import plateFishStickFries from "./images/plate__fish-sticks-fries.png";
import plateFrenchFries from "./images/plate__french-fries.png";
import plateSalmonVegetables from "./images/plate__salmon-vegetables.png";
import plateSpaghettiMeatSauce from "./images/plate__spaghetti-meat-sauce.png";

// Type declarations
interface MenuItem {
  name: string;
  price: number;
  image: StaticImageData;
  alt: string;
}

interface BasketItem extends MenuItem {
  count: number;
}

const Day2: NextPage = () => {
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);
  const menu: MenuItem[] = [
    {
      name: "French Fries with Ketchup",
      price: 223,
      image: plateFrenchFries,
      alt: "French Fries",
    },
    {
      name: "Salmon and Vegetables",
      price: 512,
      image: plateSalmonVegetables,
      alt: "Salmon and Vegetables",
    },
    {
      name: "Spaghetti Meat Sauce",
      price: 782,
      image: plateSpaghettiMeatSauce,
      alt: "Spaghetti with Meat Sauce",
    },
    {
      name: "Bacon, Eggs, and Toast",
      price: 599,
      image: plateBaconEggs,
      alt: "Bacon, Eggs, and Toast",
    },
    {
      name: "Chicken Salad with Parmesan",
      price: 698,
      image: plateChickenSalad,
      alt: "Chicken Salad with Parmesan",
    },
    {
      name: "Fish Sticks and Fries",
      price: 634,
      image: plateFishStickFries,
      alt: "Fish Sticks and Fries",
    },
  ];

  const generateMenuItem = (item: MenuItem): JSX.Element => {
    return (
      <li>
        <div className={styles.plate}>
          <Image src={item.image} alt={item.alt} className={styles.plate} />
        </div>
        <div className={styles.content}>
          <p className={styles.menuItem}>{item.name}</p>
          <p className={styles.price}>${item.price / 100}</p>
          <button className={styles.inCart}>
            <Image src={check} alt="Check" />
            In Cart
          </button>
        </div>
      </li>
    );
  };

  return (
    <div className={styles.outerWrapper}>
      <div className={`${styles.wrapper} ${styles.menu}`}>
        <div className={styles.panel}>
          <h1>To Go Menu</h1>
          <ul className={styles.menu}>
            {menu.map((item) => generateMenuItem(item))}
          </ul>
        </div>

        <div className={`${styles.panel} ${styles.cart}`}>
          <h1>Your Cart</h1>
          {basketItems.length > 0 ? null : (
            <p className={styles.empty}>Your cart is empty.</p>
          )}

          <ul className={styles.cartSummary}>
            {/* <!-- item 1 --> */}
            <li>
              <div className={styles.plate}>
                <Image
                  src={plateFishStickFries}
                  alt="Fish Sticks and Fries"
                  className={styles.plate}
                />
                <div className={styles.quantity}>1</div>
              </div>
              <div className={styles.content}>
                <p className={styles.menuItem}>Fish Sticks and Fries</p>
                <p className={styles.price}>$6.34</p>
              </div>
              <div className={styles.quantityWrapper}>
                <button className={styles.decrease}>
                  <Image src={chevron} alt="Decrease" />
                </button>
                <div className={styles.quantity}>1</div>
                <button className={styles.increase}>
                  <Image src={chevron} alt="Increase" />
                </button>
              </div>
              <div className={styles.subtotal}>$6.34</div>
            </li>

            {/* <!-- item 2 --> */}
            <li>
              <div className={styles.plate}>
                <Image
                  src={plateFrenchFries}
                  alt="French Fries"
                  className={styles.plate}
                />
                <div className={styles.quantity}>2</div>
              </div>
              <div className={styles.content}>
                <p className={styles.menuItem}>French Fries with Ketchup</p>
                <p className={styles.price}>$2.23</p>
              </div>
              <div className={styles.quantityWrapper}>
                <button className={styles.decrease}>
                  <Image src={chevron} alt="Decrease" />
                </button>
                <div className={styles.quantity}>2</div>
                <button className={styles.increase}>
                  <Image src={chevron} alt="Increase" />
                </button>
              </div>
              <div className={styles.subtotal}>$4.46</div>
            </li>
          </ul>

          <div className={styles.totals}>
            <div className={styles.lineItem}>
              <div className={styles.label}>Subtotal:</div>
              <div
                className={`${styles.amount} ${styles.price} ${styles.subtotal}`}
              >
                $10.80
              </div>
            </div>
            <div className={styles.lineItem}>
              <div className={styles.label}>Tax:</div>
              <div className={`${styles.amount} ${styles.price} ${styles.tax}`}>
                $1.05
              </div>
            </div>
            <div className={`${styles.lineItem} ${styles.total}`}>
              <div className={styles.label}>Total:</div>
              <div
                className={`${styles.amount} ${styles.price} ${styles.total}`}
              >
                $11.85
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Day2;
