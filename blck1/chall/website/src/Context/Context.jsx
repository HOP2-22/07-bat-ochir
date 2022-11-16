import { createContext, useState } from "react";

export const DataContext = createContext();

export function ThemeComponent({ children }) {
  const [checked, setChecked] = useState(true);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <DataContext.Provider value={{ handleChange, checked }}>
      {children}
    </DataContext.Provider>
  );
}
