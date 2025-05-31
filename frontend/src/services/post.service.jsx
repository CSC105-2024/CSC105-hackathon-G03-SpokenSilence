import {createPost} from "../apis/post.api.jsx";

export const newPost = async (department, post_date) => {
    const body = {department, post_date}
    return await createPost(body);
}

