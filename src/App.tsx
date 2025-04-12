import React from 'react';
import { Home, Users, MessageCircle, Bell, Menu, Search, ChevronDown } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center">
            <span className="text-blue-600 text-2xl font-bold">facebook</span>
            <div className="ml-4 relative">
              <input
                type="text"
                placeholder="Search Facebook"
                className="bg-gray-100 rounded-full py-2 px-4 pl-10 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
            </div>
          </div>
          
          <div className="flex space-x-2">
            <button className="p-2.5 hover:bg-gray-100 rounded-full">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
            <button className="p-2.5 hover:bg-gray-100 rounded-full">
              <MessageCircle className="h-6 w-6 text-gray-600" />
            </button>
            <button className="p-2.5 hover:bg-gray-100 rounded-full">
              <Bell className="h-6 w-6 text-gray-600" />
            </button>
            <button className="p-2.5 hover:bg-gray-100 rounded-full">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
                alt="Profile"
                className="h-6 w-6 rounded-full"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Sidebar() {
  const menuItems = [
    { icon: <Home className="h-6 w-6" />, text: 'Home' },
    { icon: <Users className="h-6 w-6" />, text: 'Friends' },
    { icon: <MessageCircle className="h-6 w-6" />, text: 'Messages' },
  ];

  return (
    <div className="fixed left-0 top-14 w-64 h-screen bg-white p-4 overflow-y-auto">
      {menuItems.map((item, index) => (
        <button
          key={index}
          className="flex items-center space-x-2 w-full p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {item.icon}
          <span className="text-gray-700">{item.text}</span>
        </button>
      ))}
    </div>
  );
}

function Feed() {
  const posts = [
    {
      id: 1,
      author: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
      content: 'Just had an amazing day at the beach! 🌊',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
      likes: 42,
      comments: 8,
    },
    {
      id: 2,
      author: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      content: 'Check out my new home office setup! 💻',
      image: 'https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?w=800&h=600&fit=crop',
      likes: 128,
      comments: 24,
    },
  ];

  return (
    <div className="ml-64 mt-14 max-w-2xl mx-auto p-4">
      {/* Create Post */}
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <div className="flex items-center space-x-2">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
            alt="Your avatar"
            className="h-10 w-10 rounded-full"
          />
          <input
            type="text"
            placeholder="What's on your mind?"
            className="bg-gray-100 rounded-full py-2 px-4 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Posts */}
      {posts.map(post => (
        <div key={post.id} className="bg-white rounded-lg shadow mb-4">
          <div className="p-4">
            <div className="flex items-center space-x-2">
              <img src={post.avatar} alt={post.author} className="h-10 w-10 rounded-full" />
              <div>
                <h3 className="font-semibold">{post.author}</h3>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
              <button className="ml-auto">
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            <p className="mt-4">{post.content}</p>
          </div>
          {post.image && (
            <img src={post.image} alt="Post content" className="w-full" />
          )}
          <div className="p-4 border-t">
            <div className="flex items-center justify-between">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <span>👍 {post.likes}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <span>💬 {post.comments} comments</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Sidebar />
      <Feed />
    </div>
  );
}

export default App;