<div align="center">

<img src="https://github.com/user-attachments/assets/271ad7ce-fe46-452c-8515-b36044185630" alt="Hello-GPT banner" width="100%" />

# 👋 Hello-GPT

A full-stack conversational AI app — **React (Vite)** frontend + **Express/MongoDB** backend — powered directly by the **Google Gemini API**.

[![React](https://img.shields.io/badge/Frontend-React%2019-61DAFB?style=flat&logo=react&logoColor=black)](#)
[![Vite](https://img.shields.io/badge/Bundler-Vite-646CFF?style=flat&logo=vite&logoColor=white)](#)
[![Node.js](https://img.shields.io/badge/Backend-Express-339933?style=flat&logo=node.js&logoColor=white)](#)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)](#)
[![Powered by Gemini](https://img.shields.io/badge/Powered%20by-Gemini-4285F4?style=flat&logo=google&logoColor=white)](#)


</div>

---

## 📖 About

**Hello-GPT** is a full-stack chat application. The **React + Vite** frontend gives users a clean chat UI with markdown rendering and syntax-highlighted code blocks, while the **Express + MongoDB** backend calls Google Gemini (`gemini-3.6-flash`) directly via its `generateContent` REST endpoint and persists chat history.

## ✨ Features

- 💬 Real-time chat UI built with React 19 + Vite
- 🗂️ Sidebar for managing multiple chat threads
- 🧠 Global state management via React Context (`MyContext.jsx`)
- 📝 Markdown rendering in AI responses (`react-markdown`)
- 🎨 Syntax-highlighted code blocks (`rehype-highlight`)
- ⏳ Loading indicators while waiting for AI responses (`react-spinners`)
- 🆔 Unique chat/session IDs via `uuid`
- 💅 Styled with Bootstrap 5
- 🗄️ Chat threads persisted in MongoDB via Mongoose (`Thread` model)
- 🌐 CORS-enabled API with graceful error handling
- 🔑 Environment-based config to keep the API key safe

## 🛠️ Tech Stack

**Frontend**

| Category      | Technology                        |
|---------------|------------------------------------|
| Library       | React 19                          |
| Build Tool    | Vite 7                            |
| Styling       | Bootstrap 5                       |
| Markdown      | react-markdown + rehype-highlight |
| UX            | react-spinners                    |
| Utilities     | uuid                               |
| Linting       | ESLint 9                          |

**Backend**

| Category      | Technology                                             |
|---------------|----------------------------------------------------------|
| Runtime       | Node.js                                                 |
| Framework     | Express 5                                               |
| Database      | MongoDB + Mongoose                                       |
| AI            | Google Gemini API (`generateContent`, model: `gemini-3.6-flash`) |
| Middleware    | CORS, dotenv                                            |
| Dev Tooling   | Nodemon                                                 |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- A **MongoDB** connection string (local or Atlas)
- A **Gemini API key** — get one from [Google AI Studio](https://aistudio.google.com/app/apikey)

### Installation

```bash
# Clone the repository
git clone https://github.com/keshav2540/Hello-GPT.git
cd Hello-GPT

# Install backend dependencies
cd Backend
npm install

# Install frontend dependencies
cd ../Frontend
npm install
```

### Configuration

Create a `.env` file inside the `Backend/` folder:

```env
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
```

### Run the project

```bash
# Start the backend (from /Backend)
node server.js

# Start the frontend (from /Frontend)
npm run dev
```

The frontend will be available at `http://localhost:5173` and will talk to the backend API.

## 📂 Project Structure

```
gpt/
├── Backend/
│   ├── models/
│   │   └── Thread.js        # Mongoose schema for chat threads
│   ├── routes/
│   │   └── chat.js          # Chat API route
│   ├── utils/
│   │   └── openai.js        # Calls Gemini's generateContent endpoint
│   ├── .env                 # Environment variables (not committed)
│   ├── package.json
│   └── server.js            # Express app entry point
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── App.jsx / App.css
│   │   ├── Chat.jsx / Chat.css
│   │   ├── ChatWindow.jsx / ChatWindow.css
│   │   ├── Sidebar.jsx / Sidebar.css
│   │   ├── MyContext.jsx    # React Context for shared state
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
└── README.md
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/keshav2540/Hello-GPT/issues).


## 👤 Author

**Keshav**
GitHub: [@keshav2540](https://github.com/keshav2540)

---

<div align="center">
Made with ❤️, React, Express, MongoDB and Gemini
</div>
