import { useGetUsersQuery } from "../../store/apis/usersApiSlice.js";
import Spinner from "../layout/Spinner.jsx";

const UsersList = () => {
  const { data: users, isLoading, isSuccess, isError, error } = useGetUsersQuery();

  console.log("GGGGGGGGGGGGGGGGGGG", users);
  return (
    <div>
      <Spinner isLoading={isLoading} />
    </div>
  );
};

export default UsersList;
