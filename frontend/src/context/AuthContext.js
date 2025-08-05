import { createContext, useEffect, useReducer } from "react";
import { auth } from "../firebase"; // Import from your firebase.js file
import { onAuthStateChanged, signOut as firebaseSignOut } from "firebase/auth";

const initialState = {
  user: null,
  loading: true, // Set loading to true initially
  error: null,
};

export const AuthContext = createContext(initialState);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    // Listen for changes in Firebase auth state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        dispatch({ type: "LOGIN_SUCCESS", payload: user });
      } else {
        // User is signed out
        dispatch({ type: "LOGOUT" });
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);


  const logout = () => {
    firebaseSignOut(auth).then(() => {
        dispatch({ type: 'LOGOUT' });
    }).catch((err) => {
        // You can handle logout errors here if needed
        console.error("Logout Error:", err);
    });
  };


  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        logout, // Provide the logout function
        dispatch, // You can keep dispatch if other parts of your app use it
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};