import React from "react";
import { Redirect, Router, Switch } from "react-router-dom";
import historyProvider from "./history";
import TicTacToe from "src/pages/tic-tac-toe";
import RouteComponent from "./route-component";
import Genesis from "src/pages/genesis";


const ApplicationRoutes: React.FC = () => {
    return (
        <Router history={historyProvider}>
            <Switch>
                <RouteComponent path="/tic-tac-toe" component={TicTacToe} />
                <RouteComponent path="/genesis" component={Genesis} />
                <RouteComponent path="*" exact>
                    <Redirect to="/home" exact />
                </RouteComponent>
            </Switch>
        </Router>
    )
}

export default ApplicationRoutes;