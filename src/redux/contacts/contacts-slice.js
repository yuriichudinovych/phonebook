import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  removeContact,
} from './contacts-operations';

import {
  pendingCallback,
  rejectedCallback,
} from '../../services/helpers/redux';

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: pendingCallback,

    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [fetchContacts.rejected]: rejectedCallback,
    [addContact.pending]: pendingCallback,
    [addContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
    },
    [addContact.rejected]: rejectedCallback,
    [removeContact.pending]: pendingCallback,
    [removeContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(item => item.id !== payload);
    },
    [removeContact.rejected]: rejectedCallback,
  },
});

export default contactsSlice.reducer;
