# Project Title

## Running the Application with Docker

To run the application using Docker, follow these steps:

**Build the Docker image for both app and mysql:**
   ```bash
   docker-compose up --build

   app runs on: http://localhost:3000/
   ```

## Local Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Create a `.env` file:**
     ```bash
     cp .env.example .env
     ```

3. **Set up the Docker container for MySQL:**
     ```bash
     docker-compose up --build mysql
     ```

4. **Install dependencies:**
   ```bash
   npm install
   ```

5. **Sync the database:**
   ```bash
   npm run db:sync
   ```

6. **Start the application:**
   ```bash
   npm run dev
   ```
