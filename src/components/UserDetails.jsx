import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUsers } from "../redux/features/users/userSelectors";

export const UserDetails = () => {
  const { userId } = useParams();
  const users = useSelector(selectUsers);
  const user = users.find((user) => user.id === parseInt(userId, 10));

  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h2>User Details</h2>
      <div>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Role:</strong> {user.role.name}
        </p>
        <p>
          <strong>Created At:</strong> {user.createdAt}
        </p>
        <p>
          <strong>Updated At:</strong> {user.updatedAt}
        </p>
      </div>
    </div>
  );
};
