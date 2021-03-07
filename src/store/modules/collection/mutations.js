import { SET_ASSETS, ADD_ASSET, UPDATE_ASSET, DELETE_ASSET } from './mutation-types';

export default {
  [SET_ASSETS](state, data) {
    state.assets = data;
  },

  [ADD_ASSET](state, data) {
    const isPushAsset =
      !state.assets.length || state.assets.every(asset => asset.data[0].nasa_id !== data.data[0].nasa_id);

    if (isPushAsset) {
      state.assets.push(data);
      return;
    }

    for (const assetIndex in state.assets) {
      const asset = state.assets[assetIndex];
      if (asset.data[0].nasa_id === data.data[0].nasa_id) {
        state.assets.splice(assetIndex, 1, data);
        break;
      }
    }
  },

  [UPDATE_ASSET](state, data) {
    for (const assetIndex in state.assets) {
      const asset = state.assets[assetIndex];
      if (asset.data[0].nasa_id === data.data[0].nasa_id) {
        state.assets.splice(assetIndex, 1, data);
        break;
      }
    }
  },

  [DELETE_ASSET](state, data) {
    state.assets = state.assets.filter(asset => asset.data[0].nasa_id !== data.data[0].nasa_id);
  },
};
