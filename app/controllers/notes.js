import Ember from "ember";

export default Ember.ArrayController.extend({
  reversedNotes: function () {

  },

  actions: {
    newNote: function() {
      var body = this.get('noteBody');
      var title = this.get('noteTitle');
      if (body || title) {
        var note = this.store.createRecord('note', { body: body, title: title });
        this.set('noteBody', '');
        this.set('noteTitle', '');
        note.save();
        this.flashMessage('Huzzah!', '', 1500);
      }
    },

    deleteNote: function(note) {
      note.deleteRecord();
      note.save();
      this.flashMessage('Kaput!', '', 1500);
    }

  }
});
