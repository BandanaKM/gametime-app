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


bm-3_2-state
* we add getInitialState to our component class
* we change props to state
* we make sure props isn't being passed down from player anymore

bm-3_3-updating state
* we add an event to increment the score when someonepressed the button
* we use setState, to take the current state to increment the score
* this then tells the class to rerender itself. we need to use setState for this 
* bind.this() in all component classes, it will automatically bind the method to the instance, so we don't need to do this for it. 
* when using a component class, you don't need to use .bind to make sure a method is correctly bound to the instance
* don't understand: <Counter initialScore={props.score}/> around 8:30
