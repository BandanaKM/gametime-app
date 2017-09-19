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


Key Takeaways:

1. What is the structure of a stateful component?

class
  proptype
function 
function 
render
  return 
ReactDom.render 


2. How do you require data of a particular shape?

var Application = React.createClass({
  propTypes: {
    title: React.PropTypes.string, 
    players: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.Proptypes.string.isRequired, 
      score: React.Proptypes.number.isRequired, 
      id: React.Proptypes.string.isRequired, 
    }).isRequired,
    )
  },

});

* here, remember we do a React.PropTypes.arrayOf and pass in a React.PropTypes.shape


3. What is the getDefaultProps function?

* this returns an object with the default props of this class. another component lifecyle method. 


4. Why should players be props? because we'll be able to change the number of players as well as change the information within a player, like their score. 