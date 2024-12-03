// src/pages/arts/test.tsx
import React, { useEffect } from 'react';

const TestPage = () => {
  useEffect(() => {
    // Redirect to static HTML file
    if (typeof window !== 'undefined') {
      window.location.href = '/statistics/002.inferential_statistics/index.html';
    }
  }, []);

  return null; // or loading indicator
};

export default TestPage;