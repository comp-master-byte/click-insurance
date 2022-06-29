import React from 'react';
import { Pointer } from '../../icons/Pointer';
import styles from "./CustomSelect.module.scss";

export const CustomSelect = () => {
    return (
        <div className={styles.select}>
            <div className={styles.selectBtn}>
                <span>Важный текст</span>
                <Pointer />
            </div>
            <div className={styles.content}>
                <ul className={styles.options}>
                    <li>Паспорт</li>
                    <li>Водительские права</li>
                    <li>Военный билет</li>
                </ul>
            </div>
        </div>
    )
}
