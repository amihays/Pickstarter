window.GenresIndex = React.createClass({
  getInitialState: function () {
    return {genres: [], projects: []}
  },

  _onGenresChange: function () {
    this.setState({genres: GenreStore.all()})
  },

  _onProjectsChange: function () {
    this.setState({projects: ProjectStore.all()})
  },

  componentDidMount: function () {
    GenreStore.addChangeListener(this._onGenresChange);
    ProjectStore.addChangeListener(this._onProjectsChange);
    ApiUtil.fetchGenres();
    ApiUtil.fetchProjects();
  },

  componentWillUnmount: function () {
    GenreStore.removeChangeListener(this._onGenresChange);
    ProjectStore.removeChangeListener(this._onProjectsChange);
  },

  render: function () {
    return(
      <div className='genres-index-page'>
        <div className="jumbotron genres-index-jumbotron">
          <h1 className="genres-index-header">Explore</h1>
          <h4 className="genres-index-subheader">9 diverse genres. { this.state.projects.length } amazing projects.</h4>
        </div>
        <div className="container genres-index">
          <div className="row">
            {this.state.genres.map(function (genre) {
              return <div key={genre.id} className="col-md-4 col-sm-6 col-xs-8 margins-15-px"><GenreIndexItem key={genre.id} genre={genre}/></div>
            })}
          </div>
        </div>
      </div>
    )
  }
});
