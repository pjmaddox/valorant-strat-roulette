import _ from "lodash";

const maps = {
    Any: 0,
    Bind: 1,
    Haven: 2,
    Split: 3,
    Ascent: 4,
    Icebox: 5
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