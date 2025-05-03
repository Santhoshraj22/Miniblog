import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import CreatePost from './pages/Createpost';
import MyPosts from './pages/Myposts';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/myposts" element={<MyPosts />} />
    </Routes>
  </>
  );
}
export default App;
