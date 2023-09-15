import { useGetUsersQuery } from "../../store/apis/usersApiSlice.js";
import { Hourglass } from "react-loader-spinner";

const UsersList = () => {
  const { data: users, isLoading, isSuccess, isError, error } = useGetUsersQuery();

  console.log("GGGGGGGGGGGGGGGGGGG", users);
  return (
    <div>
      <div className="spinner-container">
        {isLoading ? (
          <Hourglass
            visible={true}
            height="100"
            width="100"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#306cce", "#72a1ed"]}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default UsersList;
