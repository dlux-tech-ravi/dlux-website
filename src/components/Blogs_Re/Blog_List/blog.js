import React from "react";
import Hero from "./Sections/Hero";
import Bloglayout from "../Layout";
import LeftRightCards from "./Sections/Services";
import BlogsList from "./Sections/Blogs";
import Subscription from "./Sections/Subscription";
import Newsletter from "./Sections/Newsletter";
import FacesAndStories from "./Sections/FacesAndStories";

function Blogs() {
    return (
        <Bloglayout
            title="Blogs | DLUX"
            description="Explore insightful blogs from DLUX covering latest trends, strategies, and updates."
        >
            <Hero />
            <LeftRightCards />
            <FacesAndStories/>
            <BlogsList />
            <Newsletter />
            <Subscription />

        </Bloglayout>
    );
}

export default Blogs;
