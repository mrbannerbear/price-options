import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
  const users = useLoaderData();

  return (
    <>
      <h2 className="font-bold text-2xl text-center">Testimonies</h2>
      <h3 className="font-semibold text-lg text-center">
        From Some of Our Members
      </h3>
      <div className="grid grid-cols-3 justify-center mt-8 gap-5">
        {users.map((user) => (
          <User key={user.name} user={user}></User>
        ))}
      </div>
    </>
  );
};

export default Users;
