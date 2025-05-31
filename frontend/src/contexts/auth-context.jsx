import {
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';
import {signUp, signIn, fetch, signOut, refresh} from '../services/auth.service';
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");

    const checkStatus = async () => {
        try {
            const response = await fetch();
            if (response.success) {
                setUser(response?.data?.data);
            }
        } catch (error) {
            if (error.response?.status === 401) {
                const refreshResponse = await refresh();
                if (!refreshResponse.success) {
                    navigate('/system/sign-in');
                } else {
                    const retryFetch = await fetch();
                    setUser(retryFetch?.data?.data);
                }
            }
            setError(error?.response?.error);
        }
    }

    useEffect(() => {
        setLoading(true)
        checkStatus().finally(() => setLoading(false));
    }, [])

    const signUpUser = async ({
                                  username,
                                  surname,
                                  email,
                                  password,
                                  role,
                                  department,
                              }) =>{
        setLoading(true);
        try {
            const response = await signUp({username, surname, email, password, department, role});
            if (response.success) {
                setUser(response?.data?.data);
                navigate('/system/sign-in');
            }
        } finally {
            setLoading(false);
        }
    }
    const signInUser = async ({
                                  username,
                                  password,
                              }) => {
        setLoading(true);
        try {
            const response = await signIn({username, password})
            if (response.success) {
                const fetchResponse = await fetch()

                if (fetchResponse.success) {
                    setUser(fetchResponse?.data?.data);
                    navigate('/');
                }
            }
            return response?.data?.data;
        } catch(error) {
            setError(error.response.data.error);
        } finally {
            setLoading(false);
        }
    }

    const signOutUser = async () => {
        setLoading(true);
        try {
            await signOut();
            setUser(null)
        } catch (error) {
            setError(error.response.data.error);
        } finally {
            setLoading(false);
        }
    }
    return (
        <AuthContext.Provider value={{
            loading,
            user,
            error,
            signUpUser,
            signInUser,
            signOutUser,
            isAuth: !!user,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
};