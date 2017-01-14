import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    publisher: DS.attr(),
    genre: DS.attr(),
    image: DS.attr(),
    release: DS.attr(),
    description: DS.attr()
});
