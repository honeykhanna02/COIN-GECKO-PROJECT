import { call, put, takeEvery } from 'redux-saga/effects';
import getData from '../services/getData';

function getApi() {
    return getData()
    .then((response)=>response)
    .catch((error)=>{
       throw error;
      })
   };
   
function* fetchApiData() {
    try {
       const data = yield call(getApi);
       yield put({type: "SUCCESS_COINGECKO_DATA", data: data});
    } catch (e) {
       yield put({type: "FAILED_COINGECKO_DATA", message: e.message});
    }
 }

 function* mySaga() {
    yield takeEvery("GET_COINGECKO_DATA", fetchApiData);
  }
  
export default mySaga;




























