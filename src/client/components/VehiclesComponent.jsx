import React from 'react';
import Radio from '@material-ui/core/Radio/index';
import RadioGroup from '@material-ui/core/RadioGroup/index';
import FormControlLabel from '@material-ui/core/FormControlLabel/index';

const styles = {
    radioGroup: {
        paddingTop: '6%'
    }
}
export const VehicleComponent = props => (
    <RadioGroup aria-label="position" row style={styles.radioGroup}>
        <FormControlLabel
            id={props.vehicle.name}
            value={props.vehicle.speed}
            control={<Radio onClick={(event) => props.handleVehicleChange(event,props.id,props.vehicle)}color="primary" />}
            label={`${props.vehicle.name} - ${props.vehicle.max_distance} Megamiles - ${props.vehicle.speed}/hour - ${props.vehicle.availableCount} Available`}
            labelPlacement="end"
            checked={props.selectedValue.vehicles && props.selectedValue.vehicles.name === props.vehicle.name}
            disabled={(props.selectedValue && props.selectedValue.distance > props.vehicle.max_distance) || props.vehicle.availableCount == 0 || props.selectedValue.vehicles.name === props.vehicle.name}
        />
    </RadioGroup>
)