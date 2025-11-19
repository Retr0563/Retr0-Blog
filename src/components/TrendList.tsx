const trends = [
  {
    title: "Young Men, be prepared before you get married",
    author: "Michael Boakye Yiadom",
  },
  {
    title: "Be the Person You Are on Vacation",
    author: "Lemuela Anane-Boadaa",
  },
  {
    title: "Hate NFTs? I have some bad news...",
    author: "Isaac Acheampong",
  },
  {
    title: "The real impact of dark UX patterns",
    author: "Augustina Tweneboah",
  },
];

const TrendList = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mt-8">
      <h3 className="font-semibold text-lg mb-4">Today's Top Trends</h3>
      <ul className="space-y-4">
        {trends.map((trend, index) => (
          <li className="flex flex-col" key={index}>
            <span className="font-medium">{trend.title}</span>
            <span className="text-sm text-gray-500">By {trend.author}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TrendList;
