// src/pages/arts/test.tsx
import React, { useEffect } from 'react';

const TestPage = () => {
  useEffect(() => {
    // Redirect to static HTML file
    if (typeof window !== 'undefined') {
      window.location.href = '/statistics/000.확률변수/index.html';
    }
  }, []);

  return null; // or loading indicator
};

export default TestPage;