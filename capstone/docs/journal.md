- CORS config to allow the frontend on 5173 to talk to the backend on 8080
- Added toasts with `sonner`
- Created form validation schema with zod and used type inference to reuse the shape across the app
- Created DTOs for all create and update requests and entities for responses when applicable 
  with validation
- - notes on how separating request dtos from domain models helped keep things clean when 
    changing the shape of the create widget request
-- custom swatch to match active variant color utilizing tailwind and dynamic inline styles

--------------------------------------------------------------------------------------------

- implement APIs on the frontend (CRUD for widgets, ratings, and variants)
- leverage a custom hook to facilitate error handling, loading state, and refetching logic
- Create an error response dto to standardize error responses
  - add rest controller advice to globally process exceptions and send the standardized response
