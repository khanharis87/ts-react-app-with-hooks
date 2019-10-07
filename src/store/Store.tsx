import React from 'react';
import { IAction, IState, IEpisode } from './interfaces';

const initalState: IState = {
  episodes: [],
  favorites: []
};

function appReducer(state: IState | any = {}, action: IAction) {
  return {
    episodes: episodesReducer(state.episodes, action),
    favorites: favoriteReducer(state.favorites, action)
  };
}
export const Store = React.createContext<IState | any>(initalState);

function episodesReducer(episode: Array<IEpisode> = [], action: IAction) {
  console.log(action, episode);
  switch (action.type) {
    case 'FETCH_DATA':
      return action.payload;
    default:
      return episode;
  }
}

function favoriteReducer(episode: Array<IEpisode> = [], action: IAction) {
  switch (action.type) {
    case 'ADD_FAV':
      return episode.concat(action.payload);
    case 'REMOVE_FAV':
      return episode.filter(item => item !== action.payload);
    default:
      return episode;
  }
}

export function StoreProvider({
  children
}: JSX.ElementChildrenAttribute): JSX.Element {
  const [state, dispatch] = React.useReducer(appReducer, initalState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
}
