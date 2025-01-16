```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a simple Next.js application.</p>
    </div>
  );
}
```

```javascript
// pages/api/hello.js

export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}
```