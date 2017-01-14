import Ember from 'ember';

let games = [{
    id: 'red-dead-redemption',
    title: 'Red Dead Redemption',
    publisher: 'Rockstar Games',
    genre: 'Action',
    releaseDate: 2010,
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
}, {
    id: 'poker-night-2',
    title: 'Poker Night 2',
    publisher: 'Telltale Games',
    genre: 'Casual',
    releaseDate: 2013,
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
}, {
    id: 'dark-souls-ii',
    title: 'Dark Souls II',
    publisher: 'Bandai Namco Games',
    genre: 'RPG',
    releaseDate: 2014,
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
}];

export default Ember.Route.extend({
    model() {
        return games;
    }
});
