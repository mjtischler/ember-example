import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        filterByGenre(param) {
            if (param !== '') {
                return this.get('store').query('game', { genre: param });
            } else {
                return this.get('store').findAll('game');
            }
        }
    }
});
