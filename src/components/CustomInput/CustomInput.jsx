import React, { useState } from "react";
import styles from "./CustomInput.module.scss";
import { AddressSuggestions } from "react-dadata";

const TOKEN = "5feb07854dfb8163b2353c85a3c35a5ab02eda01";

export const CustomInput = () => {

    const [value, setValue] = useState("");

    return (
        <AddressSuggestions
            inputProps={{
                className: styles.input
            }}
            containerClassName={styles.container}
            suggestionClassName={styles.suggestion}
            token={TOKEN}
            value={value}
            onChange={setValue}
        />
    )
}
