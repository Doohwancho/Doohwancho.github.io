// src/pages/arts/test.tsx
import React, { useEffect } from 'react';

const TestPage = () => {
  useEffect(() => {
    // Redirect to static HTML file
    if (typeof window !== 'undefined') {
      window.location.href = '/statistics/001.descriptive_statistics/002.moments_로_분포설명/moments.html';
    }
  }, []);

  return null; // or loading indicator
};

export default TestPage;