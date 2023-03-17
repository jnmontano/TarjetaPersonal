import React from 'react'
import UserCard from './UserCard'

const UsersList = ({
  users,
  deleteUser,
  setUpdatingUser,
  handleClickShowModal,
}) => {
  return (
    <section className='listCard'>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          setUpdatingUser={setUpdatingUser}
          handleClickShowModal={handleClickShowModal}
        />
      ))}
    </section>
  );
};

export default UsersList
