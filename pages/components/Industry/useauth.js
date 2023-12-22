import { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/router";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (uid, email, name, password, address, cookie) => {
    setUser({ uid, email, name, password, address, cookie });

  };

  const router = useRouter();

  const checkUser = () => {
    console.log("user:  "+user.email)
    console.log("user:  "+user.name)
    console.log("user: "+user.uid)
    console.log("user:  "+user.password)
    console.log("user:  "+user.address)
    console.log("user:  "+user.cookie)
    if(user.email!=null && user.cookie!=null) {
      return true;
    }
    else
    {
      return false;
    }

  };

  const logout = () => {

    doSignOut()
  };
  async function doSignOut() {
    try {
      const response = await axios.get(process.env.NEXT_PUBLIC_API_End + '/Industry/logout/',
        {
     //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          withCredentials: true
        }
      );
      console.log(response)
        setUser(null);
        document.cookie = null;

        router.push('/');
      

    } catch (error) {
      console.error('error failed: ', error);
    }
  }
  return (
    <AuthContext.Provider value={{ user, login, logout, checkUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);