# Cozio - Airbnb Clone (Under Development)

## Overview

Cozio is an ongoing project that serves as a clone of Airbnb. It is built using a full-stack JavaScript approach, with a Node.js/Express backend and a mix of React, EJS, and Bootstrap on the frontend. The application allows users to create, edit, view, and delete rental listings much like Airbnb. It is currently under active development.

## Features

- **CRUD Operations:** Create, read, update, and delete rental listings.
- **Dynamic Views:** Server-side rendering using EJS templates.
- **Responsive Design:** Built with Bootstrap for a modern and responsive UI.
- **Client-Side Functionality:** Some components are built in React.
- **Robust Error Handling:** Custom error handling middleware and asynchronous error management.
- **Data Validation:** Using Joi for schema validation.
- **Asynchronous Operations:** Simplified using helper functions like `wrapAsync`.

## Technologies Used

- **Backend:** Node.js, Express
- **Database:** MongoDB, with Mongoose as the ODM (handles schema definitions, relationships, and cardinality)
- **Frontend:**
  - **Templating:** EJS (Embedded JavaScript)
  - **UI Components:** React and Bootstrap
- **Utilities:**
  - **Nodemon:** For live reloading during development
  - **Method-Override:** To support HTTP verbs like PUT and DELETE in HTML forms
  - **Joi:** For request data validation

## Database and Cardinality

The application uses **MongoDB** for data storage, managed via **Mongoose**. Mongoose schemas define the structure of your documents (e.g., listings) and their relationships. For example, each listing may have one-to-many relationships with reviews or bookings, ensuring that data is stored efficiently and relationships (cardinality) are maintained as per the requirements of the application.

## Installation and Setup

### Prerequisites

- **Node.js:** [Download Node.js](https://nodejs.org/)
- **MongoDB:** [Download MongoDB Community Server](https://www.mongodb.com/try/download/community) and ensure it is running locally.

### Cloning the Repository

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/satyamlal/Cozio.git
   cd cozio

   ```

2. **Install Dependencies:**

   ```bash
   npm install

   ```

3. **Running the Project Locally**

   ```bash
   npx nodemon app.js

   ```

4. **After starting the server, open your browser and go to**
   ```bash
   http://localhost:3000
   ```

## **Development Status**

- This project is currently under active development.
- New features are being added and refined regularly.
- As it is a clone of Airbnb, the project aims to mimic the core functionality of Airbnb's listing and booking system.

## Contributing

- Contributions are welcome! If you have suggestions or improvements, please fork this repository and submit a pull request.
- For major changes, please open an issue first to discuss what you would like to change.
