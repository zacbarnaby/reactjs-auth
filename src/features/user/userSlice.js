import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        data: {},
        isLogged: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(signupUser.pending, (state, action) => {
                console.log('signupUser.pending');
            })
            .addCase(signupUser.fulfilled, (state, action) => {
                console.log('signupUser.fulfilled');
                state.data = action.payload;
                state.isLogged = true;
            })
            .addCase(signupUser.rejected, (state, action) => {
                console.log('signupUser.rejected');
                console.log(action.error);
            });
    }
});

export const signupUser = createAsyncThunk(
    "users/signup",
    async(data, thunkAPI) => {
        // do api stuff here
        return data;
    }
);

export const userSelector = state => state.user;