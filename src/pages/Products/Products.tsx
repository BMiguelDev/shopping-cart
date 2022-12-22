import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getProducts, LOCAL_STORAGE_KEY_PRODUCT_ITEMS } from "../../features/products/productsSlice";
import { AppDispatch, RootState } from "../../store";
import ProductItem from "./ProductItem";
import styles from "./Products.module.scss";

export default function Products() {
    const { isLoading, productItems } = useSelector((store: RootState) => store.products);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (productItems.length === 0) dispatch(getProducts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_PRODUCT_ITEMS, JSON.stringify(productItems));
    }, [productItems]);

    return (
        <main className={styles.products_container}>
            {isLoading ? (
                <div className={styles.loading_container}>
                    <FontAwesomeIcon icon={faSpinner} />
                </div>
            ) : (
                <section className={styles.products_section}>
                    <h2>Products</h2>
                    <div className={styles.product_items_list}>
                        {productItems.map((product) => (
                            <ProductItem key={product.id} product={product} />
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}
