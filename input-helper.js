
Template.InputHelper.events({
  'change .input-helper-yann' : function (e,t) {
    var data = t.data,
      modifier = {};

    if(data.collection){
      modifier[data.attribute] = e.target.value;
      App.collections[data.collection].update({_id : data.document._id}, {$set : modifier});
    } else if (data.session) {
     Session.set(data.session, e.target.value);
    }
  }
});

Template.InputHelper.helpers({
  value : function (field) {
    var parent_data_context = Template.parentData(),
      collection = parent_data_context && parent_data_context.collection;

    if(collection){
      var obj = this;
      // No property requested
      if (field.indexOf(".") === -1) {
        return obj[field];
      }
      // If a property is request, get descendant property
      var arr = field.split(".");
      while(arr.length && (obj = obj[arr.shift()]));
      return obj;
    } else if (this.session){
     return Session.get(this.session);
    }
  }
});


