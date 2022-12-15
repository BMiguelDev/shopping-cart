import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";

import Modal from "../../components/Modal/Modal";
import { toggleModal } from "../../features/modal/modalSlice";
import { CartType } from "../../models/model";
import { AppDispatch, RootState } from "../../store";
import CartItem from "./CartItem";
import styles from "./CartContainer.module.scss";

export default function CartContainer() {
    const { isOpen } = useSelector((store: RootState) => store.modal);

    const { cartItems, totalAmount, totalPrice }: CartType = useSelector((store: RootState) => store.cart);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <main>
            <section className={styles.cart}>
                {totalAmount < 1 ? (
                    <header>
                        <h2>your bag</h2>
                        <h4 className={styles.empty_cart}>is currently empty</h4>
                    </header>
                ) : (
                    <header>
                        <h2>your bag</h2>
                        <div>
                            {cartItems.map((item) => (
                                <CartItem key={item.id} {...item} />
                            ))}
                        </div>
                        <footer>
                            <hr />
                            <div className={styles.cart_total}>
                                <h4>
                                    total <span>${totalPrice.toFixed(2)}</span>
                                </h4>
                            </div>
                            <button className={`${styles.btn} ${styles.clear_btn}`} onClick={() => dispatch(toggleModal())}>
                                clear cart
                            </button>
                        </footer>
                    </header>
                )}
            </section>
            {isOpen && <Modal />}
        </main>
    );
}
