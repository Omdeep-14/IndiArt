import React, { useState, useEffect } from "react";
import { Heart, ImageIcon, Package } from "lucide-react";

function ArtistDashboard({ artistId }) {
  const [activeTab, setActiveTab] = useState("posts");
  const [posts, setPosts] = useState([]);
  const [requests, setRequests] = useState([]);

  // Fetch Posts
  useEffect(() => {
    if (activeTab === "posts") {
      fetch(`http://localhost:5000/api/artist/posts/${artistId}`)
        .then((res) => res.json())
        .then((data) => setPosts(data))
        .catch((err) => console.error(err));
    }
  }, [activeTab, artistId]);

  // Fetch Requests
  useEffect(() => {
    if (activeTab === "requests") {
      fetch(`http://localhost:5000/api/artist/requests/${artistId}`)
        .then((res) => res.json())
        .then((data) => setRequests(data))
        .catch((err) => console.error(err));
    }
  }, [activeTab, artistId]);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-amber-50 via-orange-100 to-rose-50 font-serif">
      {/* Sidebar */}
      <div className="w-72 bg-gradient-to-b from-red-800 to-amber-700 shadow-2xl rounded-r-3xl p-6 text-white">
        <h2 className="text-3xl font-bold mb-10 tracking-wide">
          🎨 Artist Panel
        </h2>
        <ul className="space-y-5">
          <li>
            <button
              onClick={() => setActiveTab("posts")}
              className={`flex items-center gap-3 w-full text-left px-5 py-3 rounded-xl transition ${
                activeTab === "posts"
                  ? "bg-amber-200 text-red-900 font-semibold shadow-lg"
                  : "hover:bg-amber-500/30"
              }`}
            >
              <ImageIcon className="w-5 h-5" />
              Your Posts
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("requests")}
              className={`flex items-center gap-3 w-full text-left px-5 py-3 rounded-xl transition ${
                activeTab === "requests"
                  ? "bg-amber-200 text-red-900 font-semibold shadow-lg"
                  : "hover:bg-amber-500/30"
              }`}
            >
              <Package className="w-5 h-5" />
              Purchase Requests
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        {activeTab === "posts" && (
          <>
            <h2 className="text-4xl font-extrabold mb-8 text-red-800 drop-shadow">
              🖼️ Your Artworks
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <div
                  key={post._id}
                  className="bg-white rounded-3xl shadow-lg border-2 border-amber-200 overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-transform"
                >
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-red-900">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600">{post.state}</p>
                    <p className="text-lg font-bold text-green-700 mt-2">
                      ₹{post.price}
                    </p>
                    <button className="mt-4 flex items-center space-x-2 text-red-600 hover:text-red-800 transition">
                      <Heart className="w-5 h-5" /> <span>Like</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === "requests" && (
          <div>
            <h2 className="text-4xl font-extrabold mb-8 text-red-800 drop-shadow">
              📩 Purchase Requests
            </h2>
            {requests.length === 0 ? (
              <div className="bg-white p-8 rounded-3xl shadow-md border border-amber-300 text-center">
                <p className="text-gray-700 text-lg italic">
                  No purchase requests yet 🙏
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {requests.map((req) => (
                  <div
                    key={req._id}
                    className="bg-gradient-to-r from-amber-100 to-rose-100 p-6 rounded-2xl shadow-lg border border-amber-200"
                  >
                    <p className="font-semibold text-red-800 text-lg">
                      Buyer: {req.buyerId}
                    </p>
                    <p className="text-gray-700">Quantity: {req.quantity}</p>
                    <p className="text-gray-700">Location: {req.location}</p>
                    <p className="text-gray-600 italic mt-3">"{req.message}"</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ArtistDashboard;
