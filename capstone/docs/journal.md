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


-------------------

10/27
Intro to pairing class
Paired with Colby to implement the todo features for day 1: updating the domain model for todo 
across the stack to support a completed status enabling users to toggle and visualize the 
status of a todo using TDD. Practiced the ping pong pairing style where we alternated writing a 
failing test and writing code to make it pass for the backend code and the driver-navigator 
style for the frontend code. Successfully implemented all required functionality and all the 
bonus features.

- Cloned the todo app and completed all work on a feature branch, committing locally after each 
  milestone.

10/28

- Seeded the database with example entries via flyway migration scripts.

- Encountered an issue with JPA/hibernate in the brightforge project where after restarting the 
  server, the seed data being added via flyway migrations did not have the bidirectional relationships 
  fully established in memory.

- I learned that by default, hibernate uses lazy loading to only pull related entities into memory 
  when they're explicitly accessed. This caused a Null Pointer Exception when the frontend 
  requested variants that depended on their associated inventory entries to determine quantity 
  because it hadn't been loaded yet. Went with a simple fix in the DTO to default to 0 if the inventory is 
  initially null, giving hibernate a chance to pull in the inventory data without throwing the 
  NPE. By the time the request resolves on the frontend, the correct counts are displayed.

- Expanded on the simple DTO fix for the lazy loading NPE issue described previously. Discovered 
  the hibernate/JPA concept of `JOIN FETCH`. It's a join with the added bonus of fully hydrating 
  the relevant entities. It's a good hybrid solution between a fully eager fetch (which would 
  load every single variant with its inventory entry into memory) and waiting on the lazy 
  loading to get what we need, by hydrating exactly what we need (for example: get variants by 
  widget id). Add a custom query method in the variant repo leveraging JOIN FETCH and updated the 
  getVariants method in my widget service to use it. Now instead of letting hibernate send 
  multiple queries and manage pulling entities into memory, the app gets exactly what it needs 
  with a single query while also being less coupled (can access variants without needing the 
  entire widget too)