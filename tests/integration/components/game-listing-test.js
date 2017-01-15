import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('game-listing', 'Integration | Component | game listing', {
    integration: true
});

test('it renders', function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(hbs`{{game-listing}}`);

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(hbs`
        {{#game-listing}}
          template block text
        {{/game-listing}}
    `);

    assert.equal(this.$().text().trim(), 'template block text');
});

test('should toggle wide class on click', function(assert) {
    assert.expect(3);

    let stubGame = Ember.Object.create({
        image: 'fake.png',
        title: 'test-title',
        publisher: 'test-publisher',
        genre: 'test-type',
        release: 2020
    });

    this.set('gameObj', stubGame);

    this.render(hbs`{{game-listing game=gameObj}}`);
    assert.equal(this.$('.image.wide').length, 0, 'initially rendered small');

    this.$('.image').click();
    assert.equal(this.$('.image.wide').length, 1, 'rendered wide after click');

    this.$('.image').click();
    assert.equal(this.$('.image.wide').length, 0, 'rendered small after second click');
});
