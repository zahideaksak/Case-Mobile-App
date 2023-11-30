import {createSlice} from '@reduxjs/toolkit';

interface LocationStateData {
  autoId: number;
  name: string;
  latitude: string;
  longitude: string;
}

interface Locations {
  locations: Array<LocationStateData>;
  autoId: number;
}

const initialState: Locations = {
  locations: [],
  autoId: 0,
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    incrementId: state => {
      state.autoId++;
    },
    addLocation: (state, action) => {
      const {autoId, name, latitude, longitude} = action.payload;
      state.locations = [
        ...state.locations,
        {autoId, name, latitude, longitude},
      ];
    },
    deleteLocation: (state, action) => {
      const newLocations = state.locations.filter(
        location => location.autoId !== action.payload.autoId,
      );
      state.locations = newLocations;
    },
    updateLocation: (state, action) => {
      const {autoId, name, latitude, longitude} = action.payload;
      const index = state.locations.findIndex(
        location => location.autoId === autoId,
      );
      if (index !== -1) {
        state.locations[index] = {autoId, name, latitude, longitude};
      }
    },
  },
});

export const {addLocation, deleteLocation, updateLocation, incrementId} =
  locationSlice.actions;
export default locationSlice.reducer;
