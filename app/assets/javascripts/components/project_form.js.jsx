window.ProjectForm = React.createClass({
  // mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return {
      title: '',
      description: '',
      genre_id: '',
      deadline: '',
      artist_name: '',
      funding_goal: '',
      genres: GenreStore.all()
    };
  },

  handleInputChange: function (param, e) {
    var newState = {};
    newState[param] = e.target.value;
    this.setState(newState);
  },

  componentDidMount: function () {
    GenreStore.addChangeListener(this._onGenresChange);
    ApiUtil.fetchGenres();
  },

  componentWillUnmount: function () {
    GenreStore.removeChangeListener(this._onGenresChange);
  },

  // submitForm: function (e) {
  //   e.preventDefault();
  //   var params = {};
  //   this.state.
  // },

  _onGenresChange: function () {
    this.setState({genres: GenreStore.all()});
  },

  render: function () {
    return(
      <div className='container'>
        <form className='create-project'>
          <div>
            <label htmlFor='project_title'>Project Title</label>
            <input type='text'
                   id='project_title'
                   value={this.state.title}
                   onChange={this.handleInputChange.bind(null, 'title')}/>
          </div>

          <div>
            <label htmlFor='project_artist'>Artist</label>
            <input type='text'
                   id='project_artist'
                   value={this.state.artist_name}
                   onChange={this.handleInputChange.bind(null, 'artist_name')}/>
          </div>

          <div>
            <label htmlFor='project_genre'>Genre</label>
            <select id='project_genre'>
              <option></option>
              {
                this.state.genres.map(function (genre) {
                  return <option key={genre.id} value={genre.id} onChange={this.handleInputChange.bind(null, 'genre_id')}>{genre.name}</option>
                }.bind(this))
              }
            </select>
          </div>

          <div>
            <label htmlFor='project_description'>Description</label>
            <textarea id='project_description'
                      value={this.state.description}
                      onChange={this.handleInputChange.bind(null, 'description')}/>
          </div>

          <div>
            <label htmlFor='project_funding_goal'>Funding Goal (USD)</label>
            <input type='text'
                   id='project_funding_goal'
                   value={this.state.funding_goal}
                   onChange={this.handleInputChange.bind(null, 'funding_goal')}/>
          </div>

          <div>
            <label htmlFor='project_deadline'>Fundraising Deadline</label>
            <input type='date'
                   id='project_deadline'
                   value={this.state.deadline}
                   onChange={this.handleInputChange.bind(null, 'deadline')}/>
          </div>

          <input type='submit' value='Create Project!'/>
        </form>
      </div>
    )
  }
})
