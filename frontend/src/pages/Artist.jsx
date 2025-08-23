import React, { useState, useEffect } from "react";
import {
  User,
  FileText,
  ShoppingBag,
  Settings,
  Heart,
  MessageCircle,
  Calendar,
  Palette,
  Gift,
  MapPin,
  Package,
  Clock,
  Plus,
  Check,
  X,
} from "lucide-react";

const ArtistPage = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const [posts, setPosts] = useState([]);
  const [purchaseReqs, setPurchaseReqs] = useState([]);
  const [loading, setLoading] = useState(false);

  // Mock API calls - replace with actual MongoDB fetch calls
  const fetchPosts = async () => {
    setLoading(true);
    try {
      // Replace with actual API call
      setTimeout(() => {
        setPosts([
          {
            id: 1,
            title: "Royal Rajasthani Miniature",
            description:
              "Traditional Rajasthani art depicting royal court scenes with intricate details.",
            image: "/api/placeholder/400/300",
            likes: 124,
            comments: 18,
            date: "2024-01-15",
            price: "₹15,000",
          },
          {
            id: 2,
            title: "Madhubani Folk Art",
            description:
              "Vibrant Madhubani painting showcasing nature and mythology.",
            image: "/api/placeholder/400/300",
            likes: 89,
            comments: 12,
            date: "2024-01-10",
            price: "₹8,500",
          },
        ]);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };

  const fetchPurchaseRequests = async () => {
    setLoading(true);
    try {
      // Replace with actual API call
      setTimeout(() => {
        setPurchaseReqs([
          {
            id: 1,
            customerName: "Priya Sharma",
            customerEmail: "priya.sharma@email.com",
            artworkTitle: "Ganesha Canvas Art",
            requestedPrice: "₹12,000",
            quantity: 2,
            status: "pending",
            requestDate: "2024-01-18T10:30:00Z",
            deliveryAddress: {
              street: "123, MG Road",
              city: "Bangalore",
              state: "Karnataka",
              pincode: "560001",
              country: "India",
            },
            message:
              "Interested in commissioning a custom Ganesha painting for my home. Would like two pieces for different rooms.",
          },
          {
            id: 2,
            customerName: "Rajesh Kumar",
            customerEmail: "rajesh.k@email.com",
            artworkTitle: "Traditional Warli Art",
            requestedPrice: "₹6,500",
            quantity: 1,
            status: "approved",
            requestDate: "2024-01-16T14:15:00Z",
            deliveryAddress: {
              street: "456, Cultural Center Lane",
              city: "Mumbai",
              state: "Maharashtra",
              pincode: "400001",
              country: "India",
            },
            message:
              "Would like to purchase the Warli art piece for our cultural center's new exhibition hall.",
          },
          {
            id: 3,
            customerName: "Anita Desai",
            customerEmail: "anita.desai@email.com",
            artworkTitle: "Mandala Art Collection",
            requestedPrice: "₹25,000",
            quantity: 5,
            status: "declined",
            requestDate: "2024-01-12T09:45:00Z",
            deliveryAddress: {
              street: "789, Art District",
              city: "Delhi",
              state: "Delhi",
              pincode: "110001",
              country: "India",
            },
            message:
              "Looking for a complete mandala art collection for my wellness center. Need 5 pieces of different sizes.",
          },
        ]);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching purchase requests:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === "posts") {
      fetchPosts();
    } else if (activeTab === "purchase") {
      fetchPurchaseRequests();
    }
  }, [activeTab]);

  const sidebarItems = [
    { id: "posts", label: "Posts", icon: FileText },
    { id: "purchase", label: "Purchase Requests", icon: ShoppingBag },
    { id: "settings", label: "Account Settings", icon: Settings },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "approved":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "declined":
        return "bg-red-50 text-red-700 border-red-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const EmptyState = ({ type }) => (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl flex items-center justify-center border border-orange-100">
        {type === "posts" ? (
          <Palette className="w-10 h-10 text-orange-500" />
        ) : (
          <Gift className="w-10 h-10 text-red-500" />
        )}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {type === "posts" ? "No Artworks Yet" : "No Purchase Requests"}
      </h3>
      <p className="text-gray-500 max-w-md text-sm leading-relaxed">
        {type === "posts"
          ? "Share your beautiful creations with the world. Upload your first artwork to get started!"
          : "No purchase requests at the moment. Your amazing art will attract customers soon!"}
      </p>
    </div>
  );

  const PostCard = ({ post }) => (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md hover:border-orange-200 transition-all duration-300">
      <div className="aspect-[4/3] bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
            {post.title}
          </h3>
          <span className="text-lg font-bold text-orange-600 shrink-0">
            {post.price}
          </span>
        </div>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
          {post.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1.5">
              <Heart className="w-4 h-4" />
              <span>{post.likes}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <MessageCircle className="w-4 h-4" />
              <span>{post.comments}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1.5 text-xs text-gray-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>{new Date(post.date).toLocaleDateString("en-IN")}</span>
          </div>
        </div>
      </div>
    </div>
  );

  const PurchaseRequestCard = ({ request }) => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
      {/* Header */}
      <div className="p-6 pb-4 border-b border-gray-50">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {request.artworkTitle}
            </h3>
            <p className="text-sm text-gray-600">
              Request from{" "}
              <span className="font-medium text-gray-900">
                {request.customerName}
              </span>
            </p>
            <p className="text-xs text-gray-400 mt-0.5">
              {request.customerEmail}
            </p>
          </div>
          <div className="text-right shrink-0 ml-4">
            <div className="text-xl font-bold text-orange-600 mb-2">
              {request.requestedPrice}
            </div>
            <span
              className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                request.status
              )}`}
            >
              {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-4">
        {/* Request Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          <div className="flex items-center space-x-3 text-sm">
            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
              <Package className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <p className="text-gray-500 text-xs">Quantity</p>
              <p className="font-semibold text-gray-900">
                {request.quantity} piece{request.quantity > 1 ? "s" : ""}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-sm">
            <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
              <Clock className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <p className="text-gray-500 text-xs">Request Date</p>
              <p className="font-semibold text-gray-900 text-xs">
                {formatDate(request.requestDate)}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-sm">
            <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center">
              <MapPin className="w-4 h-4 text-purple-600" />
            </div>
            <div>
              <p className="text-gray-500 text-xs">Location</p>
              <p className="font-semibold text-gray-900">
                {request.deliveryAddress.city}, {request.deliveryAddress.state}
              </p>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="mb-5">
          <h4 className="text-sm font-medium text-gray-900 mb-2">
            Customer Message
          </h4>
          <div className="bg-orange-25 bg-opacity-30 border border-orange-100 rounded-xl p-4">
            <p className="text-sm text-gray-700 italic leading-relaxed">
              "{request.message}"
            </p>
          </div>
        </div>

        {/* Delivery Address */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-900 mb-2">
            Delivery Address
          </h4>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-sm text-gray-800 leading-relaxed">
              {request.deliveryAddress.street}
              <br />
              {request.deliveryAddress.city}, {request.deliveryAddress.state} -{" "}
              {request.deliveryAddress.pincode}
              <br />
              {request.deliveryAddress.country}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        {request.status === "pending" && (
          <div className="flex space-x-3">
            <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2.5 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2">
              <Check className="w-4 h-4" />
              <span>Accept Request</span>
            </button>
            <button className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-2.5 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2">
              <X className="w-4 h-4" />
              <span>Decline</span>
            </button>
          </div>
        )}

        {request.status === "approved" && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <p className="text-emerald-800 text-sm font-medium">
              ✅ Request approved - Proceed with artwork creation
            </p>
          </div>
        )}

        {request.status === "declined" && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="text-red-800 text-sm font-medium">
              ❌ Request declined
            </p>
          </div>
        )}
      </div>
    </div>
  );

  const AccountSettings = () => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        Account Settings
      </h2>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Artist Name
            </label>
            <input
              type="text"
              className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              placeholder="Your artist name"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <textarea
            rows="4"
            className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
            placeholder="Enter your state"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Speciality
          </label>
          <select className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200">
            <option>Traditional Indian Art</option>
            <option>Madhubani</option>
            <option>Warli</option>
            <option>Rajasthani Miniature</option>
            <option>Contemporary Fusion</option>
          </select>
        </div>

        <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-sm">
          Save Changes
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Artist Dashboard
                </h1>
                <p className="text-sm text-gray-500">
                  Manage your artwork and requests
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-73px)]">
          <nav className="p-4">
            <div className="space-y-1">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 text-left ${
                      activeTab === item.id
                        ? "bg-orange-50 text-orange-700 border border-orange-200"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-4 border-orange-500 border-t-transparent"></div>
            </div>
          ) : (
            <>
              {activeTab === "posts" && (
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        Your Artworks
                      </h2>
                      <p className="text-gray-600 mt-1">
                        Showcase your beautiful creations
                      </p>
                    </div>
                    <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center space-x-2 shadow-sm">
                      <Plus className="w-4 h-4" />
                      <span>Add New Post</span>
                    </button>
                  </div>
                  {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                      ))}
                    </div>
                  ) : (
                    <EmptyState type="posts" />
                  )}
                </div>
              )}

              {activeTab === "purchase" && (
                <div>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Purchase Requests
                    </h2>
                    <p className="text-gray-600 mt-1">
                      Manage customer inquiries and orders
                    </p>
                  </div>
                  {purchaseReqs.length > 0 ? (
                    <div className="space-y-6">
                      {purchaseReqs.map((request) => (
                        <PurchaseRequestCard
                          key={request.id}
                          request={request}
                        />
                      ))}
                    </div>
                  ) : (
                    <EmptyState type="purchase" />
                  )}
                </div>
              )}

              {activeTab === "settings" && <AccountSettings />}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;
