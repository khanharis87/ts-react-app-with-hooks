import React from 'react';
import { IEpisode } from '../store/interfaces';

export default function EpisodesList(props: any): JSX.Element {
  const { toggleFavoriteAction, favorites, episodes, store } = props;
  const { state, dispatch } = store;
  console.log(episodes);
  return episodes.map((episode: IEpisode) => (
    <section key={episode.id} className="episode-box">
      <img
        src={episode.image ? episode.image.medium : ''}
        alt={`Rick & Mort ${episode.name}`}
      />
      <div>{episode.name}</div>
      <section>
        <div>
          Session: {episode.season} Number: {episode.number}
        </div>
        <button onClick={() => toggleFavoriteAction(episode, dispatch, state)}>
          {favorites.includes(episode)
            ? 'Remove from favorites'
            : 'Add to favorites'}
        </button>
      </section>
    </section>
  ));
}
