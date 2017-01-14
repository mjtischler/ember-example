import { test } from 'qunit';
import moduleForAcceptance from 'psnow-ember-example/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list-rentals');

test('should redirect to games route', function (assert) {
    visit('/');

    andThen(function() {
        assert.equal(currentURL(), '/games', 'should redirect automatically');
    });
});

test('should list available games.', function (assert) {
    visit('/');

    andThen(function () {
        assert.equal(find('.game').length, 3, 'should see 3 games');
    });
});

test('should link to information about PS Now.', function (assert) {
    visit('/');

    click('a:contains("About")');

    andThen(function () {
        assert.equal(currentURL(), '/about', 'should navigate to about');
    });
});

test('should link to contact information', function (assert) {
    visit('/');

    click('a:contains("Contact")');

    andThen(function () {
        assert.equal(currentURL(), '/contact', 'should navigate to contact');
    });
});

test('should filter the list of games by genre.', function (assert) {
    visit('/');

    fillIn('.list-filter input', 'action');

    keyEvent('.list-filter input', 'keyup', 69);

    andThen(function () {
      assert.equal(find('.listing').length, 1, 'should show 1 listing');

      assert.equal(find('.listing .genre:contains("Action")').length, 1, 'should contain 1 listing with genre Action');
    });
});

test('should show details for a specific game', function (assert) {
    visit('/rentals');

    click('a:contains("Red Dead Redemption")');

    andThen(function() {
      assert.equal(currentURL(), '/games/red-dead-redemption', 'should navigate to show route');

      assert.equal(find('.show-listing h2').text(), "Red Dead Redemption", 'should list game title');

      assert.equal(find('.description').length, 1, 'should list a description of the game');
    });
});
