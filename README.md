# My First MERN Stack Project

This is a simple CRUD MERN stack project that includes MongoDB, Express.js, React, and Node.js. 

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:
- Node.js (>= v18.18.1)
- MongoDB (Optional)


### Configuration
1. Copy the .env.example file into .env
   ```bash
   cp .env.example .env
   ```
2. Change ```<YourMongoDBConnectionString>``` to your mongodb connection string
   ```bash
   MONGO_URI=<YourMongoDBConnectionString>
   ```

### Installation (For Development)

1. Install the dependencies for app/server:
    ```bash
    npm install
    ```

2. Install the dependencies for client:
    ```bash
    cd ./frontend
    npm install
    ```

### Running the Project (For Development)

1. Start the app/server:
    ```bash
    cd ./backend
    npm run dev
    ```
2. Start the client
    ```bash
    cd ./frontend
    npm run dev
    ```

### Deployment (For Production)

1. Build the app & client:
    ```bash
    npm run build
    ```
2. Start the app in production mode:
    ```bash
    npm start
    ```

### Project Structure

```
MyFirstMERNStackProject/
├── frontend/         # React frontend
├── backend/         # Express backend
├── README.md       # Project documentation
└── package.json    # Project metadata and dependencies
```

### Features

- CRUD operations
- Responsive design

### License

This project is licensed under the [MIT license](https://opensource.org/licenses/MIT).
