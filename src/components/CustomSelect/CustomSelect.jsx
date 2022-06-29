import React, { useState } from 'react';
import { Pointer } from '../../icons/Pointer';
import pointer from "../../icons/pointer.svg";
import styles from "./CustomSelect.module.scss";

export const CustomSelect = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleHandler = () => setIsOpen(prev => !prev);

    return (
        <div onClick={toggleHandler} className={styles.select}>
            <div className={styles.selectBtn}>
                <span>Важный текст</span>
                <img className={isOpen ? styles.selectBtn__img : styles.selectBtn__closedImg} src={pointer} alt="" />
            </div>
            {isOpen &&
                <div className={styles.content}>
                    <ul className={styles.options}>
                        <li>Паспорт</li>
                        <li>Водительские права</li>
                        <li>Военный билет</li>
                    </ul>
                </div>
            }

        </div>
    )
}
