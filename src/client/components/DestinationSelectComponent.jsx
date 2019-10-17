import React from 'react';
import Select from '@material-ui/core/Select/index';
import InputLabel from '@material-ui/core/InputLabel/index';
import { VehicleComponent } from "./VehiclesComponent";

const styles = {
    formControl: {
        paddingRight: '2%',
        width: '15%',
        display: 'inline-grid',
    },
    vehiclesDiv: {
        paddingTop: '11%'
    }
}
 export const DestinationSelectComponent = props => (
    <div style={styles.formControl}>
        <InputLabel htmlFor="age-helper">{`Destination ${props.id}`}</InputLabel>
        <Select
            native
            // value={props.selectedValue.name}
            onChange={props.handleDestinationChange(props.id)}
            label='Select Value'
        >
            <option disabled={props.selectedValue && props.selectedValue.name ? true : false}>Select Planet</option>
            {props.planets.map(planet =>  <option key={planet.name} disabled={props.selectedPlanets.indexOf(planet.name) != -1 ? true : false} value={planet.distance} id={planet.name}>{`${planet.name}  - ${planet.distance} Megamiles`}</option>)}
        </Select>
        <div style={styles.vehiclesDiv}>
        {props.selectedValue && props.vehicles.map(vehicle => <VehicleComponent key={props.id} handleVehicleChange={props.handleVehicleChange} id={props.id} key={props.name} vehicle={vehicle} selectedValue={props.selectedValue}/>)}
        </div>
    </div>
 )