import { combineReducers } from 'redux';
import LoginReducers from './LoginReducers';
import ChangePasswordReducers from './ChangePassowrdReducers';
import SignUpReducers from './SignUpReducers';
import AdminReducers from './AdminReducers';
import UserReducers from './UserReducers';

const RootReducers= combineReducers({
    LoginReducers,
    ChangePasswordReducers,
    SignUpReducers,
    AdminReducers,
    UserReducers
});
export default RootReducers;