export default function() {
    this.namespace = '/api';

    this.get('/games', function() {
        return {
            data: [{
                type: 'games',
                id: 'Red Dead Redemption',
                attributes: {
                    publisher: 'Rockstar Games',
                    genre: 'Action',
                    release: 2010,
                    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
                }
            }, {
                type: 'games',
                id: 'Poker Night 2',
                attributes: {
                    publisher: 'Telltale Games',
                    genre: 'Casual',
                    release: 2013,
                    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
                }
            }, {
                type: 'games',
                id: 'Dark Souls II',
                attributes: {
                    publisher: 'Bandai Namco Games',
                    genre: 'RPG',
                    release: 2014,
                    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
                }
            }]
        };
    });
}
