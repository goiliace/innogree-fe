import { createAsyncThunk } from '@reduxjs/toolkit';
import { URL } from '~/lib/api/constants';
import { v4 as uuid } from "uuid";
import { addChat, pushHistory } from '.';
import type { User } from '~/features/Auth/types';
export const fetchChat = createAsyncThunk(
    'chat/fetch',
    async ({ user, token, message }: { user: User, token: string, message: string }, { dispatch }) => {
        // dispatch(setLoading(true));
        if (user.id) {
            dispatch(pushHistory({ chatId: user.id, history: { [uuid()]: { message, time: new Date().toISOString(), user: 'User' } } }));

            const apiEndpoint = URL + '/chat';
            const headers = {
                Authorization: `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            };
            try {
                const response = await fetch(apiEndpoint, {
                    headers,
                    method: 'POST',
                    body: JSON.stringify({ 'message': message })
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch chat');
                }
                const responseData = await response.json();
                // console.log(responseData.answer);
                // dispatch(addChat({ chatId: token, message, user: 'You' }));
                dispatch(pushHistory({ chatId: user.id, history: { [uuid()]: { message: responseData.answer, time: new Date().toISOString(), user: 'Assistance' } } }));
                // dispatch(setLoading(false));
            } catch (error) {
                if (user.id)

                    dispatch(pushHistory({ chatId: user.id, history: { [uuid()]: { message: 'Error from server ', time: new Date().toISOString(), user: 'Assistance' } } }));
                // dispatch(setLoading(false));
            }
        }
    }
);

export const fetchChatHistory = createAsyncThunk(
    'chat/fetchHistory',
    async ({ user, token }: { user: User, token: string }, { dispatch }) => {
        // dispatch(setLoading(true));
        if (user.id) {
            const apiEndpoint = URL + '/chat/history';
            const headers = {
                Authorization: `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            };
            try {
                const response = await fetch(apiEndpoint, {
                    headers,
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch chat');
                }
                const responseData = await response.json();
                // console.log(responseData);
                for (const chat of responseData) {
                    dispatch(pushHistory({
                        chatId: user.id, history: { [chat.id]: { message: chat.message, time: chat.time, user: chat.user } }
                    }));
                }
                // dispatch(setLoading(false));
            } catch (error) {
                if (user.id)

                    dispatch(pushHistory({ chatId: user.id, history: { [uuid()]: { message: 'Error from server ', time: new Date().toISOString(), user: 'Assistance' } } }));
                // dispatch(setLoading(false));
            }
        }
    }
);