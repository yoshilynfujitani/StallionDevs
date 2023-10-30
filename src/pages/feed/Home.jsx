import React from "react";
import { useUser } from "../auth/useUser";
import { useGetUsers } from "./userGetUsers";

const Home = () => {
  const { isAuthenticated, isLoading, user } = useUser();
  const { userInfo, isLoading: gettingData } = useGetUsers();

  const currentUserInfo = userInfo?.find((users) => users.id === user.id);

  return (
    <div>
      {!isLoading && <h1>{user.id}</h1>}
      {!gettingData && <p>{currentUserInfo.username}</p>}
    </div>
  );
};

export default Home;
