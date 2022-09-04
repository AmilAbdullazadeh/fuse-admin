import { createSlice } from '@reduxjs/toolkit';

const navbarSlice = createSlice({
	name: 'navbar',
	initialState: {
		foldedOpen: false,
		mobileOpen: false
	},
	reducers: {
		navbarToggleFolded: (state, action) => {
			state.foldedOpen = !state.foldedOpen;
		},
		navbarOpenFolded: (state, action) => {
			state.foldedOpen = true;
		},
		navbarCloseFolded: (state, action) => {
			state.foldedOpen = false;
		},
		navbarToggleMobile: (state, action) => {
			state.mobileOpen = !state.mobileOpen;
		},
		navbarOpenMobile: (state, action) => {
			state.mobileOpen = true;
		},
		navbarCloseMobile: (state, action) => {
			state.mobileOpen = false;
		}
	}
});

export const {
	navbarToggleFolded,
	navbarOpenFolded,
	navbarCloseFolded,
	navbarToggleMobile,
	navbarOpenMobile,
	navbarCloseMobile
} = navbarSlice.actions;

export default navbarSlice.reducer;
