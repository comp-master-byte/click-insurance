import React, { useState } from "react";
import styles from "./CustomInput.module.scss";
import debounce from "lodash.debounce";

export const CustomInput = () => {

    const [value, setValue] = useState("");

    const updateValue = event => setValue(event?.target?.value);

    const debouncedOnChange = debounce(updateValue, 200);

    return (
        <input
            onChange={debouncedOnChange}
            className={styles.input}
            type="text"
        />
    )
}
