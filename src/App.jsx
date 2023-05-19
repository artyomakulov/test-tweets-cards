import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from 'components/pages/Home';
import Tweets from 'components/pages/Tweets';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};
