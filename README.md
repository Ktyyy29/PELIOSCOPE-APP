DeepSeek proxy backend for Render.com

Endpoints:
GET  /            -> health
POST /chat        -> expects JSON { messages: [ { role, content }, ... ] }

Environment variables:
- DEEPSEEK_KEY : your DeepSeek API key

Run locally:
- npm install
- DEEPSEEK_KEY=yourkey npm start
