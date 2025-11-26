import { IoMdAddCircle } from "react-icons/io";
import "./App.css";
import Navigation from "./components/Navigation";
import People from "./components/People";
import TopicList from "./components/TopicList";
import TrendList from "./components/TrendList";
import { BlogProvider } from "./shared/BlogContext";
import { useState } from "react";
import type { Blog } from "./types";
import Modal from "./components/Modal";
import BlogForm from "./components/BlogForm";
import ArticleList from "./components/ArticleList";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [editBlog, setEditBlog] = useState<Blog | undefined>(undefined);

  const handleCLick = () => {
    setEditBlog(undefined);
    setModalOpen(true);
  };

  const openModalEdit = (blog: Blog) => {
    setEditBlog(blog);
    setModalOpen(true);
  };

  return (
    <div>
      <BlogProvider>
        <Navigation />

        <div className="flex justify-center">
          <section className="mx-auto p-6">
            {/* Main content goes here */}
            <div>
              <button
                onClick={handleCLick}
                className="ml-28 bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4 hover:bg-gray-500 "
              >
                Add New Blog <IoMdAddCircle className="ml-2" />
              </button>
              <ArticleList onEdit={openModalEdit} />
              {isModalOpen && (
                <Modal onClose={() => setModalOpen(false)}>
                  <BlogForm
                    existingBlog={editBlog}
                    onClose={() => setModalOpen(false)}
                  />
                </Modal>
              )}
            </div>
          </section>
          <div className="w-[30%]">
            <People />
            <TrendList />
            <TopicList />
          </div>
        </div>
      </BlogProvider>
    </div>
  );
}

export default App;
