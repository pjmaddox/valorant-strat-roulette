import _ from "lodash";

import Icebox from '../assets/img/Icebox.png';
import LoadingScreenAscent from '../assets/img/Loading_Screen_Ascent.png';
import LoadingScreenBind from '../assets/img/Loading_Screen_Bind.png';
import LoadingScreenHaven from '../assets/img/Loading_Screen_Haven.png';
import LoadingScreenIcebox from '../assets/img/Loading_Screen_Icebox.jpeg';
import LoadingScreenSplit from '../assets/img/Loading_Screen_Split.png';

const maps = {
    Any: 0,
    Bind: 1,
    Haven: 2,
    Split: 3,
    Ascent: 4,
    Icebox: 5
}

const mapLoadingScreens = {
    // This Icebox shot is a good, generic background image. There's other ones in /assets/img that
    // you could use, or you could have it select one randomly
    [maps.Any]: Icebox,
    [maps.Bind]: LoadingScreenBind,
    [maps.Haven]: LoadingScreenHaven,
    [maps.Split]: LoadingScreenSplit,
    [maps.Ascent]: LoadingScreenAscent,
    [maps.Icebox]: LoadingScreenIcebox
}

export default maps;

function GetMapAsDictionary() {
    let thing = Object.keys(maps);

    let result = {};

    _.forEach(thing, function(x) {
        result[x] = { name: x, value: maps[x] }
    });

    return result;
}

export const MapsAsDictionary = GetMapAsDictionary();
export const getMapLoadingScreen = (mapKey) =>  {
    // // return the loading screen for a random map
    // if (mapKey === maps.Any) {
    //     const loadingScreens = Object.values(mapLoadingScreens);

    //     return loadingScreens[Math.floor(Math.random() * loadingScreens.length)]
    // }

    return mapLoadingScreens[mapKey];
}
