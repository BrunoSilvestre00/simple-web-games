import {HashRouter, Link, Navigate, Outlet, Route, Routes} from "react-router-dom";
import Genesis from "../pages/genesis";
import Hangman from "../pages/hangman";
import Home from "../pages/home";
import MineSweeper from "../pages/minesweeper";
import TicTacToe from "../pages/tic-tac-toe";
import {RootContainer} from "./route-component.styled";

function Layout() {
    return (
        <RootContainer>
            <nav aria-label="Navegação principal">
                <Link to="/">Início</Link>
            </nav>
            <Outlet />
        </RootContainer>
    );
}

export default function ApplicationRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="genesis" element={<Genesis />} />
                    <Route path="hangman" element={<Hangman />} />
                    <Route path="minesweeper" element={<MineSweeper />} />
                    <Route path="tic-tac-toe" element={<TicTacToe />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}
