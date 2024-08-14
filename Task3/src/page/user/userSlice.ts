import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUser } from '../../service/post';
import { RootState } from '../../redux/store';
import { IUser } from '../../type/user.type';

interface UserListState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  items: IUser[];
  error?: string;
}

const initialState: UserListState = {
  status: 'idle',
  items: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      state.items.unshift(action.payload);
      state.status = 'succeeded';
    },
    deleteUser: (state, action: PayloadAction<IUser>) => { 
        state.status = 'succeeded';
            let item = action.payload;
            state.items = state.items?.filter((el) => el.id != item.id)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(list.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(list.fulfilled, (state, action: PayloadAction<IUser[]>) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(list.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const list = createAsyncThunk<IUser[], void, { rejectValue: string }>(
    'list', async (_, { rejectWithValue }) => {
      try {
        const response = await getUser();
        return response;
      } catch (ex) {
        return rejectWithValue('Failed to fetch users');
      }
    }
  );

export const { addUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
