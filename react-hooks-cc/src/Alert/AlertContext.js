import React, {useContext, useState} from "react";

const AlertContext = React.createContext();

export const useAlert = () => {
    return useContext(AlertContext);
};

/**
 * Чтобы не делать кучу экспортов с контекстами, в value передаем объект
 */
// const AlertToggleContext = React.createContext();

// export const useAlertToggle = () => {
//     return useContext(AlertToggleContext);
// };

export const AlertProvider = ({children}) => {
    const [alert, setAlert] = useState(false);

    const toggle = () => setAlert(prev => !prev);

    return (
        <AlertContext.Provider value={{
            visible: alert,
            toggle
        }}>
            {children}
        </AlertContext.Provider>
    );
};