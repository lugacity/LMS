import { initialState, reducer } from "@/reducers/reducer";
import { useProfile } from "@/services/queries";
import { createContext, useReducer } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [userDetails, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ userDetails, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
