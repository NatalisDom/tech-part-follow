import { Route, Routes } from 'react-router';

import Layout from './Layout/Layout';
import Home from 'pages/Home/Home';
import Tweets from 'pages/Tweets/Tweets';
import NotFound from 'pages/NotFound/NotFound';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
