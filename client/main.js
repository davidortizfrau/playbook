let teams = [
  {name: 'noTeam', logo: 'noteam.svg', playmat: 'noteam.png', colors: {primary: '0f98d5', secondary: 'dd6226'}},
  {name: 'broncos', logo: 'Denver_Broncos_logo.svg', playmat: 'broncos.svg', colors: {primary: '12264a', secondary: 'dd6226'}},
  {name: 'patriots', logo: 'New_England_Patriots_logo.svg', playmat: 'patriots.svg', colors: {primary: '13264b', secondary: 'c12026'}},
  {name: 'redskins', logo: 'Washington_Redskins_logo.svg', playmat: 'redskins.svg', colors: {primary: '57211b', secondary: 'f0c81a'}},
  {name: 'panthers', logo: 'Carolina_Panthers_logo_2012.svg', playmat: 'panthers.png', colors: {primary: '0f98d5', secondary: '000000'}}
];

Session.set('teams', teams);
Session.set('team', teams[0]);
