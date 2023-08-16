import Layout from 'components/Layout/Layout';
import Auth from 'pages/Auth';
import HomePage from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/:auth" element={<Auth />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
