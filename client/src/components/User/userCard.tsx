// src/components/user/UserCard.tsx
const UserCard = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
      <img
        src="https://i.pravatar.cc/100"
        alt="Profile"
        className="w-20 h-20 rounded-full mx-auto mb-3"
      />
      <div className="text-lg font-semibold text-gray-800">Megan Norton</div>
      <div className="text-sm text-gray-500">@megnorton</div>
      <div className="flex justify-center gap-3 mt-4">
        <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200">📞</button>
        <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200">📩</button>
        <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200">⋮</button>
      </div>
    </div>
  );
};

export default UserCard;
