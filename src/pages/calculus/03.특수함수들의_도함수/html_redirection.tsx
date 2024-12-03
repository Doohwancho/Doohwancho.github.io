// src/pages/arts/test.tsx
import React, { useEffect } from 'react';

const TestPage = () => {
  useEffect(() => {
    // Redirect to static HTML file
    if (typeof window !== 'undefined') {
      window.location.href = '/calculus/03.특수함수들의_도함수/index.html';
    }
  }, []);

  return null; // or loading indicator
};

export default TestPage;