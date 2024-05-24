"use client";

import React, { useState, useEffect } from "react";
import { getRepositories } from "../utils/gitConnection";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
        getRepositories(token)
            .then(data => {
                setRepositories(data);
            })
            .catch(error => {
                console.error('Error al obtener los repositorios:', error);
            });
    }, []);

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>

            <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
                {repositories.map((repo, index) => (
                    <li key={index}>
                        <ProjectCard
                            key={repo.id}
                            title={repo.name}
                            description={repo.description}
                            imgUrl={repo.owner.avatar_url}
                            gitUrl={repo.html_url}
                            previewUrl={repo.homepage}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;