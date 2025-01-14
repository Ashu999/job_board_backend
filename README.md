# Job Board Backend


## Local Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ashu999/job_board_backend.git
   cd job_board_backend
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

## Testing APIs

Import Postman collection (also contains input examples): [Postman Collection](./docs/collection_postman_job_board.json)
