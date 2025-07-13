import React from 'react'
import { useAuth } from '../Context/AuthProvider';
import toast from 'react-hot-toast';
const Logout = () => {
    const [authUser, setauthUser] = useAuth();
    const handleLogout = () => {
        try {
            setauthUser(undefined)
            // console.log(authUser)
            localStorage.removeItem("User")
            toast.success("Logout Succesfully ")
            setTimeout(() => {
                window.location.reload();
              }, 1000);
        } catch (error) {
            toast.error("Error : " + error.message)
        }
    }
  return (
    <div>
      <button className="px-2 py-2 cursor-pointer rounded-lg bg-red-500 text-white hover:bg-red-800 duration-300"
      onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
