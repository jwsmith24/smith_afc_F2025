# Brightforge Docs

Welcome to Brightforge, a modern inventory management service built for Widgets.

## Running the Application

There are two methods of starting Brightforge:

### Automated Start 

This is the preferred method to bypass all the steps to run the application on your local 
      system.
- Navigate to the project root and run `./start.sh`.
- Go to [localhost:5173](http://localhost:5173) with your web browser and start using the 
        application!

### Manual Start

Use this method if there are any issues with running the automated script, or if you 
      prefer to explicitly run each command.
- Navigate to the project root in your file system.
- Navigate to the capstone_backend directory.
- Run `docker compose up -d` to start the Postgres docker container in the background.
- After the database has started, run `./gradlew bR` to start up the Spring Boot application.
- After the backend has started, navigate back to the root directory of the project and run 
        `yarn install` to download the required dependencies and then `yarn dev` to start the 
        development server.
- Open your preferred web browser and go to [localhost:5173](http://localhost:5173) (or 
        click this link) to begin using Brightforge.
    

## API Documentation

The Brightforge API supports CRUD operations for widgets, their variants, and their ratings. It 
also supports image upload and retrieval. 

Base URL: http://localhost:8080/api/v1

### Widget Endpoints

- GET `/widgets`
  - Returns a collection of all widgets in the inventory
- GET `/widgets/{id}`
  - Returns a single widget if found
  - Returns an error response if not found 
- POST `/widgets`
  - Create and save a new widget
  - Requires a request body in the shape:
  - ```json
    {
    "name": "<string>",
    "description": "<string>",
    "baseColor": "<string: valid hex code>",
    "initialQuantity": "<number: integer>"
    }
    ```
  - Returns the new widget or an error response describing the validation errors.
- DELETE `/widget/{id}`
  - Deletes a widget
  - Returns a message that indicates success or failure

### Rating Endpoints

- GET `/widgets/{widgetId}/ratings`
  - Returns a collection of ratings for a target widget
- POST `/widgets/{widgetId}/ratings`
  - Create a save a new rating for a widget
  - Requires a request body in the shape:
    - ```json
      {
      "score" : "<number: integer>",
      "comment": "<string>"
      }
      ```
  - Returns the new rating or an error message with the validation issues.
- PATCH `/widgets/{widgetId}/ratings/{ratingId}`
  - Update an existing rating
  - Requires a request body in the shape:
    - ```json
      {
      "score" : "<number: integer>",
      "comment": "<string>"
      }
      ```
  - Returns the updated rating or an error message with the validation issues.
- DELETE `/widgets/{widgetId}/ratings/{ratingId}`
  - Deletes an existing rating
  - Returns a message with the status of the operation

### Variant Endpoints

- GET `/widgets/{widgetId}/variants`
    - Returns a collection of variants for a target widget
- POST `/widgets/{widgetId}/variants`
    - Create a save a new variant for a widget
    - Requires a request body in the shape:
      ```json
      {
      "color" : "<string: valid hex code>",
      "size": "<string: Large | Medium | Small>",
      "quantity": "<number: integer >= 0 >"
      }
      ```
    - Returns the new variant or an error message with the validation issues.
  
- PATCH `/widgets/{widgetId}/variants/{variantId}`
    - Update an existing variant
    - Requires a request body in the shape:
    - ```json
      {
      "color" : "<string: valid hex code>",
      "size": "<string: Large | Medium | Small>",
      "quantity": "<number: integer >= 0 >"
      }
      ```
    - Returns the updated variant or an error message with the validation issues.
- DELETE `/widgets/{widgetId}/variant/{variantId}`
    - Deletes an existing variant
    - Returns a message with the status of the operation

### Media Endpoints

Handles image upload and retrieval.
Base URL: `/http://localhost:8080/api/images`

- POST `/upload`
  - Requires sending a valid image file via multipart form data.
  - Returns 200 with a message on success
  - Returns 500 if there is an issue saving the image

- GET `/{fileName}`
  - Fetches a target image by its file name.
  - Returns 200 with the image if it exists
  - Returns 404 if the file name is not found
  - Returns 400 if there are validation issues

- GET `?widgetId={widgetId}`
  - Fetch a collection of all media for a given widget
  - Returns 200 with the media