window.GenreShow = React.createClass({
  getStateFromStore: function () {
    var genre = GenreStore.find(parseInt(this.props.params.id)) || {};
    return {genre: genre};
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  _onChange: function () {
    this.setState(this.getStateFromStore);
  },

  componentDidMount: function () {
    GenreStore.addGenreChangeListener(this._onChange);
    ApiUtil.fetchGenre(parseInt(this.props.params.id));
  },

  componentWillUnmount: function () {
    GenreStore.removeChangeListener(this._onChange);
  },

  render: function () {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1 className="genre-header">{this.state.genre.name}</h1>
        </div>
      </div>
    )
  }
})

// <ul>
//   {
//     this.state.genre.projects.map(function(project){
//       return (<li>{project.name}</li>);
//     })
//   }
// </ul>
