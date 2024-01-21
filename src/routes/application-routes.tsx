import React from "react";
import { Redirect, BrowserRouter, Switch } from "react-router-dom";
import historyProvider from "./history";
import TicTacToe from "src/pages/tic-tac-toe";
import RouteComponent from "./route-component";
import Genesis from "src/pages/genesis";
import Hangman from "src/pages/hangman";
import Home from "src/pages/home";


const ApplicationRoutes: React.FC = () => {
    return (
        <BrowserRouter history={historyProvider}>
            <Switch>
                <RouteComponent path="/" component={Home} exact />
                <RouteComponent path="/tic-tac-toe" component={TicTacToe} />
                <RouteComponent path="/genesis" component={Genesis} />
                <RouteComponent path="/hangman" component={Hangman} />
                {/* <RouteComponent path="*" exact>
                    <Redirect to="/" exact />
                </RouteComponent> */}
            </Switch>
        </BrowserRouter>
    )
}

export default ApplicationRoutes;
