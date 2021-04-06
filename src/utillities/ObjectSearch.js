export function SearchObjectForValue (obj, query) {

    for (var key in obj) {
        var value = obj[key];

        if (typeof value === 'object') {
            SearchObjectForValue(value, query);
        }

        if (value === query) {
            console.log('property=' + key + ' value=' + value);
            return key;
        }
    }

    return -1;
}