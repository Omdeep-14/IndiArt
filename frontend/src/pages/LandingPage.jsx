import React from "react";
import { Search, User, Star } from "lucide-react";
import LandingPage4 from "../assets/IndiArt-assets/LandingPage4.jpeg";
import warli1 from "../assets/IndiArt-assets/warli1.jpeg";
import madhubani1 from "../assets/IndiArt-assets/madhubani1.jpeg";
import chittara1 from "../assets/IndiArt-assets/chittara1.jpeg";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">IA</span>
          </div>
          <span className="font-bold text-lg">IndiArt</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-amber-600">
            Arts
          </a>
          <a href="#" className="text-gray-700 hover:text-amber-600">
            Explore
          </a>
          <a href="#" className="text-gray-700 hover:text-amber-600">
            Community
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 text-gray-600" />
          <User className="w-5 h-5 text-gray-600" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-8 py-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Explore, learn &
              <br />
              Sell Traditional
              <br />
              <span className="relative">
                Indian Arts
                <div className="absolute -right-8 -top-4">
                  <Star className="w-6 h-6 text-amber-500 fill-current" />
                </div>
              </span>
            </h1>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Discover and explore traditional artforms from across India. Learn
              about their stories and purchase authentic, hand-made artworks
              directly from the artists. Support their craft and help preserve
              India’s rich cultural heritage.
            </p>
            <button className="bg-gray-900 text-white px-8 py-3 md:px-15 rounded-full hover:bg-gray-800 transition-colors mx-2 md:mx-5 cursor-pointer">
              Artist
            </button>
            <button className="bg-gray-900 text-white px-8 py-3 md:px-13 rounded-full hover:bg-gray-800 transition-colors cursor-pointer">
              Explorer
            </button>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <div className="relative">
                <img
                  src={LandingPage4}
                  alt="Art image"
                  className="w-full h-100 object-contain rounded-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-gray-900 text-white px-4 py-2 rounded-xl">
                  <span className="text-sm">Featured</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full border-4 border-amber-200 bg-amber-100 flex items-center justify-center">
              <Star className="w-8 h-8 text-amber-500" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-8 py-16 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore, learn &
              <br />
              <span className="relative">Purchase</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border">
              <div className="w-full h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center mb-6 font-bold ">
                Purchase
              </div>
              <h3 className="text-xl font-bold mb-4">Post and sell</h3>
              <p className="text-gray-600">
                Post your ArtWork and let explorers discover it,they are your
                customers, most liked arts get more engagement.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border">
              <div className=" h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center mb-6 font-bold">
                Explore
              </div>
              <h3 className="text-xl font-bold mb-4">
                Explore arts state wise
              </h3>
              <p className="text-gray-600">
                Select a state in India ,and explore all the hand-made arts
                posted by the original artists ,support them by purchasing.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border">
              <div className=" h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center mb-6 font-bold">
                Learn
              </div>
              <h3 className="text-xl font-bold mb-4">Take a Quiz</h3>
              <p className="text-gray-600">
                Take quiz for a state to learn about its traditional art and
                folklore
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Arts */}
      <section className="px-8 py-16 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              <span className="relative">
                <Star className="absolute -left-8 top-1 w-5 h-5 text-amber-500 fill-current" />
                Trending Arts
                <Star className="absolute -right-8 top-1 w-5 h-5 text-amber-500 fill-current" />
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Warli Art",
                state: "Maharashtra",
                purchases: "200",

                thumbnail: warli1,
              },
              {
                title: "Madubani Art",
                state: "Bihar",
                purchases: "150",

                thumbnail: madhubani1,
              },
              {
                title: "Chittara art",
                state: "Karnataka",
                purchases: "250",

                thumbnail: chittara1,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-48 object-contain rounded-xl mb-4"
                />
                <h3 className="font-bold text-lg mb-4">{item.title}</h3>

                <div className="flex justify-between text-sm">
                  <div>
                    <p className=" font-semibold">State</p>
                    <p className=" text-gray-500">{item.state}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">Purchases</p>
                    <p className="text-gray-500">{item.purchases}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="font-bold text-lg">IndiArt</span>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-900">
              Terms
            </a>
            <span>Copyright 2025</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
