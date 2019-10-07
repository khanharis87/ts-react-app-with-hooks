import React from 'react';
import { IEpisodeListProps } from '../store/interfaces';
import { Store } from '../store/Store';
import { fetchDataAction, toggleFavoriteAction } from '../store/Action';

const EpisodeList = React.lazy(() => import('./EpisodesList'));

export default function Home(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props: IEpisodeListProps = {
    store: {
      state,
      dispatch
    },
    toggleFavoriteAction,
    favorites: state.favorites,
    episodes: state.episodes
  };

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <section className="episode-layout">
          <EpisodeList {...props} />
        </section>
      </React.Suspense>
    </React.Fragment>
  );
}
