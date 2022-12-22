import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { faSmile } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Modal from "../../components/Modal/Modal";
import { toggleModal } from "../../features/modal/modalSlice";
import { CartType } from "../../models/model";
import { AppDispatch, RootState } from "../../store";
import CartItem from "./CartItem";
import styles from "./CartContainer.module.scss";
import { LOCAL_STORAGE_KEY_CART_ITEMS } from "../../features/cart/cartSlice";

export default function CartContainer() {
    const { isOpen } = useSelector((store: RootState) => store.modal);

    const { cartItems, totalAmount, totalPrice }: CartType = useSelector((store: RootState) => store.cart);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_CART_ITEMS, JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <main>
            <section className={styles.cart_container}>
                {totalAmount < 1 ? (
                    <div className={styles.cart_empty}>
                        <h2>your bag</h2>
                        <h4>Your bag is empty</h4>
                        <h4>Add some products to see them here!</h4>
                        <FontAwesomeIcon icon={ faSmile } />
                    </div>
                ) : (
                    <div className={styles.cart_list_container}>
                        <h2>your bag</h2>
                        <div className={styles.cart_list}>
                            {cartItems.map((item) => (
                                <CartItem key={item.id} {...item} />
                            ))}
                        </div>
                        <div className={styles.cart_bottom_bar}>
                            <hr />
                            <div className={styles.cart_bottom_total}>
                                <h4>
                                    total <span>${totalPrice.toFixed(2)}</span>
                                </h4>
                            </div>
                            <button className="large_button clear_button" onClick={() => dispatch(toggleModal())}>
                                clear cart
                            </button>
                        </div>
                    </div>
                )}
            </section>
            {isOpen && <Modal />}
        </main>
    );
}
