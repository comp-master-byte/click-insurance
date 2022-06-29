import React, {useState} from "react";
import "./styles/main.scss";
import { CustomSelect } from "./components/CustomSelect/CustomSelect";
import { CustomInput } from "./components/CustomInput/CustomInput";

function App() {

    return (
      <div className="wrapper">
        <CustomSelect />
        <CustomInput />
      </div>
    );
}

export default App;
