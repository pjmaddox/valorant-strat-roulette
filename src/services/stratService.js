import _ from 'lodash'
import strats from "../tempData/allStrats";
import TeamConstants from "../constants/TeamConstants";
import { MapsAsDictionary } from "../constants/MapConstants";
import MapConstants from "../constants/MapConstants";

const allStratList = strats;
const offenseStratList = _.filter(allStratList, function(x) { return x.offense == true; });
const defenseStratList = _.filter(allStratList, function(x) { return x.defense == true; });

function GetRandomStratFromList(list, mapId){
    let mapDatas = Object.values(MapsAsDictionary);
    let currentMapName = _.find(mapDatas, function(x) {
        return x.value == mapId;
    }).name;

    let filteredList;
    if(mapId == MapConstants.Any) {
        filteredList = _.filter(list, function(strat) {
            return strat.specificMaps.length == 0;
        });
    }
    else {
        filteredList = _.filter(list, function(strat) {
            return strat.specificMaps.indexOf(currentMapName) >= 0 || strat.specificMaps.length == 0;
        });
    }

    var targetIndex = _.random(0, filteredList.length-1);

    var targetData = filteredList[targetIndex];

    return targetData;
}

export function GetRandomStratForTeam(currentTeam, mapId) {
    var result;
    if(currentTeam = TeamConstants.offense) {
        result = GetRandomStratFromList(offenseStratList, mapId);
    }
    else {
        result = GetRandomStratFromList(defenseStratList, mapId);
    }

    return result;
}

