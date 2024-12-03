// src/pages/arts/test.tsx
import React, { useEffect } from 'react';

const TestPage = () => {
  useEffect(() => {
    // Redirect to static HTML file
    if (typeof window !== 'undefined') {
      window.location.href = '/statistics/001.descriptive_statistics/001.distributions/index.html';
    }
  }, []);

  return null; // or loading indicator
};

export default TestPage;