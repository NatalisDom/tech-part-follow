import { Route, Routes } from 'react-router';

import Layout from './Layout/Layout';
import Home from 'pages/Home/Home';
import Tweets from 'pages/Tweets/Tweets';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
      </Route>
    </Routes>
  );
}

export default App;
