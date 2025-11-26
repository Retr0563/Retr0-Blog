import type { Blog } from "../types";

interface ArticleCardProps {
  article: Blog;
  onDelete: () => void;
  onEdit: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="flex p-4 bg-white w-160 mb-6 ml-8 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        src={article.image}
        alt={article.title}
        className="w-36 h-24 object-cover rounded-lg shadow-md"
      />
      <div className="ml-6 flex-1 flex-col">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {article.title}
        </h3>
        <p className="text-sm text-gray-700 flex-1">{article.description}</p>
        <div className="mt-4 flex gap-2">
          <button
            className="text-sm text-blue-600 hover:underline"
            onClick={onEdit}
          >
            Edit
          </button>
          <button
            className="text-sm text-red-600 hover:underline"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default ArticleCard;
