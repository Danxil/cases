const gamesReducer = (state = {
  games: [],
  actions: [],
}, { type, payload },) => {
  switch (type) {
    case 'INIT_DATA': {
      const { games, actions } = payload;
      return {
        ...state,
        games: games.map((game) => { delete game.gameActions; return game; }),
        actions,
      };
    }
    case 'GAME_EXPIRED': {
      return {
        ...state,
        games: state.games.filter((game) => game.id !== payload.gameId),
      }
    }
    case 'GAME_CREATED': {
      return {
        ...state,
        games: [ ...state.games, payload.game ],
      }
    }
    case 'GAME_SPIN':
    case 'GAME_USER_DISCONNECTED':
    case 'GAME_USER_CONNECTED': {
      return {
        ...state,
        actions: [...state.actions, {type, payload}]
      }
    }
    default:
      return state
  }
}

export default gamesReducer;
