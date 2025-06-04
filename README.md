# Simple Webapp

This project contains a minimal Node.js server that serves a static page with an interactive form. The form accepts an email ending with `@infracommerce.lat`, fetches JSON data from a remote endpoint, and displays the results in a table.

## How to run

1. Ensure you have Node.js installed.
2. Start the server:
   ```bash
   node index.js
   ```
3. Open `http://localhost:3000` in your browser.

## Project Structure
- `index.js` – simple HTTP server
- `public/index.html` – form and result display
- `public/style.css` – styles inspired by the Infracommerce website
- `public/main.js` – client-side validation and fetch logic

