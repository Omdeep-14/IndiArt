/* Explorer.jsx ---------------------------------------------------- */
import React, { useState, useEffect } from "react";
import { Users, Palette, ArrowLeft } from "lucide-react";

/* local cover images */
import Chittara1 from "../assets/IndiArt-assets/Chittara1.jpeg";
import madhubani from "../assets/IndiArt-assets/madhubani1.jpeg";
import warli1 from "../assets/IndiArt-assets/warli1.jpeg";

const STATES = [
  {
    id: "karnataka",
    name: "Karnataka",
    artists: 267,
    specialties: ["Mysore painting", "Sandalwood carving"],
    cover: Chittara1,
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    artists: 345,
    specialties: ["Warli", "Paithani"],
    cover: warli1,
  },
  {
    id: "bihar",
    name: "Bihar",
    artists: 156,
    specialties: ["Madhubani", "Sujani"],
    cover: madhubani,
  },
];

/* ----------- small reusable pieces ----------- */
const StateCard = ({ s, onClick }) => (
  <button
    onClick={() => onClick(s.id)}
    className="bg-white rounded-2xl border shadow-sm hover:shadow-md overflow-hidden text-left"
  >
    <img
      src={s.cover}
      alt={s.name}
      className="w-full h-40 object-contain cursor-pointer"
    />
    <div className="p-4">
      <h3 className="font-bold mb-1">{s.name}</h3>
      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
        <span className="flex items-center space-x-1">
          <Users className="w-4 h-4" />
          <span>{s.artists}</span>
        </span>
        <span className="flex items-center space-x-1">
          <Palette className="w-4 h-4" />
          <span>{s.specialties.length}</span>
        </span>
      </div>
      <p className="text-xs text-gray-500 truncate">
        {s.specialties.join(", ")}
      </p>
    </div>
  </button>
);

const PostCard = ({ p, onBuy }) => (
  <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
    <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h4 className="font-semibold">{p.title}</h4>
      <p className="text-sm text-gray-500 mb-2">{p.artist}</p>
      <div className="flex justify-between items-center">
        <span className="text-orange-600 font-bold">{p.price}</span>
        <button
          onClick={() => onBuy(p.id)}
          className="px-4 py-1.5 bg-orange-500 hover:bg-orange-600 text-white text-xs rounded-lg"
        >
          Purchase
        </button>
      </div>
    </div>
  </div>
);

/* ---------------- main component ---------------- */
export default function Explorer() {
  const [view, setView] = useState("states"); // 'states' | 'posts'
  const [current, setCurrent] = useState(null); // state id
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  /* fetch posts whenever a state is selected */
  useEffect(() => {
    if (view !== "posts" || !current) return;
    setLoading(true);
    fetch(`/api/posts/${current}`) // <–– real endpoint
      .then((r) => r.json())
      .then((data) => setPosts(data))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, [view, current]);

  /* ----- handlers ----- */
  const openPosts = (id) => {
    setCurrent(id);
    setView("posts");
  };

  const purchase = (postId) => {
    // call your purchase API here
    alert(`Purchasing post ${postId}`);
  };

  /* ----- render ----- */
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {view === "states" && (
        <>
          <h1 className="text-2xl font-bold mb-6">Explore States</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STATES.map((s) => (
              <StateCard key={s.id} s={s} onClick={openPosts} />
            ))}
          </div>
        </>
      )}

      {view === "posts" && (
        <>
          <button
            onClick={() => setView("states")}
            className="flex items-center text-sm text-gray-600 mb-4 hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to states
          </button>
          <h1 className="text-2xl font-bold mb-6">
            {STATES.find((s) => s.id === current)?.name} — Posts
          </h1>

          {loading ? (
            <p className="text-gray-500">Loading…</p>
          ) : posts.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((p) => (
                <PostCard key={p.id} p={p} onBuy={purchase} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No posts found.</p>
          )}
        </>
      )}
    </div>
  );
}
