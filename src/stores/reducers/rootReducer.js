import { reducer as formReducer} from 'redux-form'
import userReducer from '../slices/user'

const rootReducer = {
  form: formReducer,
  user: userReducer
}

export default rootReducer