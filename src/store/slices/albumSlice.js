import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

//Function for fetch List Albums with user ID
export const fetchAlbums = createAsyncThunk(
    "albums/fetchAlbums",
    async (userId) =>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)

        return response.data
    }
)

//Function for fetch List Photos with Album ID
export const fetchPhotos = createAsyncThunk(
    "photos/fetchPhotos",
    async (albumId) =>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)

        return response.data
    }
)

//Function for fetch Detail Photo with photo ID
export const fetchPhoto = createAsyncThunk(
    "photo/fetchPhoto",
    async (photoId) =>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${photoId}`)

        return response.data
    }
)


//Create State globally
const initialState = {
    albums:[],
    photos: [],
    photo: '',
}

const albumSlice = createSlice({
    name: "post",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(fetchAlbums.fulfilled, (state, action) => {
          state.albums = action.payload
        })
        builder.addCase(fetchPhotos.fulfilled, (state, action) => {
          state.photos = action.payload
        })
        builder.addCase(fetchPhoto.fulfilled, (state, action) => {
          state.photo = action.payload
        })
      }
})
export default albumSlice.reducer