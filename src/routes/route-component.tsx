import React from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import { RootContainer } from "./route-component.styled";

const RouteComponent: React.FC<RouteComponentProps> = ({ component: Component, ...rest }) => {
    return (
        <RootContainer>
            <Route {...rest} render={(props) => <Component {...props} />} />
        </RootContainer>
    );
};

export default RouteComponent;
