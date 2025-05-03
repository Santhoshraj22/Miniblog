import { useState } from 'react';
import API from '../Services/api';
import { useAuth } from '../Context/Authcontext';

function CreatePost() {
  const [title, setTitle] = useState('');
  const { token } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/posts', { title }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Post created!');
    } catch (err) {
      alert('Error creating post');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Create Post</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" className="w-full p-2 border" placeholder="Post title" onChange={(e) => setTitle(e.target.value)} />
        <button type="submit" className="bg-green-500 text-white px-4 py-2">Submit</button>
      </form>
    </div>
  );
}
export default CreatePost;
