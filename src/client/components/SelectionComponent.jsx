import React from 'react';
import {DestinationSelectComponent} from './DestinationSelectComponent';
const styles = {
    destinationDiv: {
        position: 'absolute',
        marginLeft: '22%',
        marginTop: '6%',
        width: '77%'
    }
}
export const SelectionComponent = props => (

    <div style={styles.destinationDiv}>
        {[1,2,3,4].map(id => <DestinationSelectComponent  selectedPlanets={props.selectedPlanets} handleVehicleChange={props.handleVehicleChange} handleDestinationChange={props.handleDestinationChange} key={id} id={id} selectedValue={props.selectedValues[id]} vehicles={props.vehicles} planets={props.planets}/>)}
    </div>
)
