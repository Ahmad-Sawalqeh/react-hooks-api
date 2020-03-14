
import React, {useState} from 'react';

export const SettingsContext = React.createContext();

function SettingProvider(props) {

  const [display, setDisplay] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const state = {
    display,
    currentPage,
    postsPerPage,
    changeDisplay:setDisplay,
    changeCurrentPage:setCurrentPage,
  };

  return(
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}

export default SettingProvider;
