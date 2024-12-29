
## Movie API Documentation

### Base URL:
`http://localhost:2000/api`

### Routes:

---

### 1. **Get All Movies**

**Endpoint**: `GET /movies`

**Description**: Fetches all the movies in the database.

**Response**:

- **Status**: `200 OK`
- **Body**:
  ```json
  [
    {
      "_id": "movie_id",
      "title": "Movie Title",
      "rating": 8.7,
      "releaseDate": "2024-12-30"
    },
    ...
  ]
  ```

---

### 2. **Search Movies**

**Endpoint**: `GET /search`

**Description**: Search for movies based on query parameters.

**Query Parameters**:
- `title` (optional): Search for movies by title.
- `rating` (optional): Filter movies by rating.

**Example Request**:
```http
GET /search?title=action&rating=8
```

**Response**:

- **Status**: `200 OK`
- **Body**:
  ```json
  [
    {
      "_id": "movie_id",
      "title": "Action Movie",
      "rating": 8.5,
      "releaseDate": "2024-12-01"
    },
    ...
  ]
  ```

---

### 3. **Add a Movie**

**Endpoint**: `POST /movies`

**Description**: Adds a new movie to the database. This route requires admin authorization.

**Request Body**:
- `title` (string): The title of the movie.
- `rating` (float): The rating of the movie.
- `releaseDate` (string, date format): The release date of the movie.

**Example Request**:
```json
{
  "title": "New Movie",
  "rating": 8.5,
  "releaseDate": "2024-12-30"
}
```

**Response**:

- **Status**: `201 Created`
- **Body**:
  ```json
  {
    "_id": "movie_id",
    "title": "New Movie",
    "rating": 8.5,
    "releaseDate": "2024-12-30"
  }
  ```

**Headers**:
- **Authorization**: `Bearer <your-predefined-admin-key>`

---

### 4. **Update a Movie**

**Endpoint**: `PUT /movies/:id`

**Description**: Updates an existing movie's details. This route requires admin authorization.

**URL Parameters**:
- `id`: The ID of the movie to update.

**Request Body**:
- The fields to update (e.g., `title`, `rating`, `releaseDate`).

**Example Request**:
```json
{
  "title": "Updated Movie Title",
  "rating": 9.0
}
```

**Response**:

- **Status**: `200 OK`
- **Body**:
  ```json
  {
    "_id": "movie_id",
    "title": "Updated Movie Title",
    "rating": 9.0,
    "releaseDate": "2024-12-30"
  }
  ```

**Headers**:
- **Authorization**: `Bearer <your-predefined-admin-key>`

---

### 5. **Delete a Movie**

**Endpoint**: `DELETE /movies/:id`

**Description**: Deletes an existing movie from the database. This route requires admin authorization.

**URL Parameters**:
- `id`: The ID of the movie to delete.

**Response**:

- **Status**: `200 OK`
- **Body**:
  ```json
  {
    "message": "Movie deleted successfully"
  }
  ```

**Headers**:
- **Authorization**: `Bearer <your-predefined-admin-key>`

---

-- For admin route pass the Same key in  bearer token - authentication

