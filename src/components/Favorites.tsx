import React from 'react';
import { Store } from '../store/Store';
import { toggleFavoriteAction } from '../store/Action';
import { IEpisodeListProps } from '../store/interfaces';

const EpisodeList = React.lazy(() => import('./EpisodesList'));

export default function Favorites(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  const props: IEpisodeListProps = {
    favorites: state.favorites,
    episodes: state.favorites,
    store: {
      state,
      dispatch
    },
    toggleFavoriteAction
  };

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className="episode-layout">
        <EpisodeList {...props} />
      </div>
    </React.Suspense>
  );
}
