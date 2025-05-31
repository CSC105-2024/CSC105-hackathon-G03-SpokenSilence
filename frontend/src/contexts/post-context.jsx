import React, {createContext, useContext, useState} from 'react';
import { newPost } from '../services/post.service';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
    function createPost(department, post_date) {
        return newPost(department, post_date);
    }

    return (
        <PostContext.Provider value={{
            createPost,
        }}>
            {children}
        </PostContext.Provider>
    );
};

export const usePost = () => {
    const context = useContext(PostContext);
    if (!context) {
        throw new Error('usePost must be used within a PostProvider');
    }
    return context;
};
