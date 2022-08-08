/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchUsers } from './users.api';
import { getUsers } from './users.slice';

const User = () => {
  const dispatch = useAppDispatch();
  const usersList = useAppSelector((state) => state.users.users);

  useEffect(() => {
    fetchUsers().then((data) => {
      // will be customized according to our backend
      // dispatch(getUsers(data.users));
    });
  }, [dispatch]);

  return (
    <>
      <h1>User Component</h1>
      <div>
        {/* {usersList.map((user) => (
          <h2 key={user.name}>{user.name}</h2>
        ))} */}
      </div>
    </>
  );
};

export default User;
