import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState={
    value: AuthState;
}

type AuthState={
    isAuth: boolean;
    username: string;
    uid: string;
    isModerator: boolean;
    isLoginStatus: boolean;

}
const initialState ={
    value:{
        isAuth: false,
        username:"",
        uid:"",
        isModerator: false,
        isLoginStatus: false 
    } as AuthState,
} as InitialState;


export const auth = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logOut: () =>{
            return initialState;
        }, 
        logIn: (state, action: PayloadAction<string> ) =>{
                return {
                    value:{
                        isAuth: true,
                        username: action.payload,
                        uid: "xyzeedsf2332124erdsfdsaf",
                        isModerator: false,
                        isLoginStatus: false 
                    },
                };
        },
        toggleLogOutStatus: (state) =>{
            state.value.isLoginStatus  = !state.value.isLoginStatus;
        }
    },

})

export const {logIn, logOut, toggleLogOutStatus} = auth.actions;
export default auth.reducer;