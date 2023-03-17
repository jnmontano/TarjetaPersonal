import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import "./styles/ModalForm.css"

const defaultValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  birthday: "",
};
 
const ModalForm = ({
  isShowModal,
  handleClickShowModal,
  createUser,
  updatingUser,
  updateUser,
  setUpdatingUser
}) => 
{
  const { register, handleSubmit, reset } = useForm();
  const submit = (data) => {
    console.log(data)
    if (updatingUser) {
      updateUser(data, updatingUser.id);
    } else {
      createUser(data);
    }
    reset(defaultValues);
  };

  const handleClickClose = () => {
    handleClickShowModal();
    reset(defaultValues);
    setUpdatingUser()
  };
  useEffect(() => {
    if (updatingUser) {
      reset(updatingUser);
    }
  }, [updatingUser]);

  return (
    <section className={`modalForm ${isShowModal ? "activeForm" : ""}`}>
      <form className="modalForm__form" onSubmit={handleSubmit(submit)}>
        <h3 className="modalForm__tittle">{updatingUser ? "EDIT USER" : "NEW USER"}</h3>
        <i className="modalForm__x bx bx-x" onClick={handleClickClose}></i>
        <div className="modalForm__div">
          <label className="modalForm__label" htmlFor="">First Name</label>
          <input className="modalForm__input" type="text" {...register("first_name")} placeholder="First Name" />
        </div>
        <div className="modalForm__div">
          <label className="modalForm__label" htmlFor="">Last Name</label>
          <input className="modalForm__input" type="text" {...register("last_name")} placeholder="Last Name" />
        </div>
        <div className="modalForm__div">
          <label className="modalForm__label" htmlFor="">Email</label>
          <input className="modalForm__input" type="email" {...register("email")} placeholder="Email" />
        </div>
        <div className="modalForm__div">
          <label className="modalForm__label" htmlFor="">Password</label>
          <input className="modalForm__input" type="password" {...register("password")} placeholder="Password" />
        </div>
        <div className="modalForm__div">
          <label className="modalForm__label" htmlFor="">Birthday</label>
          <input className="modalForm__input" type="date" {...register("birthday")} placeholder="First Name" />
        </div>
        <button className="modalForm__btn">{updatingUser ? "Save Changes" : "Add New Users"}</button>
      </form>
    </section>
  );
};

export default ModalForm
