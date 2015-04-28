import ajax from 'ic-ajax';

export default Ember.Route.extend({
  model: function(params){
    return ajax({
      url: "https://api.github.com/users/" + params.username + "/events/public"
    }).then(function(gHubRecords){
      var record = gHubRecords[0];
      return record;
    })
  }
});
