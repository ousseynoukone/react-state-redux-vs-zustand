import { UserState } from "../shared/userState";


export default function UserList() {
const users = UserState((state) => state.users)
    
  if (users.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-4">
        No users found.
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-6 bg-white shadow-md rounded-lg overflow-hidden">
      <ul>
        {users.map((user,index) => (
          <li
            key={index}
            className="flex flex-col sm:flex-row sm:justify-between px-4 py-3 border-b last:border-b-0 hover:bg-gray-50 transition"
          >
            <span className="font-medium text-gray-800">{user.name}</span>
            <span className="text-gray-500 sm:text-right">{user.age}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}