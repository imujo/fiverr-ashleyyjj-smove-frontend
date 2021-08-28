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
    

    const [alert, setAlert] = useState({})

    const addAlert = (msg, type) => {
      setAlert({
        msg: msg,
        type: type
      })

      setTimeout(()=> setAlert({}), 3000)
    }
    
    


  return (
    <ReloadStateContext.Provider
      value={{

        reloadCarouselsGlobal: [carouselsReloadState, reloadCarousels],
        
        reloadPropertyGlobal: [propertyReloadState, reloadProperty],

        alertGlobal: [alert, addAlert]


      }}
    >
      {props.children}
    </ReloadStateContext.Provider>
  );
};

export { ReloadStateProvider, ReloadStateContext };
