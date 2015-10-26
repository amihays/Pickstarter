window.EditForm = React.createClass({
  mixins: [ReactRouter.History],

  NOT_BLANK: ['title', 'description', 'genre_id', 'deadline', 'artist_name', 'funding_goal'],

  _getStateFromStore: function () {
    var project = ProjectStore.find(parseInt(this.props.params.id)) || {};
    return {
      title: project.title,
      description: project.description,
      genre_id: project.genre_id,
      deadline: project.deadline,
      artist_name: project.artist_name,
      funding_goal: project.funding_goal,
      image_url: project.image_url,
      sound_clip_url: project.sound_clip_url,
      genres: GenreStore.all()
    };
  },

  getInitialState: function () {
    var project = ProjectStore.find(parseInt(this.props.params.id)) || {};
    return {
      title: project.title,
      description: project.description,
      genre_id: project.genre_id,
      deadline: project.deadline,
      artist_name: project.artist_name,
      funding_goal: project.funding_goal,
      image_url: project.image_url,
      sound_clip_url: project.sound_clip_url,
      genres: GenreStore.all(),
      modalIsOpen: false,
      errors: {}
    };
  },

  componentDidMount: function () {
    ProjectStore.addChangeListener(this._onProjectsChange);
    GenreStore.addChangeListener(this._onGenresChange);
    ApiUtil.fetchProject(parseInt(this.props.params.id));
    ApiUtil.fetchGenres();
  },

  componentWillUnmount: function () {
    GenreStore.removeChangeListener(this._onGenresChange);
    ProjectStore.removeChangeListener(this._onProjectsChange);
  },

  submitForm: function (e) {
    e.preventDefault();
    var params = {};
    Object.keys(this.state).forEach(function(key) {
      if ((this.NOT_BLANK.indexOf(key) >= 0 || key === 'image_url' ||
         key === 'sound_clip_url') && key !== 'genres') {
        params[key] = this.state[key];
      }
    }.bind(this))
    ApiUtil.updateProject(params, this.props.params.id, this._errorAllBlankFields);
  },

  genre: function () {
    var result = null;
    if (this.state.genres && this.state) {
      this.state.genres.forEach(function(genre) {
        if (genre.id === this.state.genre_id) {
          result = genre.id;
        }
      }.bind(this))
    }
    return result;
  },

  _onGenresChange: function () {
    this.setState({genres: GenreStore.all()});
  },

  _onProjectsChange: function () {
    this.setState(this._getStateFromStore());
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

  _errorAllBlankFields: function () {
    errors = {};
    this.NOT_BLANK.forEach(function(key) {
      if (this.state[key] === '') {
        errors[key] = true;
      }
    }.bind(this))
    this.setState({errors: errors})
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

  openConfirm: function () {
    this.setState({modalIsOpen: true});
  },

  closeConfirm: function () {
    this.setState({modalIsOpen: false})
  },

  delete: function () {
    ApiUtil.deleteProject(this.props.params.id);
  },

  render: function () {
    var modal = '';
    if (this.state.modalIsOpen) {
      modal = (
        <ConfirmModal close={this.closeConfirm} delete={this.delete}/>
      );
    }

    var imageCheck = "";
    if (this.state.image_url) {
      imageCheck = <span className="form-checkmark"><h3>&#10004;</h3></span>
    }

    var musicCheck = "";
    if (this.state.sound_clip_url) {
      musicCheck = <span className="form-checkmark"><h3>&#10004;</h3></span>
    }

    debugger;

    return(
      <div className='container project-form-container margins-50-px'>
        { modal }
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
                    value={this.genre()}
                    onChange={this.handleInputChange.bind(null, 'genre_id')}>
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
                <div className={this.state.errors.funding_goal ? "input-group funding-goal-input-group red-outline" : "input-group funding-goal-input-group"}>
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
              { imageCheck }
          </div>

          <div className='form-group'>
            <label htmlFor='project_sound_clip'>Add a Music Clip</label>
            <a href="#"
               id='project_sound_clip'
               onClick={this._uploadSoundClip}>Upload Music Clip</a>
             { musicCheck }
          </div>

          <button type="submit" className="btn btn-default">Update Project!</button>
        </form>
        <button onClick={ this.openConfirm } className="btn btn-default red">Delete Project</button>
        <button onClick={ this.history.goBack } className="btn btn-default transparent">Cancel</button>
      </div>
    )
  }
})
