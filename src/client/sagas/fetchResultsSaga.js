import { put, call } from 'redux-saga/effects';
import actions from '../utils/actionTypes';
import { serviceUrls } from '../utils/constants';

export default function* fetchResultsSaga(action) {

    try {
        const tokenApi = serviceUrls.fetchTokenAPI;
        let tokenResponse = yield call(fetch, tokenApi, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',

            },
            body: JSON.stringify({}),
        });
        yield tokenResponse = tokenResponse.json().then(data => tokenResponse = data)

        if(tokenResponse.token) {
            const api = serviceUrls.findFalconeAPI;
            let requestObject = action.payload.requestObject;
            requestObject.token = tokenResponse.token
            let response = yield call(fetch, api, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                },
                body: JSON.stringify(requestObject),
            });
            yield response = response.json().then(data => response = data)
            const responseObject = {}
            if(response.status === 'success') {
                responseObject.message = "Huray ! Queen Falcone has been Found. You are the new favorite person of King Shan"
                responseObject.planetName = response.planet_name;
                responseObject.timer = action.payload.timeTaken;
            } else {
                responseObject.message = "Tough Luck ! Queen Falcone could not be found, you can try again to find her."
            }
            yield put({
                type: actions.FETCH_RESULTS_SUCCESS,
                response: responseObject,
            });
        }
    } catch (error) {
        yield put({
            type: actions.FETCH_RESULTS_FAILURE,
            error,
        });
    }
}
