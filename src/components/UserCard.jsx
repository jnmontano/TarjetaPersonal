import React from 'react'

const UserCard = ({user,deleteUser, setUpdatingUser, handleClickShowModal}) => {
  
  const handleClickEdit = () => {
    setUpdatingUser(user)
    handleClickShowModal()
  }

  return (
    <article className='userCard'>
              <h3>{user.first_name} {user.last_name}</h3>
              <hr />
              <ul className='userCard__list'>
                <li className='userCard__item'><span>Email</span>{user.email}</li>
                <li className='userCard__item'><span>Birthday</span><i className='bx bx-gift'></i>{user.birthday}</li>
              </ul>
              <hr />
              <footer className='userCard__footer'>
                <button className='userCard__btn-delete' onClick={() => deleteUser(user.id)}><i className='bx bx-trash'></i></button>
                <button className='userCard__btn-edit' onClick={handleClickEdit}><i className='bx bx-pencil'></i></button>                
              </footer>
            </article>
  )
}

export default UserCard
