```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ...more routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}
```
This code snippet uses `react-router-dom` v6.  A common mistake is to incorrectly nest `Routes` inside another `Routes` leading to unexpected routing behavior, especially when dealing with nested routes.  The issue can lead to routes not rendering correctly, or rendering incorrectly.