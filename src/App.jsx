import "./App.css";
import CreatePost from "./components/Create Post.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Postlist from "./components/Postlist.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { useState } from "react";
import PostListProvider from "./store/post-list-store.jsx";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="Appcontainer">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? (
            <Postlist></Postlist>
          ) : (
            <CreatePost></CreatePost>
          )}
          <div className="Footer">
            <Footer></Footer>
          </div>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
