import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IBranch {
    uuid: string,
    name: string,
}
export interface ISkill {
    uuid: string,
    name: string,
    branches: IBranch[]
}
export interface IProject {
    uuid: string,
    img: string,
    name: string,
    github: string,
    link: string
}

export interface CounterState {
    name: string,
    position: string,
    experience: string,
    skills: ISkill[],
    services: string[],
    projects: IProject[],
    socials: {
        email: { name: string, link: string },
        whatsapp: { name: string, link: string },
        messenger: { name: string, link: string },
        facebook: { name: string, link: string },
    }
}

const initialState: CounterState = {
    name: '',
    experience: '',
    position: '',
    skills: [],
    services: [],
    projects: [],
    socials: {
        email: { name: '', link: '' },
        whatsapp: { name: '', link: '' },
        messenger: { name: '', link: '' },
        facebook: { name: '', link: '' },
    }
}

export const getUserInfo = createAsyncThunk(
    "user/getUser",
    async () => {
        // const response = await fetchCount(amount)
        // return response.data
    },
)

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        decrement: (state) => {
            // state.value -= 1
        },
    },
})

export const { } = userSlice.actions

export default userSlice.reducer
