

# 🌎 Travel Agency Website

Welcome to **Travel Agency** – a full-stack MERN (MongoDB, Express, React, Node.js) travel website built to help users explore and book amazing travel destinations! Whether you're looking for a quick getaway or an adventurous trip, our platform provides options for everyone. 🏖️✈️

---

## 🚀 Project Overview

### 🌐 Live Demo
(https://travelagencyask.netlify.app)

### 📸 Screenshots
![Screenshot 2024-10-30 202428](https://github.com/user-attachments/assets/4b0db7cb-0eac-41b9-bf0a-507c4ec0124f)
![Screenshot 2024-10-30 193814](https://github.com/user-attachments/assets/3a4f18c1-8cae-479c-a033-d31800ec6d2d)


## 🛠️ Tech Stack

This project is built with the **MERN Stack**:

- **MongoDB** - Database
- **Express.js** - Backend framework
- **React.js** - Frontend library
- **Node.js** - Runtime environment

---

## 📂 Project Structure

```
travel-agency/
├── backend/                 # Express server and database setup
├── frontend/                # React front-end code
├── public/                  # Static assets
├── src/                     # Main source files for React components
├── .gitignore               # Files and directories to be ignored by Git
├── README.md                # Project documentation
├── package-lock.json        # Dependency lock file
└── package.json             # Project metadata and scripts
```

## 🎉 Features

- **Discover Destinations**: Explore beautiful destinations with detailed information 🌍.
- **Book Trips**: Book your travels with secure and seamless reservations 📅.
- **User Authentication**: Sign up and log in securely using JWT 🔒.
- **Personalized Packages**: Receive travel package recommendations tailored to your interests ✈️.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/try/download/community) installed on your system.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/adityakalburgi/Travelagency_travel_website.git
   cd Travelagency_travel_website
   ```

2. **Install backend dependencies**:

   ```bash
   cd backend
   npm install
   ```

3. **Configure environment variables**: In the `backend` folder, create a `.env` file and add:

   ```plaintext
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret

   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_password
   JWT_RESET_SECRET=your_jwt_reset_secret

   FRONTEND_URL=http://localhost:3000
   ```

4. **Install frontend dependencies**:

   ```bash
   cd ../frontend
   npm install
   ```

5. **Run the application**:

   - **Backend**: From the `backend` directory:
     ```bash
     npm start
     ```
   - **Frontend**: From the `frontend` directory:
     ```bash
     npm start
     ```

6. **View the app**: Go to [http://localhost:3000](http://localhost:3000) in your browser.

---

## 👥 Contributing

We welcome new contributions! Here’s how to get started:

1. **Fork the repository**.
2. **Create a branch** for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. **Commit your changes**:
   ```bash
   git commit -m "Add feature"
   ```
4. **Push to your branch**:
   ```bash
   git push origin feature-name
   ```
5. **Submit a pull request** for review.

---

## 💡 Future Enhancements

- **Enhanced Destination Search** 🔍
- **User Reviews & Ratings** ⭐
- **Push Notifications for Deals** 📲
- **Multi-Language Support** 🌐



---

Happy coding, and we’re excited to see your contributions to the Travel Agency project! 🌍✨
