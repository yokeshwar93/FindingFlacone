
import actions from '../utils/actionTypes';

const fetchResultsAction = (requestObject, timeTaken) => ({
    type: actions.FETCH_RESULTS,
    payload: { requestObject, timeTaken }


});

export default fetchResultsAction;
