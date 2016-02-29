Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'gameComponents'});
Router.route('/rules', {name: 'rules'});
Router.route('/cards', {name: 'cards'});
Router.route('/scoreboard', {name: 'scoreboard'});