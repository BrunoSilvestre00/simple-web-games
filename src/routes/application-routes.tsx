import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Genesis from "src/pages/genesis";
import Hangman from "src/pages/hangman";
import Home from "src/pages/home";
import MineSweeper from "src/pages/minesweeper";
import TicTacToe from "src/pages/tic-tac-toe";
import historyProvider from "./history";
import RouteComponent from "./route-component";


const ApplicationRoutes: React.FC = () => {
    return (
        <BrowserRouter history={historyProvider}>
            <Switch>
                <RouteComponent path="/" component={Home} exact />
                <RouteComponent path="/genesis" component={Genesis} />
                <RouteComponent path="/hangman" component={Hangman} />
                <RouteComponent path="/minesweeper" component={MineSweeper} />
                <RouteComponent path="/tic-tac-toe" component={TicTacToe} />
                {/* <RouteComponent path="*" exact>
                    <Redirect to="/" exact />
                </RouteComponent> */}
            </Switch>
        </BrowserRouter>
    )
}

export default ApplicationRoutes;
