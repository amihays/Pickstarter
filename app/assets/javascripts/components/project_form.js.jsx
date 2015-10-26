window.ProjectForm = React.createClass({
  mixins: [ReactRouter.History],

  NOT_BLANK: ['title', 'description', 'genre_id', 'deadline', 'artist_name', 'funding_goal'],

  getInitialState: function () {
    return {
      title: '',
      description: '',
      genre_id: '',
      deadline: '',
      artist_name: '',
      funding_goal: '',
      genres: GenreStore.all(),
      errors: {}
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
      if (this.NOT_BLANK.indexOf(key) >= 0 && key !== 'genres') {
        params[key] = this.state[key];
      }
    }.bind(this))
    ApiUtil.createProject(params, this._errorAllBlankFields);
  },

  _onGenresChange: function () {
    this.setState({genres: GenreStore.all()});
  },

  handleInputChange: function (param, e) {
    var newState = {};
    newState['errors'] = this.state.errors || {};
    newState[param] = e.target.value;
    if (e.target.value === '' && this.NOT_BLANK.indexOf(param) >= 0) {
      newState.errors[param] = true;
    } else if (this.NOT_BLANK.indexOf(param) >= 0) {
      newState.errors[param] = false;
    }
    this.setState(newState);
  },

  _uploadImage: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget({
      cloud_name: window.CLOUD_NAME,
      upload_preset: window.IMAGE_UPLOAD_PRESET,
    }, function(error, result) {
      if (error) {
        console.log(error)
      } else {
        this.setState({image_url: result[0]['url']})
      }
    }.bind(this));
  },

  _uploadSoundClip: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget({
      cloud_name: window.CLOUD_NAME,
      upload_preset: window.MUSIC_UPLOAD_PRESET,
    }, function(error, result) {
      if (error) {
        console.log(error)
      } else {
        this.setState({sound_clip_url: result[0]['url']})
      }
    }.bind(this));
  },

  _errorAllBlankFields: function () {
    errors = {};
    this.NOT_BLANK.forEach(function(key) {
      if (this.state[key] === '') {
        errors[key] = true;
      }
    }.bind(this))
    this.setState({errors: errors})
  },

  render: function () {
    return(
      <div className='container project-form-container margins-50-px'>
        <div className="row">
          <Error/>
        </div>
        <form className='create-project' onSubmit={this.submitForm}>
          <div className='form-group'>
            <label htmlFor='project_title'>Project Title</label>
            <input type='text'
                   className={this.state.errors.title ? 'form-control red-outline' : 'form-control' }
                   id='project_title'
                   value={this.state.title}
                   placeholder="Give a name for your project..."
                   onChange={this.handleInputChange.bind(null, 'title')}/>
          </div>

          <div className='form-group'>
            <label htmlFor='project_artist'>Artist</label>
            <input type='text'
                   className={this.state.errors.artist_name ? 'form-control red-outline' : 'form-control' }
                   id='project_artist'
                   placeholder="Artist name..."
                   value={this.state.artist_name}
                   onChange={this.handleInputChange.bind(null, 'artist_name')}/>
          </div>

          <div className='form-group'>
            <label htmlFor='project_genre'>Genre</label>
            <select id='project_genre'
                    className={this.state.errors.genre_id ? 'form-control red-outline' : 'form-control' }
                    onChange={this.handleInputChange.bind(null, 'genre_id')}>
              <option value=''></option>
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
                      className={this.state.errors.description ? 'form-control red-outline' : 'form-control' }
                      placeholder="What will you do with the funds?"
                      value={this.state.description}
                      onChange={this.handleInputChange.bind(null, 'description')}/>
          </div>

          <div className='form-group'>
            <div className="form-row">
              <label htmlFor='project_funding_goal'>Funding Goal (USD)</label>
                <div className="input-group">
                  <span className={this.state.errors.funding_goal ? 'input-group-addon red-left' : 'input-group-addon'}>$</span>
                  <input type="number"
                         value="1000"
                         min="0"
                         step="0.01"
                         data-number-to-fixed="2"
                         data-number-stepfactor="100"
                         className={this.state.errors.funding_goal ? 'form-control currency red-right' : 'form-control currency' }
                         id="project_funding_goal"
                         value={this.state.funding_goal}
                         onChange={this.handleInputChange.bind(null, 'funding_goal')}/>
                </div>
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='project_deadline'>Fundraising Deadline</label>
            <input type='date'
                   id='project_deadline'
                   className={this.state.errors.deadline ? 'form-control red-outline' : 'form-control' }
                   value={this.state.deadline}
                   onChange={this.handleInputChange.bind(null, 'deadline')}/>
          </div>

          <div className='form-group'>
            <label htmlFor='project_image'>Add a Project Image</label>
            <a href="#"
               id='project_image'
               onClick={this._uploadImage}>Upload Image</a>
          </div>

          <div className='form-group'>
            <label htmlFor='project_sound_clip'>Add a Music Clip</label>
            <a href="#"
               id='project_sound_clip'
               onClick={this._uploadSoundClip}>Upload Music Clip</a>
          </div>

          <button type="submit" className="btn btn-default">Create Project!</button>
        </form>
        <button onClick={ this.history.goBack } className="btn btn-default red">Cancel</button>
      </div>
    )
  }
})

// <input type='text'
//        id='project_funding_goal'
//        className='form-control'
//        value={this.state.funding_goal}
//        onChange={this.handleInputChange.bind(null, 'funding_goal')}/>
