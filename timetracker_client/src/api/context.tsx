import { createContext, useContext } from "react";
import api from "../api";
import { Children } from "../typings";

const APIContext = createContext<typeof api>(api);

export function APIProvider({ children }: { children: Children }): JSX.Element {
  return <APIContext.Provider value={api}> {children} </APIContext.Provider>;
}

export function useAPI(): typeof api {
  return useContext(APIContext);
}
