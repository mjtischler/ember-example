export default function() {
    this.namespace = '/api';

    let games = [{
            type: 'games',
            id: 'red-dead-redemption',
            attributes: {
                title: 'Red Dead Redemption',
                publisher: 'Rockstar Games',
                genre: 'Action',
                release: 2010,
                players: 'Multiplayer 1-16',
                image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
                description: 'Take John Marston on a journey of revenge across the old west.'
            }
        }, {
            type: 'games',
            id: 'poker-night-2',
            attributes: {
                title: 'Poker Night 2',
                publisher: 'Telltale Games',
                genre: 'Casual',
                release: 2013,
                players: 'Single Player',
                image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
                description: 'Join GladOS, Sam and Max, and many more for witty banter while playing either Omaha or Texas Hold \'Em'
            }
        }, {
            type: 'games',
            id: 'dark-souls-ii',
            attributes: {
                title: 'Dark Souls II',
                publisher: 'Bandai Namco Games',
                genre: 'RPG',
                release: 2014,
                players: 'Multiplayer 1-2',
                image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
                description: 'Pretty much the hardest game ever. Prepare to die. Often.'
            }
        }];

    this.get('/games', function(db, request) {
        if(request.queryParams.genre !== undefined) {
            let filteredGames = games.filter(function(i) {
                return i.attributes.genre.toLowerCase().indexOf(request.queryParams.genre.toLowerCase()) !== -1;
            });

            return { data: filteredGames };
        } else {
            return { data: games };
        }
    });

    // Find and return the provided game from our games list above
    this.get('/games/:id', function (db, request) {
        return { data: games.find((rental) => request.params.id === rental.id) };
    });
}
