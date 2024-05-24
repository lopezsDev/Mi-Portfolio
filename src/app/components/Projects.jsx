"use client";
import React, { useState, useEffect } from "react";
import { getRepositories } from "../utils/gitConnection";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
        getRepositories(token)
            .then((data) => {
                
                const repositoriosAMostrar = [
                    { nombre: "BabyCareClinic", imagen: "/babycareclinic.jpg" },
                    { nombre: "QuickBite", imagen: "/quickbite.jpg" },
                    { nombre: "Chat-ClientServer", imagen: "/chat-client.jpg" },
                    { nombre: "Pharmacy", imagen: "/healthPharmacy.jpg" },
                    { nombre: "TicoTacoSur", imagen: "/TicoTaco.jpg" },
                    { nombre: "CarAgency", imagen: "/caragency.jpg" },
                ];
                const reposToShow = data.filter((repo) =>
                    repositoriosAMostrar.some(
                        (repoAMostrar) => repoAMostrar.nombre === repo.name
                    )
                );
                setRepositories(
                    reposToShow.map((repo) => {
                        const repoAMostrar = repositoriosAMostrar.find(
                            (r) => r.nombre === repo.name
                        );
                        return {
                            ...repo,
                            imagenUrl: `/projects/${repoAMostrar.imagen}`,
                        };
                    })
                );
            })
            .catch((error) => {
                console.error("Error al obtener los repositorios:", error);
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
                            imgUrl={repo.imagenUrl}
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