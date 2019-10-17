import React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import {CircularProgress} from "@material-ui/core/index";
import { bindActionCreators } from 'redux';
import { getInitialVehiclesList } from '../utils/helper';
import resetSelectedValues from "../actions/resetSelectedValuesAction";
import updateVehiclesCountAction from "../actions/updateVehiclesCountAction";

const styles = {
    loader: {
        top: '50%',
        position: 'absolute',
        left: '42%'
    },
    rootDiv: {
        position: 'absolute',
        left: '23%',
        top:  '23%'
    },
    span : {
        fontSize: '30px',
        fontWeight:  'bold'
    },
    subDiv: {
        left: '16%',
        position: 'absolute'
    },
    p : {
        fontSize: '30px',
        fontWeight:  'bold',
        color: 'green',
        display: 'inline'
    }
}
class ResultsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showErrorMessage: false
        }
    }
    onResetHandler = () => {
        const vehiclesList = getInitialVehiclesList(this.props.vehicles)
        this.props.updateVehiclesCountAction(vehiclesList)
        this.props.resetSelectedValues();
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <Header onResetHandler={this.onResetHandler}/>
                {this.props.results ? <div style={styles.rootDiv}>
                    <p style={styles.span}>{this.props.results.message}</p>
                    {this.props.results.timer && <div style={styles.subDiv}>
                        <span style={styles.span}>Time Taken : <p style={styles.p}>{this.props.results.timer}</p></span>
                        <br />
                        <span style={styles.span}>Planet Found : <p style={styles.p}>{this.props.results.planetName}</p></span>
                    </div>}
                </div> : <CircularProgress style={styles.loader}/>}
                <Footer />

            </div>
        );
    }
}

ResultsContainer.propTypes = {
    results: PropTypes.object,

};

export const mapStateToProps = state => ({
    results: state.resultsReducer.results,
    vehicles: state.vehiclesReducer.vehicles,

});
export const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {

            resetSelectedValues,
            updateVehiclesCountAction,

        },
        dispatch,
    );



export default connect(
    mapStateToProps,
    mapDispatchToProps

)(ResultsContainer);
