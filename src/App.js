// Import necessary dependencies from React and React Router
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import layout component
import MainLayout from './layouts/MainLayout';

// Import page components
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Hero from './pages/Hero';

// Import theme components
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

// Import global styles
import './App.css';

// Main App component that sets up routing
function App() {
  return (
    // ThemeProvider wraps the entire application
    <ThemeProvider>
      {/* Router component wraps the entire application to enable routing */}
      <Router>
        {/* Theme toggle button */}
        <ThemeToggle />
        
        {/* Routes component defines all available routes in the application */}
        <Routes>
          {/* MainLayout route acts as a parent route with nested child routes */}
          <Route path="/" element={<MainLayout />}>
            {/* Index route - shown when path is exactly "/" */}
            <Route index element={<Home />} />
            
            {/* About page route - shown when path is "/about" */}
            <Route path="about" element={<About />} />
            
            {/* Contact page route - shown when path is "/contact" */}
            <Route path="contact" element={<Contact />} />
            
            {/* Follow page route (using Dashboard component) - shown when path is "/follow" */}
            <Route path="follow" element={<Dashboard />} />

            {/* Hero page route - shown when path is "/hero" */}
            <Route path="hero" element={<Hero />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

// Export the App component as the default export
export default App;
