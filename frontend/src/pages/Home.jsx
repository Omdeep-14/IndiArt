import React, { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import Artist from "./Artist";
import Explorer from "./Explorer";

const Home = () => {
  const [activeView, setActiveView] = useState("explorer"); // default view
  const { user } = useUser();

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Welcome, {user.firstName}!</h1>
        <nav className="flex gap-4">
          <button
            className={`px-4 py-2 rounded cursor-pointer ${
              activeView === "artist"
                ? "bg-amber-500 text-white"
                : "bg-amber-200 hover:bg-amber-500 "
            }`}
            onClick={() => setActiveView("artist")}
          >
            Artist
          </button>
          <button
            className={`px-4 py-2 rounded cursor-pointer ${
              activeView === "explorer"
                ? "bg-amber-500"
                : "bg-amber-200 hover:bg-amber-500 "
            }`}
            onClick={() => setActiveView("explorer")}
          >
            Explorer
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {activeView === "artist" && <Artist />}
        {activeView === "explorer" && <Explorer />}
      </main>
    </div>
  );
};

export default Home;
