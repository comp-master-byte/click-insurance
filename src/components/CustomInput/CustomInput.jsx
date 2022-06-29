import React from "react";
import styles from "./CustomInput.module.scss";

export const CustomInput = (props) => {

    const { value, setValue } = props;

    return (
        <input
            value={value}
            onChange={event => setValue(event.target.value)}
            className={styles.input}
            type="text"
        />
    )
}
