const initialState = {
    formData: {
      username: '',
      email: '',
      password: ''
    }
  };
  
  const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CREDENTIALS':
        if (action.payload.password === 'mod7ReactUSIP') {
          return {
            ...state,
            formData: {
              username: action.payload.username,
              email: action.payload.email,
              password: action.payload.password,
            }
          };
        } else {
          return state;
        }
      case 'CLEAR_CREDENTIALS':
        return {
          ...state,
          formData: {
            username: '',
            email: '',
            password: ''
          }
        };
      default:
        return state;
    }
  };
  
  export default formReducer;
  