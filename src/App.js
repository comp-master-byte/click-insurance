import React, {useState} from "react";
import "./styles/main.scss";
import { CustomSelect } from "./components/CustomSelect/CustomSelect";
import { CustomInput } from "./components/CustomInput/CustomInput";

function App() {

    const [selectedOption, setSelectedOption] = useState("Паспорт");

    return (
      <div className="wrapper">
        <CustomSelect 
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
        />
        <CustomInput />
      </div>
    );
}

export default App;
