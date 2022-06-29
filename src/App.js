import React, {useState} from "react";
import "./styles/main.scss";
import { CustomSelect } from "./components/CustomSelect/CustomSelect";
import { CustomInput } from "./components/CustomInput/CustomInput";

function App() {

    const [selectedOption, setSelectedOption] = useState("Паспорт");
    const [locationValue, setLocationValue] = useState("");

    return (
      <div className="wrapper">
        <CustomSelect 
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
        />
        <CustomInput 
            value={locationValue}
            setValue={setLocationValue}
        />
      </div>
    );
}

export default App;
