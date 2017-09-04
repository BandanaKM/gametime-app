bm-2_5-loops
title: React.PropTypes.string,
players: React.PropTypes.arrayOf(React.PropTypes.shape({
  name: React.PropTypes.string.isRequired, })).isRequired,
  score: React.PropTypes.string.isRequired, })).isRequired,
}).isRequired,

{props.players.map(function(player) {
  return <Player={player.name} score={player.score}>
})}

iterate over each of the players in props.players. Our props property will map an object onto a player component. what will ultimately be returns in the outer expression is an array of player componenets. 
we need an id though. 


bm-3_1-component-classes
add state
translate a functional component into a componenet class by using this since props is a property of the class itself, having the render method, and making proptypes a property of the object