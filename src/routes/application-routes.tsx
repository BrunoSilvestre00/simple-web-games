import React from "react";
import { Redirect, Router, Switch } from "react-router-dom";
import historyProvider from "./history";
import TicTacToe from "src/pages/tic-tac-toe";
import RouteComponent from "./route-component";
import Genesis from "src/pages/genesis";
import Hangman from "src/pages/hangman";
import { Dueto, Quarteto, Termo } from "src/pages/termo";


const ApplicationRoutes: React.FC = () => {
    return (
        <Router history={historyProvider}>
            <Switch>
                <RouteComponent path="/tic-tac-toe" component={TicTacToe} />
                <RouteComponent path="/genesis" component={Genesis} />
                <RouteComponent path="/hangman" component={Hangman} />
                <RouteComponent path="/termo/solo" component={Termo} />
                <RouteComponent path="/termo/dueto" component={Dueto} />
                <RouteComponent path="/termo/quarteto" component={Quarteto} />
                <RouteComponent path="/termo" exact>
                    <Redirect to="/termo/solo" exact />
                </RouteComponent>
                <RouteComponent path="*" exact>
                    <Redirect to="/home" exact />
                </RouteComponent>
            </Switch>
        </Router>
    )
}

export default ApplicationRoutes;
