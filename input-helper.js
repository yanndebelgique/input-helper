Template.InputHelper.events ({
  'change .input-helper-yann': function (e, t) {
    var data = t.data,
      modifier = {},
      value;

    if (data.options) {
      value = [];
      t.$ ('input[type=checkbox]').each (function () {
        if (this.checked) {
          value.push ($ (this).val ());
        }
      });
    } else {
      value = e.target.value;
    }

    if (data.collection) {
      modifier[data.attribute] = value;
      App.collections[data.collection].update ({_id: data.document._id}, {$set: modifier});
    } else if (data.session) {
      Session.set (data.session, value);
    }
  }
});



Template.InputHelper.helpers ({
  selected_value: function (name) {
    var data = Template.parentData ();
    return name === Session.get (data.session) ? 'selected' : '';
  },
  value: function (field) {
    var parent_data_context = Template.parentData (),
      collection = parent_data_context && parent_data_context.collection;

    if (collection) {
      return this[field];
    } else if (this.session) {
      return Session.get (this.session);
    }
  },
  selected : function (value) {
    var data = Template.parentData();
    return _.contains(Session.get(data.session), value) ? 'checked' : '';
  },
  isBase: function () {
    var data = this;
    return data && _.isUndefined (data.select) && _.isUndefined (data.options);
  }
});

Template.InputHelper.onRendered (function () {
  var data = this.data;
  if (data.type === 'date-time') {
    this.$ ('input').datetimepicker ({
      format: 'DD/MM/YYYY'
    });
  }
});


