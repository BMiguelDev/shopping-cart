import React, { useRef } from "react";
import { useDispatch } from "react-redux/es/exports";
import { clearCart } from "../../features/cart/cartSlice";
import { toggleModal } from "../../features/modal/modalSlice";

import '../../App.scss';
import styles from './Modal.module.scss';

export default function Modal() {
    const dispatch = useDispatch();

    const modalRef = useRef<HTMLDivElement>(null);

    function handleClick(event: any) {
        console.log("hey");
            if(modalRef.current && !modalRef.current?.contains(event.target)) {
                dispatch(toggleModal());
            }
        
    }

    return (
        <aside className={styles.modal_container} onClick={(e) => handleClick(e)}>
            <div className={styles.modal_popup} ref={modalRef}>
                <h4>remove all items from your shopping cart?</h4>
                <div className={styles.btn_container}>
                    <button
                        type="button"
                        className={`large_button ${styles.confirm_button}`}
                        onClick={() => {
                            dispatch(clearCart());
                            dispatch(toggleModal());
                        }}
                    >
                        confirm
                    </button>
                    <button type="button" className="large_button clear_button" onClick={() => dispatch(toggleModal())}>
                        cancel
                    </button>
                </div>
            </div>
        </aside>
    );
}
