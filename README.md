 LiveAvailable at your primary URL
 https://library-management-d7co.onrender.com
# 📚 Library Management System (JSON Based)
A simple **Library Management System** built using **Node.js** and **Express.js**.  
This project uses **JSON files** as the data source instead of a database, making it beginner-friendly and easy to understand.

## 🚀 Features
- 📖 Manage books (Add, Update, Delete, View)
- 👤 Manage users using JSON data
- 🔄 CRUD operations using REST APIs
- 📂 Data stored in local JSON files
- ⚡ Lightweight & beginner-friendly project

## 🧱 Tech Stack
- **Backend:** Node.js
- **Framework:** Express.js
- **Data Storage:** JSON files
- **Language:** JavaScript
- **Tools:** npm, Postman

--> 📚 Books
Method	Endpoint	Description
GET	/books	Get all books
GET	/books/:id	Get book by ID
POST	/books	Add new book
PUT	/books/:id	Update book
DELETE	/books/:id	Delete book
-->👤 Users
Method	Endpoint	Description
GET	/users	Get all users
GET /users/:id
POST	/users	Add new user
PUT /users/:id
DELETE /users/:id


## 📁 Project Structure
Library-management/
│
├── data/
│ ├── book.json
│ └── user.json
│
├── routers/
│ ├── books.js
│ └── users.js
│
├── index.js
├── package.json
└── README.md


## ⚙️ Installation & Setup

1️⃣ **Clone the repository**
```bash
git clone https://github.com/vijaykr2004/Library-management.git
## commands for run the project
cd Library-management
npm install
npm run dev


📚 Books
Method	Endpoint	Description
GET	/books	Get all books
GET	/books/:id	Get book by ID
POST	/books	Add new book
PUT	/books/:id	Update book
DELETE	/books/:id	Delete book
👤 Users
Method	Endpoint	Description
GET	/users	Get all users
POST	/users	Add new user



