import { createContext, useReducer } from "react";
const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

const AuthContext = createContext();
const initialValue = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  if (action.type === "login") {
    return {
      ...state,
      user: action.payload,
      isAuthenticated: true,
    };
  }
  if (action.type === "logout") {
    return {
      ...state,
      user: null,
      isAuthenticated: false,
    };
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialValue
  );

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
    }
  }
  function logout() {
    dispatch({ type: "logout" });
  }

  const valueToShare = {
    user,
    isAuthenticated,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={valueToShare}>{children}</AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
