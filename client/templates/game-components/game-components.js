Template.gameComponents.helpers({
  teams: function() {
    return Session.get('teams');
  },
  team: function() {
    return Session.get('team');
  }
});

Template.gameComponents.events({
  'click .team-logo': function(e){
    let teamName = $(e.target).attr('data-team');
    let teams = Session.get('teams');
    newTeam = teams.find(t => t.name == teamName)
    Session.set('team', newTeam);
  }
});