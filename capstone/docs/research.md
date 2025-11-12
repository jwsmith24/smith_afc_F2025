# Tech Stack Research

## Frontend 
React will be utilized for the frontend to meet the project requirements.
Additional frontend tooling:
- **Vite** for its developer friendly features such as Hot Module Replacement (HMR) for instant 
  visual feedback on UI changes, an instant development server, and optimized bundling for 
  production code.
- **React Router** for client-side routing
- **Shadcn** provides professional React components that are full compliant with accessibility 
  standards, styled with TailwindCSS, and the developer owns the code to easily modify 
  components if necessary without being fully dependent on an external dependency.
- **TailwindCSS** is a utility-first CSS library that enables rapid prototyping and a standardized
  design across an application and keeps the styling right in the JSX. Additionally, it's highly 
  optimized for production builds, removing all classes from the final bundle that aren't 
  actually used to keep the footprint small.
- **TypeScript** and **Zod** for type checking, runtime validation, and type inference via schemas.

### Color Palette / Typography
A tech-themed industrial color palette was selected for the project with typography that also 
matches the theme of modern industrial innovation.

## Database
A Docker container running a PostgreSQL image will be utilized for the database. It will be 
managed with Flyway migrations on the backend.

## Backend
The backend will be implemented with Spring Boot. 

Key backend tools/components:
- **Gradle** will be used to build the application and manage dependencies.
- **Flyway** migrations will manage and version changes to the database.
- **Lombok** will reduce boilerplate code in entity classes such as getters, setters, and 
  constructors.
- **Spring JPA** provides an API that abstracts over the Hibernate ORM. JPA repository 
  interfaces provide CRUD functionality for entity classes out of the box and can interpret 
  custom queries directly from interface methods.
- **Spring Web** handles the web server and enables us to implement controllers that route 
  requests to the proper business logic.
- **Jakarta Validation** to validate incoming requests, providing an error response immediately 
  in the web layer before it reaches the business logic.
- 


## Protocol
The frontend and backend will communicate via a RESTful API over HTTP. See [the API docs](documentation.md) 

## Security
Secrets such as database credentials will be protected using environment variables to keep 
hardcoded sensitive data out of the application. A CORS policy will be implemented on the 
backend to only allow requests from the frontend application.

## Image Storage

TBD

## Citations
- Spring Boot docs
- Gradle docs
- Flyway docs
- Lombok docs
- React docs
- Typescript docs
- zod docs
- shadcn docs
- tailwind css docs
- postgres docs
- docker docs

