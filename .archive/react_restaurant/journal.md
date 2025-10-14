# Technical Documentation

Configured a Vite + React + Typescript project with Tailwind and React Router, using the 
technical docs from Vite, Tailwind, and React Router to guide the setup. 

Additionally used Tailwind docs to learn more about how to use utility classes like `component` 
and breakpoints for responsive layouts. Used shadcn docs to guide implementation of their form component that 
leverages react-hook-forms and Zod validation (as well as tables and buttons).

# React Basics
Setup routing in main.tsx IAW project requirements. Structured App.tsx to act as a consistent 
layout component, using `Outlet` which is a placeholder for where a active child route will render.

Used `Links` from React Router, builtin breakpoints from Tailwind, and conditional rendering to 
implement my own collapsible navbar component that can be used across the application. Utilizes 
a state hook to track if the hamburger menu should display or hide (on mobile devices)

Passed props from child components that are used to dynamically render content.

Globally applied TailwindCSS classes to target form components in index.css with the `@apply` 
annotation. This drastically cut down on repetitive shadcn component class overrides on form and 
table components.