import { useEffect, useState } from 'react';
import API from '../Services/api';
import { useAuth } from '../Context/Authcontext';

function MyPosts() {
  const { token } = useAuth();
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await API.get('/myposts', {
      headers: { Authorization: `Bearer ${token}` }
    });
    setPosts(res.data);
  };

  const handleDelete = async (id) => {
    await API.delete(`/posts/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchPosts(); // refresh
  };

  useEffect(() => { fetchPosts(); }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Posts</h2>
      <ul className="space-y-2">
        {posts.map(post => (
          <li key={post._id} className="p-3 border rounded flex justify-between items-center">
            {post.title}
            <button onClick={() => handleDelete(post._id)} className="bg-red-500 text-white px-3 py-1">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default MyPosts;
