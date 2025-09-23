# Project 2 - React Restaurant Refactor

## Steps to run
1) Navigate to the `react_restaurant` directory
2) Run `npm i` to install dependencies
3) Run `npm run dev` to start application locally in the dev server
4) Open in the [browser](http://localhost:5173) on port 5173

## General notes
- Used TypeScript for the whole project, see custom types in the `/types`/ directory.
- Configured Vite to use path aliases - @ is short for whatever the relative path is from the 
  current location to ./src (which can get pretty long sometimes)
- Shadcn base components are in `/components/ui`, custom reusable components such as the header 
  and footer are under `/components`.
- All the primary screens/views are under the `/view` directory

## Notes on project requirements:
- Used Tailwind CSS and Shadcn instead of Reactstrap for the styling/component libraries to 
  line up with current best practices on the floor.
- Used ReactHookForms with Zod for form validation
  - With free types from Zod type inference
  - HiringData type is defined in `types/HiringDataSchema.tsx`
- Used Tailwind CSS, react-router, and conditional rendering to write my own reusable collapsible 
  navbar component.