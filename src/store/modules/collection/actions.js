import * as types from './mutation-types';

export const setAssets = ({ commit }, data) => {
  commit(types.SET_ASSETS, data);
};

export const addAsset = ({ commit }, data) => {
  commit(types.ADD_ASSET, data);
};

export const updateAsset = ({ commit }, data) => {
  commit(types.UPDATE_ASSET, data);
};

export const deleteAsset = ({ commit }, data) => {
  commit(types.DELETE_ASSET, data);
};

export default {
  setAssets,
  addAsset,
  updateAsset,
  deleteAsset,
};
