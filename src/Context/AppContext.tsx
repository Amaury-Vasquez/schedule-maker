import { createContext } from "react";

import { ContextValues } from "../interfaces";

export const AppContext = createContext<ContextValues>({});