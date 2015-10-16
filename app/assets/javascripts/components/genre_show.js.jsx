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
    GenreStore.addChangeListener(this._onChange);
    // ApiUtil.fetchGenres();
    ApiUtil.fetchGenre(parseInt(this.props.params.id));
  },

  componentWillUnmount: function () {
    GenreStore.removeChangeListener(this._onChange);
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchGenre(parseInt(newProps.params.id));
    var genre = GenreStore.find(parseInt(newProps.params.id)) || {};
    this.setState({genre: genre});
  },

  render: function () {
    var projects;
    if (this.state.genre.projects){
      projects = this.state.genre.projects.map(function(project) {
        return <div key={project.id} className="col-md-4 col-sm-6 col-xs-8"><ProjectsIndexItem key={project.id} project={project}/></div>
      });
    }
    return(
      <div className="container">
        <div className="jumbotron genre-header-jumbotron">
          <h1 className="genre-header">{this.state.genre.name}</h1>
        </div>
        <div className="row">
          {projects}
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
