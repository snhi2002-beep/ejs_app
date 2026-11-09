# Express.js App with EJS

A clean, modern starter template for building web applications with **Express.js** and **EJS** (Embedded JavaScript templates).

## Project Structure

```
├── app.js               # Application entry point & route definitions
├── package.json         # Node.js project manifest & scripts
├── public/              # Static files served by Express
│   ├── css/
│   │   └── style.css    # Responsive styles
│   └── js/
│       └── main.js      # Client-side JavaScript
└── views/               # EJS template files
    ├── 404.ejs          # 404 Not Found page
    ├── about.ejs        # About page template
    ├── index.ejs        # Homepage template
    └── partials/        # Reusable template components
        ├── footer.ejs
        ├── header.ejs
        └── navbar.ejs
```

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Server
- **Production mode:**
  ```bash
  npm start
  ```
- **Development mode (with auto-reload on file change):**
  ```bash
  npm run dev
  ```

### 3. Open in Browser
Visit [http://localhost:3000](http://localhost:3000) in your web browser.
