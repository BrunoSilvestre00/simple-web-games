import React from "react";
import { BodyPart, ManContainer } from "./index.styled";

interface ManProps {
    errors: number;
}
const Man: React.FC<ManProps> = ({ errors }) => {
    return (
        <ManContainer>
            <BodyPart show={errors >= 1} className="head" />
            <BodyPart show={errors >= 2} className="body" />
            <BodyPart show={errors >= 3} className="left-arm" />
            <BodyPart show={errors >= 4} className="right-arm" />
            <BodyPart show={errors >= 5} className="left-leg" />
            <BodyPart show={errors >= 6} className="right-leg" />
        </ManContainer>
    );
};

export default Man;
    