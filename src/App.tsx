import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import theme from './themes/theme';
import './config/i18n';

const Home = () => {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
};

const About = () => {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
};

const App = () => (
  <ThemeProvider theme={theme}>
    <Helmet>
      <title>Yassir B2B Webapp</title>
    </Helmet>
    <div>Yassir B2B</div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  </ThemeProvider>
);

export default App;
