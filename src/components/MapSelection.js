import React from 'react';
import MapConstants from "../constants/MapConstants";
import { MapSelectionDropdown } from "../components/MapSelection.styles";

const MapSelection = ({currentlySelectedId, changeMapSelection}) => {
    const mapSelectOptions = Object.keys(MapConstants).map(function(x,i) {
        
        return (
            <option value={i} key={`mapSelection-${x}`}>
                { x }
            </option>
        );
    });

    return (
        <MapSelectionDropdown onChange={(e) => {changeMapSelection(e.target.value); }} >
            { mapSelectOptions }
        </MapSelectionDropdown>
    );
};

export default MapSelection;