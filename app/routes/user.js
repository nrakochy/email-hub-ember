import ajax from 'ic-ajax';

export default Ember.Route.extend({
  model: function(params){
    return ajax({
      url: "https://api.github.com/users/" + params.username + "/events/public",
      type: "get"
    }).then(function(responses){
      return responses;
    })
  }
});
