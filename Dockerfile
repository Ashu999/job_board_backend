# FROM node:16

# # Set the working directory
# WORKDIR /usr/src/app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .
# COPY .env.example .env

# RUN npm run db:sync

# # Expose the application port
# EXPOSE 3000

# # Command to build, run the application
# CMD ["npm", "run", "dev"]