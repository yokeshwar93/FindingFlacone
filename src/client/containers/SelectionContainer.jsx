import React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SelectionComponent } from '../components/SelectionComponent';
import fetchPlanetsAction from '../actions/fetchPlanetsActions';
import fetchVehiclesAction from '../actions/fetchVehiclesAction';
import {CircularProgress} from "@material-ui/core/index";
import Button from '@material-ui/core/Button/index';
import updateSelectedValuesAction from "../actions/updateSelectedValuesAction";
import { getInitialVehiclesList } from '../utils/helper';
import updateVehiclesCountAction from "../actions/updateVehiclesCountAction";
import fetchResultsAction from "../actions/fetchResults";
import { TimerComponent } from "../components/TimerComponent";
import resetSelectedValues from "../actions/resetSelectedValuesAction";
import getTotalTime from "../utils/helper";

const styles = {
    loader: {
        top: '50%',
        position: 'absolute',
        left: '42%'
    },
    button: {
        position: 'absolute',
        left: '43%',
        top: '70%',
    },
    errorMessage: {
        position: 'absolute',
        color: 'red',
        fontWeight: 'bold',
        fontSize: '26px',
        left: '30%',
        top: '62%'
    }
}

const getFindFalconeRequestObject = (selectedValues) => {
    const requestObject = {
        planet_names : [],
        vehicle_names: []
    }
    Object.values(selectedValues).map(selectedValue => {
        requestObject.planet_names.push(selectedValue.name)
        requestObject.vehicle_names.push(selectedValue.vehicles.name)
    })
    return requestObject;
}
const  getSelectedPlanetNames = (selectedValues) => {
    const planetNames = []
    Object.values(selectedValues).map(selectedValue => planetNames.push(selectedValue.name));
    return planetNames;
}
 class SelectionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showErrorMessage: false
        }
    }

    componentDidMount() {
        this.props.fetchPlanetsAction();
        this.props.fetchVehiclesAction();
    }
    handleDestinationChange = id => event => {
        const selectedOption = event.target.selectedOptions[0]
        let selectedValues = this.props.selectedValues;
        selectedValues[id] = {
            name: selectedOption.id,
            distance: selectedOption.value,
            vehicles: {},
            timer: 0
        }
        this.props.updateSelectedValuesAction(selectedValues)
    }
     onResetHandler = () => {
         const vehiclesList = getInitialVehiclesList(this.props.vehicles)
         this.props.updateVehiclesCountAction(vehiclesList)
         this.props.resetSelectedValues();
         this.props.history.push('/')
    }

     handleVehicleChange = (event,id,vehicle) => {
        let selectedValues = this.props.selectedValues;
        const previousVehicle = this.props.selectedValues[id].vehicles && this.props.selectedValues[id].vehicles.name;
         selectedValues[id].vehicles = vehicle;
         let vehiclesList = this.props.vehicles;
         const index = vehiclesList.findIndex(data => data.name === vehicle.name);
         const tempVehicle = vehiclesList[index];

         if(previousVehicle) {
             const previousVehicleindex  = vehiclesList.findIndex(data => data.name === previousVehicle);
             vehiclesList[previousVehicleindex].availableCount = vehiclesList[previousVehicleindex].availableCount+1;
         }
         tempVehicle.availableCount = tempVehicle.availableCount -1;
         vehiclesList[index] = tempVehicle;
         selectedValues[id].timer = selectedValues[id].distance / tempVehicle.speed;
         this.props.updateVehiclesCountAction(vehiclesList)
         this.props.updateSelectedValuesAction(selectedValues)
     }
     onSubmitHandler = () => {
        let showErrorMessage = false;
        const selectedValues = Object.values(this.props.selectedValues);
        if(selectedValues.length < 4) {
            showErrorMessage = true;
        } else {
            selectedValues.map(selectedValue => {
                if(!selectedValue.vehicles.name) {
                    showErrorMessage = true
                }
            })
        }
        this.setState({
            showErrorMessage
        })
        if(!showErrorMessage) {
            const requestObject = getFindFalconeRequestObject(this.props.selectedValues);
            const timeTaken = getTotalTime(this.props.selectedValues);
            this.props.fetchResultsAction( requestObject, timeTaken )
            this.props.history.push('/result')
        }

     }
    render() {
        return (
            <div>
                <Header onResetHandler={this.onResetHandler}/>
                {this.props.planets && this.props.vehicles ? <SelectionComponent selectedPlanets={getSelectedPlanetNames(this.props.selectedValues)}handleVehicleChange={this.handleVehicleChange} handleDestinationChange={this.handleDestinationChange} planets={this.props.planets} vehicles={this.props.vehicles} selectedValues={this.props.selectedValues}/> : <CircularProgress style={styles.loader}/>}
                <TimerComponent selectedValues={this.props.selectedValues} />
                {this.state.showErrorMessage && <p style={styles.errorMessage}>Please Select all destinations and vehicles</p>}
                <Button onClick={this.onSubmitHandler} variant="outlined" style={styles.button}>
                    Find Falcone
                </Button>
                <Footer />

            </div>
        );
    }
}

SelectionContainer.propTypes = {
    planets: PropTypes.array,
    vehicles: PropTypes.array
};

export const mapStateToProps = state => ({
    planets: state.planetsReducer.planets,
    vehicles: state.vehiclesReducer.vehicles,
    selectedValues: state.selectedValuesReducer.selectedValues,

});

export const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            fetchPlanetsAction,
            fetchVehiclesAction,
            updateSelectedValuesAction,
            resetSelectedValues,
            updateVehiclesCountAction,
            fetchResultsAction
        },
        dispatch,
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SelectionContainer);
