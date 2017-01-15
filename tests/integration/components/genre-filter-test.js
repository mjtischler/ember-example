import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';
import RSVP from 'rsvp';

moduleForComponent('genre-filter', 'Integration | Component | game filter', {
    integration: true
});

const ITEMS = [{genre: 'Action'}, {genre: 'RPG'}, {genre: 'Casual'}];
const FILTERED_ITEMS = [{genre: 'Action'}];

test('should initially load all games', function (assert) {
    // we want our actions to return promises, since they are potentially fetching data asynchronously
    this.on('filterByGenre', (val) => {
        if (val === '') {
            return RSVP.resolve(ITEMS);
        } else {
            return RSVP.resolve(FILTERED_ITEMS);
        }
    });

    // with an integration test, you can set up and use your component in the same way your application
    // will use it.
    this.render(hbs`
        {{#genre-filter filter=(action 'filterByGenre') as |results|}}
            <ul>
                {{#each results as |item|}}
                    <li class="genre">
                        {{item.genre}}
                    </li>
                {{/each}}
            </ul>
        {{/genre-filter}}
    `);

    // the wait function will return a promise that will wait for all promises
    // and xhr requests to resolve before running the contents of the then block.
    return wait().then(() => {
        assert.equal(this.$('.genre').length, 3);

        assert.equal(this.$('.genre').first().text().trim(), 'Action');
    });
});

test('should update with matching games', function (assert) {
    this.on('filterByGenre', (val) => {
        if (val === '') {
            return RSVP.resolve(ITEMS);
        } else {
            return RSVP.resolve(FILTERED_ITEMS);
        }
    });

    this.render(hbs`
        {{#genre-filter filter=(action 'filterByGenre') as |results|}}
            <ul>
                {{#each results as |item|}}
                <li class="genre">
                    {{item.genre}}
                </li>
                {{/each}}
            </ul>
        {{/genre-filter}}
    `);

    // The keyup event here should invoke an action that will cause the list to be filtered
    this.$('.genre-filter input').val('Act').keyup();

    return wait().then(() => {
        assert.equal(this.$('.genre').length, 1);

        assert.equal(this.$('.genre').text().trim(), 'Action');
    });
});
