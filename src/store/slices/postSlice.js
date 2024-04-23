import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async (userId) =>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

        return response.data
    }
)
export const fetchPost = createAsyncThunk(
    "post/fetchPost",
    async (postId) =>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)

        return response.data
    }
)
export const fetchComments = createAsyncThunk(
    "comments/fetchComments",
    async (postId) =>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)

        return response.data
    }
)



const initialState = {
    posts:[],
    post: '',
    comments: [],
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
          state.posts = action.payload
        })
        builder.addCase(fetchPost.fulfilled, (state, action) => {
          state.post = action.payload
        })
        builder.addCase(fetchComments.fulfilled, (state, action) => {
          state.comments = action.payload
        })
      }
})
export default postSlice.reducer