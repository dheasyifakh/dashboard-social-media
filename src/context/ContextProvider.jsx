import { createContext,  useState } from 'react';

const StateContext = createContext();

const initialState = {
  userProfile: false,
  notification: false,
};

const ContextProvider = ({children}) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  return (
    <StateContext.Provider value={{activeMenu, screenSize, setScreenSize, handleClick, isClicked, initialState, setIsClicked, setActiveMenu}}>
      {children}
    </StateContext.Provider>
  )
}

// export const useStateContext = () => useContext(StateContext);
export {ContextProvider, StateContext}