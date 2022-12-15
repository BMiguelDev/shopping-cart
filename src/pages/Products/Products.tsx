import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProducts } from "../../features/products/productsSlice";
import { AppDispatch, RootState } from "../../store";
import ProductItem from "./ProductItem";
import styles from "./Products.module.scss";

export default function Products() {
    const { isLoading, productItems } = useSelector((store: RootState) => store.products);
    const dispatch = useDispatch<AppDispatch>();

    // TODO: put products and cart in local storage
    useEffect(() => {
        if (productItems.length === 0) dispatch(getProducts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main>
            {isLoading ? (
                <div className={styles.loading}>
                    <h1>Loading...</h1>
                </div>
            ) : (
                <section className={styles.cart}>
                    {productItems.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </section>
            )}
        </main>
    );
}
