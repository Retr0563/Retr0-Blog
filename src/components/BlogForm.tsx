import { useEffect, useState } from "react";
import { useBlogs } from "../shared/BlogProvider";
import type { Blog } from "../types";

interface BlogFormProps {
  existingBlog?: Blog;
  onClose: () => void;
}

const BlogForm: React.FC<BlogFormProps> = ({ existingBlog, onClose }) => {
  const { addBlog, updatedBlog } = useBlogs();
  const [title, setTitle] = useState(existingBlog?.title || "");
  const [description, setDescription] = useState(
    existingBlog?.description || ""
  );
  const [img, setImg] = useState(existingBlog?.image || "");
  const [time, setTime] = useState(existingBlog?.time || "");

  useEffect(() => {
    if (existingBlog) {
      setTitle(existingBlog.title);
      setDescription(existingBlog.description);
      setImg(existingBlog.image);
      setTime(existingBlog.time);
    }
  }, [existingBlog]);

  return <div>BlogForm</div>;
};
export default BlogForm;
