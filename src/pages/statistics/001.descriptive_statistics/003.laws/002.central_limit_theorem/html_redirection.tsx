// src/pages/arts/test.tsx
import React, { useEffect } from 'react';

const TestPage = () => {
  useEffect(() => {
    // Redirect to static HTML file
    if (typeof window !== 'undefined') {
      window.location.href = '/statistics/001.descriptive_statistics/003.laws/002.central_limit_theorem/index.html';
    }
  }, []);

  return null; // or loading indicator
};

export default TestPage;