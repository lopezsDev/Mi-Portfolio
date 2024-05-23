"use client";

import React, { useState, useEffect, useRef } from "react";
import { getRepositories } from "../utils/github";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const [repositories, setRepositories] = useState([]);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        const token = process.env.GITHUB_TOKEN;
        getRepositories(token)
            .then(data => {
                setRepositories(data);
            })
            .catch(error => {
                console.error('Error al obtener los repositorios:', error);
            });
    }, []);

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = repositories.filter((project) =>
        project.topics.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>

            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Mobile"
                    isSelected={tag === "Mobile"}
                />
            </div>

            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.name}
                            description={project.description}
                            imgUrl={project.owner.avatar_url}
                            gitUrl={project.html_url}
                            previewUrl={project.homepage}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;

