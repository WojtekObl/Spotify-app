export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  test,
  // token:
  //   "BQBEBkD_ODd9P4Tv13RhZPFpqhyA-cMV3cN3m1cGmq6ObjVylmWYjHQ8DGk5G7eztAGXS-Mlj05BUqdrHJnnJQGysy_bVJbCNTzGNw0pAxbJgBm51Og2FKd0D_hWJyECT3g7XAcxh7znbmooE74U3Hf6UQKHprP6hYppxmDUYNNLBncusum1",
};

const reducer = (state, action) => {
  console.log("action:", action);

  //Action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
