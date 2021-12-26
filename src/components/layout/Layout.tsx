import { Navigation } from ".";
import React from "react";

export const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Navigation />
            <main>{children}</main>
        </>
    );
};
