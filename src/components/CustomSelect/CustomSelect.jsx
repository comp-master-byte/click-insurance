import React, { useState } from "react";
import pointer from "../../icons/pointer.svg";
import styles from "./CustomSelect.module.scss";

export const CustomSelect = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Паспорт");

    const toggleHandler = () => setIsOpen(prev => !prev);

    const options = ['Паспорт', 'Водительские права', 'Военный билет'];

    return (
        <div onClick={toggleHandler} className={styles.select}>
            <div className={styles.selectBtn}>
                <span>{selectedOption}</span>
                <img className={isOpen ? styles.selectBtn__img : styles.selectBtn__closedImg} src={pointer} alt="" />
            </div>
            {isOpen &&
                <div className={styles.content}>
                    {options.map(option =>
                        <ul
                            key={option}
                            onClick={() => setSelectedOption(option)}
                            className={styles.options}
                        >
                            <li>{option}</li>
                        </ul>
                    )}
                </div>
            }

        </div>
    )
}
