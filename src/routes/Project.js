import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroImage2 from "../components/Hero/HeroImage2";
import PricingCard from "../components/Pricing/PricingCard";
import ProjectCard from "../components/Project/ProjectCard";
import Work from "../components/Project/Work";

const Project = () => {
    return (
        <div>
            <Navbar />
            <HeroImage2 heading="PROJECTS." text="Some of my most recent works" />
            <Work />
            <PricingCard />
            <Footer />
        </div>
    )
}

export default Project;