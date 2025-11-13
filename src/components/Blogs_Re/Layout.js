import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../Navbar";
import "./style.css";
import HomeFooter from "../HomeFooter/HomeFooter";


const Bloglayout = ({ children, title, description }) => {
    return (
        <div className="layout">
            {/* Meta Info */}
            <Helmet>
                <title>{title || "DLUX"}</title>
                <meta
                    name="description"
                    content={description || "Explore insightful blogs from DLUX."}
                />
            </Helmet>

            {/* Navbar */}
            <header className="layout__header">
                <Navbar />
            </header>

            {/* Main Content */}
            <main className="layout__content">
                {children}
            </main>

            {/* Footer */}
            <footer className="layout__footer">
                <HomeFooter />
            </footer>
        </div>
    );
};

export default Bloglayout;
