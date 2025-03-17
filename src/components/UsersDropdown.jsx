import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, selectUser, logout } from "../features/user/userSlice";
export const UsersDropdown = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const selectedUser = useSelector((state) => state.user.selectedUser);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log("USERS", users, selectedUser);
  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none"
      >
        {selectedUser ? selectedUser?.name : `Select User`}
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
          <ul className="py-2 text-gray-700">
            {users.map((user) => {
              return (
                <li
                  key={user?.id}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  value={user?.id}
                  onClick={() => {
                    dispatch(selectUser(user?.id));
                    setIsOpen(false);
                  }}
                >
                  {user?.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <button className="mx-2" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};
