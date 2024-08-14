import React, { useState, useEffect } from 'react';
import './App.css';
import ListUser from './page/user';
import { list } from './page/user/userSlice';
import { IUser } from './type/user.type';
import { useAppDispatch, useAppSelector } from './redux/store';
import { Button } from 'antd';
import AddUserForm from './page/user/formAddUser'; 
function App() {
  const [data, setData] = useState<IUser[]>([]);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(list()); 
  }, [dispatch]);

  useEffect(() => {
    const users = user.items;
    if (users) {
      setData(users);
    }
  }, [user.items]);

  return (
    <div className="App">
      <AddUserForm />
      <ListUser data={data} />
    </div>
  );
}

export default App;
