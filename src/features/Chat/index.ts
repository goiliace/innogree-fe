import { ChatState } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid } from "uuid";
const initialState: ChatState = {
    activeId: null,
    chats: {},
};
export const chatsSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        setActiveChat: (state, action: PayloadAction<string | null>) => {
            state.activeId = action.payload;
        },
        addChat: (state, action: PayloadAction<{ chatId: string; message: string; user: "User" | "Assistance" }>) => {
            const { chatId, message, user } = action.payload;
            const chat = state.chats[chatId] || { id: chatId, history: {} };
            chat.history[uuid()] = { message, time: new Date().toISOString(), user };
            state.chats[chatId] = chat;
        },
        pushHistory: (state, action: PayloadAction<{ chatId: string; history: { [key: string]: { message: string; time: string; user: "User" | "Assistance" } } }>) => {
            const { chatId, history } = action.payload;
            const chat = state.chats[chatId] || { id: chatId, history: {} };
            chat.history = { ...chat.history, ...history };
            state.chats[chatId] = chat;
        }
    },
});
export const { setActiveChat, addChat, pushHistory } = chatsSlice.actions;
export default chatsSlice.reducer;