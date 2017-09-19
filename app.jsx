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

var nextId: 4;


const AddPlayerForm(React.) {
  propTypes: {
    onAdd: React.PropTypes.func.isRequired,
  },

  getInitialState: function {
    return {
      name: "",
    }
  },

  onNameChange: function {
   // console.log('onNameChange', e.target.value);
    this.setState({name: e.target.value});
  },

  onSubmit: function(e) {
    e.preventDefault();ow
    this.props.onAdd(this.state.name);
    this.setState({name: ""});
  },

  render: function() {
    return(
      <div className="add-player-form">
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.name} onChange={this.onNameChange}/> 
          <input type="submit" value="Add Player" /> 
        </form>
      </div>
    )
  }
}


function Stats(props) {
  var totalPlayers = props.players.length;
  var totalPoints = props.players.reduce(function(total, player) {
    return total + player.score;
  }, 0);
  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Players:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody> 
    </table>
  )
}

Stats.propTypes = {
  players: React.PropTypes.array.isRequired
}

function Header (props) {
  return (
    <div className="header">
      <Stats players={props.players}/>
      <h1>{ props.title }</h1>
    </div>  
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  players: React.PropTypes.array.isRequired,
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
        <a className="remove-player" onClick={props.onRemove}>x</a>
        {props.name}
      </div>
      <div className="player-score">
        <Counter score={props.score} onChange={props.onScoreChange}/>
      </div>
        <AddPlayerForm>
    </div>
  );
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
  onScorechange: React.PropTypes.func.isRequired,
  onRemove: React.PropTypes.func.isRequired,
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

  // this makes our props state. 

  onScoreChange: function(index, delta) {
    console.log('onScoreChange', index, delta));
    this.state.players[index].score += delta;
    this.setState(this.state);
  },

  onPlayerAdd: function(name) {
    console.log('Player added', name);   
    this.state.players.push({
      name: "",
      score: 0,
      id: nextId,
    })
    this.setState(this.state);
    nextId += 1;
  },

  onRemovePlayer: function(index) {
    this.state.players.splice(index, 1);
    this.setState(this.state);
  }
  render: function() {
    return (
      <div className="scoreboard">
        <Header title={this.props.title} player={this.state.players}/> 
        
        <div className="players">
          {this.state.players.map(function(player) {
            return 
            <Player
            onScoreChange={function() {this.onScoreChange(index, delta).bind(this)}}
            onRemove={function(){this.onRemovePlayer(index)}.bind(this)}
            name={player.name} 
            score={player.score} 
            key={player.id}>
          }.bind.(this)}
          </div>
            <AddPlayerForm onAdd={this.onPlayerAdd}>
          <div>
        </div>
      </div>
    );
  }
});



ReactDOM.render(<Application title="Game Timer"/> initialPlayers={PLAYERS}, document.getElementById('container'));