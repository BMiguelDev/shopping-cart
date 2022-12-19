import { useDispatch } from 'react-redux';

import { ChevronDown, ChevronUp } from "../../assets/icons/icons";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { decreaseItemAmount, increaseItemAmount, removeItem } from '../../features/cart/cartSlice';
import { CartItemType } from "../../models/model";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./CartContainer.module.scss";


export default function CartItem({ id, title, price, image, amount }: CartItemType) {

    const dispatch = useDispatch();

    return (
        <article className={styles.cart_item}>
            <img src={image} alt={title} />
            <div className={styles.cart_item_description}>
                <h3>{title}</h3>
                <h4 className={styles.item_price}>${price}</h4>
                <button className={styles.remove_btn} onClick={() => dispatch(removeItem({ id, amount, price }))}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
            <div className={styles.cart_item_right_side}>
                <button className={styles.cart_item_amount_btn} onClick={() => dispatch(increaseItemAmount(id))}>
                    <ChevronUp />
                </button>
                <p className={styles.cart_item_amount_text}>{amount<100 ? amount : "99+"}</p>
                <button
                    className={styles.cart_item_amount_btn}
                    onClick={() => {
                        if (amount === 1) dispatch(removeItem({ id, amount, price }));
                        else dispatch(decreaseItemAmount(id));
                    }}
                >
                    <ChevronDown />
                </button>
            </div>
        </article>
    );
}
