import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../features/cart/cartSlice";
import { faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ProductItemType } from "../../models/model";
import { AppDispatch, RootState } from "../../store";
import styles from "./Products.module.scss";

interface PropTypes {
    product: ProductItemType;
}

export default function ProductItem({ product }: PropTypes) {
    const { id, title, price, category, image, rating } = product;

    const dispatch = useDispatch<AppDispatch>();
    const { cartItems } = useSelector((store: RootState) => store.cart);

    return (
        <article className={styles.product_item}>
            <img src={image} alt={title} />
            <div className={styles.product_item_description}>
                <h3>{title}</h3>
                <h4 className={styles.item_price}>${price}</h4>
                <h5 className={styles.item_price}>{category}</h5>
            </div>
            <div className={styles.product_item_right_side}>
                <div className={styles.product_item_rating}>
                    <h5>{rating.rate.toFixed(1)} / 5</h5>
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <button
                    className={styles.product_item_cart_button}
                    onClick={() => dispatch(addProductToCart(product))}
                    disabled={cartItems.some((item) => item.id === id)}
                >
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
        </article>
    );
}
