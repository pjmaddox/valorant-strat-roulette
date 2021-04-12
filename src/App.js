import React, { useState } from 'react';
import StratDisplay from "./components/StratDisplay";
import { GetRandomStratForTeam } from "./services/stratService";
import TeamConstants from "./constants/TeamConstants";
import MapConstants from "./constants/MapConstants";

function App() {

  let [currentTeam, setCurrentTeam] = useState(TeamConstants.offense);
  let [currentMap, setCurrentMap] = useState(MapConstants.Any);
  let [currentStratData, setCurrentStratData] = useState( GetRandomStratForTeam(currentTeam, currentMap) );

  const getNewStratFunction = () => {
    setCurrentStratData(GetRandomStratForTeam(currentTeam, currentMap));
  }

  return (
    <StratDisplay
      stratData={currentStratData}
      team={currentTeam}
      map={currentMap}
      changeStratFunction={getNewStratFunction}
      changeCurrentMap={setCurrentMap}
      changeTeam={setCurrentTeam}
    />
  );
}

export default App;
