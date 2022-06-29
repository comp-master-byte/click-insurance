import React, {useState} from "react";
import "./styles/main.scss";
import { CustomSelect } from "./components/CustomSelect/CustomSelect";

function App() {

    const [selectedOption, setSelectedOption] = useState("Паспорт");

    return (
      <div className="wrapper">
        <CustomSelect 
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
        />
      </div>
    );
}

export default App;
