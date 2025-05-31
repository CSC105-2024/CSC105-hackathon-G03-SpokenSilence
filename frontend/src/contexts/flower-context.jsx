import React, {createContext, useContext, useEffect, useState} from 'react';
import {access_service, create_service, get_service} from '../services/flower.service.jsx';

const FlowerContext = createContext();

export const FlowerProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [flower, setFlower] = useState(null);
    const [error, setError] = useState("");
    
    useEffect(() => {
        const fetchFlower = async () => {
            try {
                setLoading(true)
                const response = await get_service();
                if (response.success && response?.data?.data) {
                    setFlower(response?.data?.data);
                }
            } catch (error) {
                setFlower(null);
                setError(error?.response?.error);
            } finally {
                setLoading(false);
            }
        }
        fetchFlower()
    }, [])

    const createFlower = async ({name, message, access_key, url_flower, url}) => {
        try {
            setLoading(true);
            const response = await create_service({name, message, access_key, url_flower, url });
            if (response.success) {
                // const allFlower = await get_service();
                setFlower((prev) => [...prev, ...response?.data?.data]);
            }
            return response?.data?.data;
        } catch (error) {
            setFlower(null);
            setError(error?.response?.error);
        } finally {
            setLoading(false);
        }
    };
   
    const accessKey = async ({flower_id, access_key, user_id}) => {
        try {
            setLoading(true)
            const response = await access_service({flower_id, access_key, user_id})
            if (response.success) {
                setFlower(response?.data?.data)
            }
        } catch (error) {
            setFlower(null)
            setError(error?.response?.error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <FlowerContext.Provider value={{
            loading,
            error,
            flower,
            accessKey,
            createFlower,
        }}
        >
            {children}
        </FlowerContext.Provider>
    );
};

export const useFlower = () => {
    const context = useContext(FlowerContext);
    if (!context) {
        throw new Error('useFlower must be used within a PostProvider');
    }
    return context;
};
