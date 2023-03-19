import { createContext, useState } from "react";
//create context
export const DataContext = createContext();
//créate provider
const ContextProvider = (props) => {
  const [baseProps, setBaseProps] = useState(
    "Je proviens du fichier context.js dans src et je passe par index.js pour englober app d'un provider. Ce qui est écrit ici est le resultat de useState de context.js."
  );
  return (
    <DataContext.Provider value={{ baseProps }}>
      {props.children}
    </DataContext.Provider>
  );
};
export default ContextProvider;
