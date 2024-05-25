import React from "react";
import Image from "next/image";

const ProjectCard = ({ title, description, imgUrl, gitUrl, previewUrl }) => {
    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden">
            <Image
                src={imgUrl}
                alt={title}
                width={500}
                height={300}
                className="w-full h-60 object-cover"
            />
            <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-400 mb-4">{description}</p>
                <div className="flex justify-between">
                    <a
                        href={gitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700"
                    >
                        View Code
                    </a>
                    {previewUrl && (
                        <a
                            href={previewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700"
                        >
                            Live Preview
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;