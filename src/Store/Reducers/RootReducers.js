import { combineReducers } from 'redux';
import LoginReducers from './LoginReducers';
import ChangePasswordReducers from './ChangePassowrdReducers';
import SignUpReducers from './SignUpReducers';

const RootReducers= combineReducers({
    LoginReducers,
    ChangePasswordReducers,
    SignUpReducers
});
export default RootReducers;