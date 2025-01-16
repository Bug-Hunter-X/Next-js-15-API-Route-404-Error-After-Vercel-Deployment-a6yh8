```javascript
// pages/api/hello.js

// Correct solution using named export 'default'
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}
```