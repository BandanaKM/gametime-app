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


bm-4_2-change-back-into-stateless-component
* change counter back to a statless component
* remove all the state methods from here, including the initial score that is being passed from props. 


bm-4_3-communicating-events
* implement new event that allow data to flow upwards through the application. 
* we create an onChange property for counter, and give it an onClick hander
onClick={function() {props.onChange(-1);}}>
* we need this function to be a function that will invoke our props.onClick
* for map, when we call .bind(this) to the function, it would call the same this that we call on our function, to the same this, outside
* come back and review, especially
* be able to trace the flow from counter to players to app, and notice the reason for the delta. 

story:
* a counter can change, add it to the propTypes. we can do this with an onClick and an anonymous function
* player relays this up, another property that is a callback function to relay this information up to the application.
* then we work our way up to the application, where player is instantiated and make this a property of our player.
* we create onScoreChange as a function of the application, then it becomes a property. but we need to give it a delta and an index. 
* we can't pass the index and the delta directly into onScoreChange for some reason, but we can pass it in through an anonymous function, pass this into map, pass this into onScoreChange
* then change the score, and set the state 

bm-4_4-building-the-statistics-component
* build the statistics component. beware, anytime you do a table in a react component, it requires you to add a tbody and a thead
* create a stats component, and a function that allows you to iterate over each player in the function. 
* unlike map, reduce is an iterator function
* 