import { takeLatest } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';
import actions from '../utils/actionTypes';
import fetchPlanentsSaga from './fetchPlanetsSaga';
import fetchVehiclesSaga from './fetchVehiclesSaga';
import fetchResultsSaga from './fetchResultsSaga';

export default function* saga() {
    yield takeLatest(actions.FETCH_PLANETS, fetchPlanentsSaga);
    yield takeLatest(actions.FETCH_VEHICLES, fetchVehiclesSaga);
    yield takeLatest(actions.FETCH_RESULTS, fetchResultsSaga);

}
