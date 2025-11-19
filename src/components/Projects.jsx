"use client"
import React, { useEffect } from "react";
import recipeImg from '../assets/Recipes.png';
import booksImg from '../assets/Books.png';
import searchImg from '../assets/Search.png';
import todoImg from '../assets/TodoList.png';
import monthlyApp from '../assets/MonthlyFinance.png';
import AOS from "aos";
import "aos/dist/aos.css";
import '../index.css';


const projectsList = [
  {
    id: 1,
    title: "Recipe App",
    description: "Search for any food, the recipes will show. You can add it to the favorites. I used useContext hook to get the list of the recipes.",
    link: "https://malihat.github.io/recipes-app/",
    img: recipeImg
  },
  {
    id: 2,
    title: "Books",
    description: "Create a book and it will be added to the list, the book can be edited and deleted. Json server is used to save the books.",
    link: "https://github.com/yourusername/ecommerce-app",
    img: booksImg
  },
  {
    id: 3,
    title: "Search Photos",
    description: "A simple search for images of anything. Its a simple Reactjs.",
    link: "https://malihat.github.io/search-images/",
    img: searchImg
  },
  {
    id: 4,
    title: "Todo App",
    description: "A simple todo app lets you create, edit and delete. Its made with Reactjs and Tailwind.",
    link: "https://malihat.github.io/search-images/",
    img: todoImg
  },
  {
    id: 5,
    title: "Monthly Finance Tracker",
    description: "An app that lets you track you expenses. After the form is filled and submitted, the values are added to the table and displayed on the pi chart.",
    link: "https://monthly-finance-client.vercel.app/",
    img: monthlyApp
  }
];


const projects = [
  {
    id: 1,
    title: 'Project Alpha',
    description: 'This is a description for Project Alpha.',
  },
  {
    id: 2,
    title: 'Project Beta',
    description: 'Details about Project Beta go here.',
  },
  {
    id: 3,
    title: 'Project Gamma',
    description: 'Project Gamma is a fascinating project.',
  },
];


import { useState } from 'react';

// Modal Component
// function Modal({ isOpen, onClose, children }) {
//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div
//         className="modal-content"
//         onClick={(e) => e.stopPropagation()} 
//       >
//         <button className="modal-close" onClick={onClose}>×</button>
//         {children}
//       </div>
//     </div>
//   );
// }

// Main Component
export default function Projects() {
    useEffect(() => {
      AOS.init({ duration: 1000, once: false });
  }, []);
  const [activeProject, setActiveProject] = useState(null);

  // const openModal = (project) => {
  //   setActiveProject(project);
  // };

  // const closeModal = () => {
  //   setActiveProject(null);
  // };

  return (
    // onClick={() => openModal(project)}
  <div className="mx-auto px-6 pt-10 sm:px-6 lg:px-8">
      {/* <section> */}
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-white mb-12" data-aos="zoom-in">
      Projects
    </h2>

    <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projectsList.map((project) => (
        <div
          key={project.id}
          className="bg-whiterounded-2xl shadow-md hover:shadow-xl rounded border border-gray-500 transition duration-300 p-4 flex flex-col justify-between"
          data-aos="zoom-in"
        >
          <div>
            <div className="w-full h-70 mb-4 overflow-hidden rounded-lg">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <h3 className="text-xl font-semibold font-md text-white mb-2">
              {project.title}
            </h3>

            <p className="text-white text-sm mb-6">
              {project.description}
            </p>
          </div>

          <div className="flex justify-between items-center mt-auto">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer border border-[#f7b449] bg-[#f7b449] text-black font-semibold px-4 py-1 rounded-md text-sm hover:border-[#f7b449] hover:text-white hover:bg-transparent transition"
            >
              GitHub
            </a>

            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer border border-[#f7b449] text-white font-semibold px-3 py-1 rounded-md text-sm hover:text-black hover:bg-[#f7b449] transition"
            >
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  );
}
