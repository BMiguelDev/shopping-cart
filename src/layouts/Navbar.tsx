import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { CartIcon } from "../assets/icons/icons";
import { RootState } from "../store";
import styles from "./Layouts.module.scss";

export default function Navbar() {
    const { totalAmount } = useSelector((store: RootState) => store.cart);

    return (
        <header>
            <nav className={styles.navbar_container}>
                <h3>Shopping Cart</h3>
                <div className={styles.navbar_buttons_container}>
                    <NavLink
                        end
                        to="/shopping-cart"
                        className={({ isActive }) =>
                            isActive ? `${styles.navbar_link} ${styles.navbar_link_active}` : styles.navbar_link
                        }
                    >
                        Products
                    </NavLink>
                    <NavLink
                        to="/shopping-cart/cart"
                        className={({ isActive }) =>
                            isActive ? `${styles.navbar_link} ${styles.navbar_link_active}` : styles.navbar_link
                        }
                    >
                        <CartIcon />
                        <div className={styles.cart_amount_container}>
                            {
                                totalAmount<100 ?
                                <p>{totalAmount}</p> :
                                <p className={styles.cart_amount_overflow}>99+</p>
                            }
                        </div>
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}
