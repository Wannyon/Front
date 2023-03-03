import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Layout from './Layout';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import MyPage from './pages/MyPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* index는 상위 라우터"/"와 같은 역할을 한다. */}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles/" element={<Articles />}>
        <Route path="/articles/:id" element={<Article />} />
      </Route >
      <Route path='/login' element={<Login />} />
      <Route path='/mypage' element={<MyPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;