export type Dispatch = React.Dispatch<IAction>;

export interface IAction {
  type: string;
  payload: Array<IEpisode> | any;
}

export interface IState {
  episodes: Array<IEpisode>;
  favorites: Array<IEpisode>;
}

export interface IEpisode {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: {
    medium: string;
    original: string;
  };
  name: string;
  number: number;
  runtime: number;
  season: number;
  summary: string;
  url: string;
  _links: Object;
}

export interface IEpisodeListProps {
  store: {
    state: IState;
    dispatch: Dispatch;
  };
  toggleFavoriteAction: (
    episode: IEpisode,
    dispatch: Dispatch,
    state: IState
  ) => IAction;
  favorites: Array<IEpisode>;
  episodes: Array<IEpisode>;
}
