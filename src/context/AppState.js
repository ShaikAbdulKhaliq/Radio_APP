import { Children, useState } from "react";
import AppContext from "./AppContext";

const AppState = ({ children }) => {
  const [name, setName] = useState("Nirbahy");

  const [step, setStep] = useState(1);
  return (
    <AppContext.Provider
      value={{
        name,
        setName,
        step,
        setStep,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppState;
