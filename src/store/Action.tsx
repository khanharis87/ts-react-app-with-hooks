import { IState, IEpisode, IAction } from './interfaces';

export const fetchDataAction = async (dispatch: any) => {
  const URL =
    'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
  const data = await fetch(URL);
  const dataJSON = await data.json();

  return dispatch({
    type: 'FETCH_DATA',
    payload: dataJSON._embedded.episodes
  });
};

export const toggleFavoriteAction = (
  episode: Array<IEpisode> | any,
  dispatch: any,
  state: IState
): IAction => {
  const isAlreadyFavorite = state.favorites.includes(episode);

  if (isAlreadyFavorite) {
    return dispatch({
      type: 'REMOVE_FAV',
      payload: episode
    });
  }

  return dispatch({
    type: 'ADD_FAV',
    payload: episode
  });
};
