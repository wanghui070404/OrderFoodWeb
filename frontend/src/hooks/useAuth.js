import { useState, createContext, useContext } from 'react';
import * as userService from '../services/userService';
import { toast } from "react-toastify";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(userService.getUser());

    const login = async (email, password) => {
        try {
            const user = await userService.loginAsync(email, password);
            setUser(user);
            toast.success("Login successfully");
        } catch (err) {
            toast.error(err.response.data);
        }
    };
};

