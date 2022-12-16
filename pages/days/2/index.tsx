import React from "react";
import Image from "next/image";
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

const Day2: NextPage = () => {
  return (
    <div className={styles.outerWrapper}>
      <div className={`${styles.wrapper} ${styles.menu}`}>
        <div className={styles.panel}>
          <h1>To Go Menu</h1>
          <ul className={styles.menu}>
            <li>
              <div className={styles.plate}>
                <Image
                  src={plateFrenchFries}
                  alt="French Fries"
                  className={styles.plate}
                />
              </div>
              <div className={styles.content}>
                <p className={styles.menuItem}>French Fries with Ketchup</p>
                <p className={styles.price}>$2.23</p>
                <button className={styles.inCart}>
                  <Image src={check} alt="Check" />
                  In Cart
                </button>
              </div>
            </li>
            <li>
              <div className={styles.plate}>
                <Image
                  src={plateSalmonVegetables}
                  alt="Salmon and Vegetables"
                  className={styles.plate}
                />
              </div>
              <div className={styles.content}>
                <p className={styles.menuItem}>Salmon and Vegetables</p>
                <p className={styles.price}>$5.12</p>
                <button className={styles.add}>Add to Cart</button>
              </div>
            </li>
            <li>
              <div className={styles.plate}>
                <Image
                  src={plateSpaghettiMeatSauce}
                  alt="Spaghetti Meat Sauce"
                  className={styles.plate}
                />
              </div>
              <div className={styles.content}>
                <p className={styles.menuItem}>Spaghetti with Meat Sauce</p>
                <p className={styles.price}>$7.82</p>
                <button className={styles.add}>Add to Cart</button>
              </div>
            </li>
            <li>
              <div className={styles.plate}>
                <Image
                  src={plateBaconEggs}
                  alt="Bacon, Eggs, and Toast"
                  className={styles.plate}
                />
              </div>
              <div className={styles.content}>
                <p className={styles.menuItem}>Bacon, Eggs, and Toast</p>
                <p className={styles.price}>$5.99</p>
                <button className={styles.add}>Add to Cart</button>
              </div>
            </li>
            <li>
              <div className={styles.plate}>
                <Image
                  src={plateChickenSalad}
                  alt="Chicken Salad with Parmesean"
                  className={styles.plate}
                />
              </div>
              <div className={styles.content}>
                <p className={styles.menuItem}>Chicken Salad with Parmesan</p>
                <p className={styles.price}>$6.98</p>
                <button className={styles.add}>Add to Cart</button>
              </div>
            </li>
            <li>
              <div className={styles.plate}>
                <Image
                  src={plateFishStickFries}
                  alt="Fish Sticks and Fries"
                  className={styles.plate}
                />
              </div>
              <div className={styles.content}>
                <p className={styles.menuItem}>Fish Sticks and Fries</p>
                <p className={styles.price}>$6.34</p>
                <button className={styles.add}>Add to Cart</button>
              </div>
            </li>
          </ul>
        </div>

        <div className={`${styles.panel} ${styles.cart}`}>
          <h1>Your Cart</h1>
          {/* <p className={styles.empty}>Your cart is empty.</p> */}

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
