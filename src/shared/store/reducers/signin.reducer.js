import { SignIn } from '../../enums/signin.enums';

const INITIAL_STATE = {
  loading: false,
  loaded: false,
  data: {
    name: null,
    user: null,
    email: null,
    heroId: null
  },
  error: null
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SignIn.LOADING:
      return { ...state, loading: true };
    case SignIn.SUCCESS:
      return { ...state, data: action.data, loading: false, error: null };
    case SignIn.FAILURE:
      return { ...state, loading: false, error: action.error };
    case SignIn.RESET:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};

export default reducer;
