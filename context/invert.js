import { createContext, useContext, useState } from "react";

const Context = createContext();

export function InvertProvider({ children }) {
  const [styleLayout, setStyleLayout] = useState({
    filter: "invert(0)",
  });

  return (
    <Context.Provider value={[styleLayout, setStyleLayout]}>
      {children}
    </Context.Provider>
  );
}

export function useInvertContext() {
  return useContext(Context);
}
