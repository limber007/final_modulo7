import { combineReducers } from 'redux';
import formReducer from './formReducer';  // Asegúrate de que formReducer esté configurado correctamente

// Combina todos los reducers en uno solo
const rootReducer = combineReducers({
  form: formReducer,  // Aquí puedes agregar otros reducers si los tienes
});

export default rootReducer;
