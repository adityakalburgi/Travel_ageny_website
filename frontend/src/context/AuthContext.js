import { createContext, useEffect, useReducer } from 'react'

let parsedUser = null;
try {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    parsedUser = JSON.parse(storedUser);
  }
} catch (e) {
  console.error("Failed to parse user from localStorage", e);
  localStorage.removeItem("user");
}

const initial_state = {
  user: parsedUser,
  loading: false,
  error: null
};

export const AuthContext = createContext(initial_state);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return { user: null, loading: true, error: null };
    case 'LOGIN_SUCCESS':
      return { user: action.payload, loading: false, error: null };
    case 'LOGIN_FAILURE':
      return { user: null, loading: false, error: action.payload };
    case 'REGISTER_SUCCESS':
    case 'LOGOUT':
      return { user: null, loading: false, error: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initial_state);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider value={{
      user: state.user,
      loading: state.loading,
      error: state.error,
      dispatch,
    }}>
      {children}
    </AuthContext.Provider>
  );
};
