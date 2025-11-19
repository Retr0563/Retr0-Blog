import UserCard from "./UserCard";

const requests = [
  { name: "Daniel Christian Anane-Boadaa", following: false },
  { name: "Isaac Acheampong", following: true },
  { name: "Lemuela Anane-Boadaa", following: false },
  { name: "Felix Appiah", following: false },
];

const People = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-lg mb-4">Follow Requests</h3>
      <div className="space-y-4">
        {requests.map((person, index) => (
          <UserCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
};
export default People;
