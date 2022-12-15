import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { CartIcon } from "../assets/icons/icons";
import { RootState } from "../store";
import styles from './Layouts.module.scss';

export default function Navbar() {
    const { totalAmount } = useSelector((store: RootState) => store.cart);

    return (
        <header>
            <nav>
                <div className={styles.nav_center}>
                    <h3>redux toolkit</h3>
                    <div className={styles.nav_container}>
                        <NavLink
                            to="/shopping-cart/products"
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
                            <div className={styles.amount_container}>
                                <p className={styles.total_amount}>{totalAmount}</p>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </header>
    );
}
