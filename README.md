# 🎬 Film Library - Full Stack Application

A full-stack movie rental application that allows users to search, filter, sort, and browse movies by genre, rating, title, author, and language.

## 📁 Project Structure

```
FilmLibrary/
│
├── frontend/      # React.js frontend
├── backend/       # Spring Boot backend
└── README.md      # Project documentation
```

---

## 🚀 Technologies Used

### 🖥️ Frontend
- **React.js**
- **CSS Modules**
- Fetch API for backend communication

### ⚙️ Backend
- **Java Spring Boot**
- **Spring Data JPA**
- **PostgreSQL** (relational database)
- Custom repository queries for filtering/sorting

---

## 🧪 Features

- 🔍 Search movies by title, author, genre
- 🎭 Filter by genre via dropdown
- ⭐ Filter by rating (with slider)
- 🔃 Sort movies by title, rating, or genre
- 🗂️ Movie data is dynamically fetched from PostgreSQL via backend

---

## ⚙️ How to Run the Project

### 📦 Backend (Spring Boot)

1. Make sure PostgreSQL is installed and running
2. Update database credentials in `application.properties`
3. Navigate to `/backend` folder
4. Run the app using:

```bash
./mvnw spring-boot:run
```

Backend will be available at:  
`http://localhost:8080`

---

### 🌐 Frontend (React)

1. Navigate to `/frontend` folder
2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm start
```

Frontend will run on:  
`http://localhost:3000`

> Make sure the backend is running to fetch real movie data!

---

## 📚 API Endpoints (examples)

- `GET /movies` – list all movies  
- `GET /movies/title/{title}` – search by title  
- `GET /movies/genre/{genre}` – filter by genre  
- `GET /movies/rating/{value}` – filter by rating  
- `GET /movies/sort/title/asc` – sort by title (A-Z)

---

## 📌 Notes

- Project is split into **modular folders** for frontend and backend.
- All filters and sorters are dynamically connected to backend responses.
- This project was made as part of a learning journey into full-stack development.


---

## 🤝 Author

👩‍💻 Tamara Sarajlija  
Feel free to reach out or contribute!
