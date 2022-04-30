import React, {useContext, useState} from "react";
import axios from "axios";

const ProfileContext = React.createContext()

const api = axios.create({withCredentials: true})

export const ProfileProvider = ({children}) => {
    const [profile, setProfile]
        = useState()

    const signout = async () => {
        const response = await api
            .post("http://localhost:4000/api/signout")
        setProfile(null)
    }

    const checkLoggedIn = async () => {
        try {
            const response = await api
                .post("http://localhost:4000/api/profile")
            setProfile(response.data)
            return response.data
        } catch (e) {
            throw e
        }
    }

    const signup = async (email, password) => {
        try { // TODO: move this to service
            const response = await api
                .post("http://localhost:4000/api/signup",
                      { email, password })
            setProfile(response.data)
        } catch (e) { throw e }
    }


    const signin = async (email, password) => {
        try {
            const response = await api
                .post("http://localhost:4000/api/signin",
                      {email, password})
            setProfile(response.data)
        } catch (e) {
            throw e
        }
    }

    const value = {signout, signin, profile, signup, checkLoggedIn}
    return(
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    )
}

export const useProfile = () => {
    return useContext(ProfileContext)
}