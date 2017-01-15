import Ember from 'ember';

const gamePlayerTypes = [
    'Multiplayer 1-2',
    'Multiplayer 1-16'
];

export function gamePlayerType([type]/*, hash*/) {
  if (gamePlayerTypes.includes(type)) {
    return type;
  }

  return 'Single Player';
}

export default Ember.Helper.helper(gamePlayerType);
