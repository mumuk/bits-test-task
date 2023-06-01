import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import FeedbacksPage from './pages/FeedbacksPage';
import CardListPage from './pages/CardListPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<CardListPage />} exact />
      <Route path="/feedbacks" element={<FeedbacksPage />} exact />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
