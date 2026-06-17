import { useSelector } from "react-redux";
import { useLogoutProfileMutation } from "../redux/userService";
import { useGetTransactionsQuery } from "../redux/services";

const UserProfile = () => {
  const { profile } = useSelector((state) => state.users);
  const [logout] = useLogoutProfileMutation();
  const transactions = useGetTransactionsQuery();

  const handleLogout = async (e) => {
    e.preventDefault();

    await logout().unwrap();
    window.location.reload();
  };

  return (
    <div>
      <h4 style={{ textTransform: "capitalize" }}>
        Name: {profile?.firstname}
      </h4>
      <p>Transactions: {transactions?.data?.transactions.length}</p>
      <input
        type="submit"
        value="Logout"
        className="btn"
        onClick={handleLogout}
      />
    </div>
  );
};

export default UserProfile;
