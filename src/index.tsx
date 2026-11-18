import React from "react";
import {createRoot} from "react-dom/client";

import App from "./App";

const APP = (
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

const root = document.getElementById("root");

if (!root) throw new Error("Elemento raiz não encontrado.");

createRoot(root).render(APP);
