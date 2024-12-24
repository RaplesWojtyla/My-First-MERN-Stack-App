# My First MERN Stack Project

This is a MERN stack project that includes MongoDB, Express.js, React, and Node.js.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:
- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository using HTTPS:
    ```bash
    git clone https://github.com/RaplesWojtyla/My-First-MERN-Stack-App.git
    ```
2. Navigate to the project directory:
    ```bash
    cd path/to-the/destination/directory
    ```
3. Install the dependencies for both the server and client:
    ```bash
    npm install
    ```

### Configuration
1. Copy the .env.example file into .env
   ```bash
   cp .env.example .env
   ```
2. Change ```<YourMongoDBConnectionString>``` to your mongodb connection string
   ```bash
   MONGO_URI=<YourMongoDBConnectionString>
   ```
### Running the Project

1. Start the app:
    ```bash
    npm run dev
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
