
import React from 'react';
import ReactDOM from 'react-dom/client'; // Make sure the 'DOM' is uppercase
import App from './App.jsx';
import './index.css';
import { AuthProvider }  from "./context/AuthProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import {SocketProvider} from "./context/SocketContext.jsx"


ReactDOM.createRoot(document.getElementById("root")).render(

  <BrowserRouter>
  <AuthProvider>
    <SocketProvider>
    <App /> 
    </SocketProvider>
  </AuthProvider>
  </BrowserRouter>
  
);

