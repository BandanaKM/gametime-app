PLAYERS = [
  {
    name: "Bandana Kaur",
    score: 34,
    id: 1,
  },
  {
    name: "Narinder Singh",
    score: 35,
    id: 2,
  },
  {
    name: "Hazuri Kaur",
    score: 46,
    id: 3,
  }
];

function Header (props) {
  return (
    <div className="header">
      <h1>{ props.title }</h1>
    </div>  
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
}


function Counter(props) {
  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={function() {props.onChange(-1);}}> - </button>
      <div className="counter-score"> {props.score} </div>
      <button className="counter-action increment" onClick={function() {props.onChange(1);}}> + </button>
    </div>
 );

  Counter.propTypes = {
    score: React.propTypes.number.isRequired,
    onChange: React.propTypes.func.isRequired,
  }
}

function Player(props) {
  return (
    <div className="player">
      <div className="player-name">
        {props.name}
      </div>
      <div className="player-score">
        <Counter score={props.score} onChange={props.onScoreChange}/>
      </div>
    </div>
  );
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
  onScorechange: React.PropTypes.func.isRequired,
}


const Application = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired, })).isRequired,
        score: React.PropTypes.string.isRequired, })).isRequired,
        id: React.PropTypes.number.isRequired,
    })).isRequired,
  },

  getDefaultProps: function() {
    return {
      title: "Scoreboard",
    }
  },

  getInitialState: function() {
    return: this.props.initialPlayers,
  },

  onScoreChange: function(index, delta) {
    console.log('onScoreChange', index, delta));
    this.state.players[index].score += delta;
    this.setState(this.state);
  },

  render: function() {
    return (
      <div className="scoreboard">
        <Header title={this.props.title }/> 
        
        <div className="players">
          {this.state.players.map(function(player) {
            return 
            <Player
            onScoreChange={function() {this.onScoreChange(index, delta).bind(this)}}
            name={player.name} 
            score={player.score} 
            key={player.id}>
          }.bind.(this)}
          </div>

          <div>
        </div>
      </div>
    );
  }
});



ReactDOM.render(<Application title="Game Timer"/> initialPlayers={PLAYERS}, document.getElementById('container'));