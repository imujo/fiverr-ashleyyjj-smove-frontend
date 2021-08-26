import React, { useState, createContext } from "react";


const ReloadStateContext = createContext();

const ReloadStateProvider = (props) => {
  
    const [carouselsReloadState, setCarouselsReloadState] = useState(false)
    const reloadCarousels = () => {
        setCarouselsReloadState(!carouselsReloadState)
    }
    
    const [propertyReloadState, setPropertyReloadState] = useState(false)
    const reloadProperty = () => {
      setPropertyReloadState(!propertyReloadState)
    }
    

  return (
    <ReloadStateContext.Provider
      value={{

        reloadCarouselsGlobal: [carouselsReloadState, reloadCarousels],
        
        reloadPropertyGlobal: [propertyReloadState, reloadProperty],


      }}
    >
      {props.children}
    </ReloadStateContext.Provider>
  );
};

export { ReloadStateProvider, ReloadStateContext };
