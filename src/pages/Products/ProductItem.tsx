import { useDispatch } from "react-redux";
import { addProductToCart } from "../../features/cart/cartSlice";
import { faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ProductItemType } from "../../models/model";
import { AppDispatch } from "../../store";
import styles from "./Products.module.scss";

interface PropTypes {
    product: ProductItemType;
}

export default function ProductItem({ product }: PropTypes) {
    const dispatch = useDispatch<AppDispatch>();
    const { title, price, category, image, rating } = product;

    return (
        <article className={styles.cart_item}>
            <img src={image} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className={styles.item_price}>${price}</h4>
                <h6 className={styles.item_price}>{category}</h6>
            </div>
            {/* <div>
                <h5>{rating.rate}</h5>
            </div> */}
            <div className={styles.item_right_side}>
                <div className={styles.item_rating}> 
                    <h5>{rating.rate}/5</h5>
                    <FontAwesomeIcon icon={ faStar } />
                </div>
           
                <button onClick={() => dispatch(addProductToCart(product))}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
        </article>
    );
}
