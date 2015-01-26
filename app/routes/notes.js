import Ember from 'ember';

export default Ember.Route.extend({

 model: function() {
    return this.store.find('note');
  }

});


// added below per instructions.  supposed to keep above?  who knows!
