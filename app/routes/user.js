import ajax from 'ic-ajax';

export default Ember.Route.extend({
  model: function(params){
    return ajax({
      url: "https://api.github.com/users/" + params.username + "/events/public",
      type: "get"
    }).then(function(responses){
      var records = [];
      responses.forEach(function(response){
        var recordArr = response.payload.commits;
        if (recordArr !== undefined && typeof(recordArr === Array)){
          records.push(recordArr[0]);
        }
      })
      return records
    }).then(function(records){
      var emails = [];
      records.forEach(function(record){
        var respObj = record.author.email;
        /* Email exists */
        if (typeof(respObj !== undefined)){
          /* Email is unique */
          if (emails.indexOf(respObj) === -1){
            emails.push(respObj);
          }
        }
      });
      console.log(emails);
      return emails;
    })
  }
});
