window.ProjectForm = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return {
      title: '',
      description: '',
      genre_id: '',
      deadline: '',
      artist_name: '',
      funding_goal: '',
      genres: GenreStore.all(),
    };
  },

  componentDidMount: function () {
    GenreStore.addChangeListener(this._onGenresChange);
    ApiUtil.fetchGenres();
  },

  componentWillUnmount: function () {
    GenreStore.removeChangeListener(this._onGenresChange);
  },

  submitForm: function (e) {
    e.preventDefault();
    var params = {};

    Object.keys(this.state).forEach(function(key) {
      if (key !== 'genres') {
        params[key] = this.state[key];
      }
    }.bind(this))
    ApiUtil.createProject(params);
  },

  _onGenresChange: function () {
    this.setState({genres: GenreStore.all()});
  },

  handleInputChange: function (param, e) {
    var newState = {};
    newState[param] = e.target.value;
    this.setState(newState);
  },

  render: function () {
    return(
      <div className='container project-form-container'>
        <div className="row">
          <Error/>
        </div>
        <form className='create-project' onSubmit={this.submitForm}>
          <div className='form-group'>
            <label htmlFor='project_title'>Project Title</label>
            <input type='text'
                   className='form-control'
                   id='project_title'
                   value={this.state.title}
                   onChange={this.handleInputChange.bind(null, 'title')}/>
          </div>

          <div className='form-group'>
            <label htmlFor='project_artist'>Artist</label>
            <input type='text'
                   className='form-control'
                   id='project_artist'
                   value={this.state.artist_name}
                   onChange={this.handleInputChange.bind(null, 'artist_name')}/>
          </div>

          <div className='form-group'>
            <label htmlFor='project_genre'>Genre</label>
            <select id='project_genre' className='form-control' onChange={this.handleInputChange.bind(null, 'genre_id')}>
              <option></option>
              {
                this.state.genres.map(function (genre) {
                  return <option key={genre.id} value={genre.id}>{genre.name}</option>
                }.bind(this))
              }
            </select>
          </div>

          <div className='form-group'>
            <label htmlFor='project_description'>Description</label>
            <textarea id='project_description'
                      className='form-control'
                      value={this.state.description}
                      onChange={this.handleInputChange.bind(null, 'description')}/>
          </div>

          <div className='form-group'>
            <label htmlFor='project_funding_goal'>Funding Goal (USD)</label>
            <input type='text'
                   id='project_funding_goal'
                   className='form-control'
                   value={this.state.funding_goal}
                   onChange={this.handleInputChange.bind(null, 'funding_goal')}/>
          </div>

          <div className='form-group'>
            <label htmlFor='project_deadline'>Fundraising Deadline</label>
            <input type='date'
                   id='project_deadline'
                   className='form-control'
                   value={this.state.deadline}
                   onChange={this.handleInputChange.bind(null, 'deadline')}/>
          </div>

          <button type="submit" className="btn btn-default">Create Project!</button>
        </form>
      </div>
    )
  }
})
