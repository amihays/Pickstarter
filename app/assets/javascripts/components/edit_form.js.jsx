window.EditForm = React.createClass({
  mixins: [ReactRouter.History],

  _getStateFromStore: function () {
    var project = ProjectStore.find(parseInt(this.props.params.id)) || {};
    return {
      title: project.title,
      description: project.description,
      genre_id: project.genre_id,
      deadline: project.deadline,
      artist_name: project.artist_name,
      funding_goal: project.funding_goal,
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
      genres: GenreStore.all(),
      modalIsOpen: false
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
      if (key !== 'genres') {
        params[key] = this.state[key];
      }
    }.bind(this))
    ApiUtil.updateProject(params, this.props.params.id);
  },

  genre: function () {
    if (this.state.genres && this.state) {
      this.state.genres.forEach(function(genre) {
        if (genre.id === this.state.genre_id) {
          return genre.title;
        }
      }.bind(this))
    } else {
      return '';
    }
  },

  _onGenresChange: function () {
    this.setState({genres: GenreStore.all()});
  },

  _onProjectsChange: function () {
    this.setState(this._getStateFromStore());
  },

  handleInputChange: function (param, e) {
    var newState = {};
    newState[param] = e.target.value;
    this.setState(newState);
  },

  _uploadImage: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget({
      cloud_name: 'daqcetxc6',
      upload_preset: 'pscd81e7',
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
      cloud_name: 'daqcetxc6',
      upload_preset: 'ohbj4mzd',
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

    return(
      <div className='container project-form-container margins-50-px'>
        { modal }
        <div className="row">
          <Error/>
        </div>
        <button onClick={ this.openConfirm } className="btn btn-default red">Delete</button>
        <form className='create-project' onSubmit={this.submitForm}>
          <div className='form-group'>
            <label htmlFor='project_title'>Project Title</label>
            <input type='text'
                   className='form-control'
                   id='project_title'
                   value={this.state.title}
                   placeholder="Give a name for your project..."
                   onChange={this.handleInputChange.bind(null, 'title')}/>
          </div>

          <div className='form-group'>
            <label htmlFor='project_artist'>Artist</label>
            <input type='text'
                   className='form-control'
                   id='project_artist'
                   placeholder="Artist name..."
                   value={this.state.artist_name}
                   onChange={this.handleInputChange.bind(null, 'artist_name')}/>
          </div>

          <div className='form-group'>
            <label htmlFor='project_genre'>Genre</label>
            <select id='project_genre'
                    className='form-control'
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
                      className='form-control'
                      placeholder="What will you do with the funds?"
                      value={this.state.description}
                      onChange={this.handleInputChange.bind(null, 'description')}/>
          </div>

          <div className='form-group'>
            <div className="form-row">
              <label htmlFor='project_funding_goal'>Funding Goal (USD)</label>
                <div className="input-group">
                  <span className="input-group-addon">$</span>
                  <input type="number"
                         value="1000"
                         min="0"
                         step="0.01"
                         data-number-to-fixed="2"
                         data-number-stepfactor="100"
                         className="form-control currency"
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
                   className='form-control'
                   value={this.state.deadline}
                   onChange={this.handleInputChange.bind(null, 'deadline')}/>
          </div>

          <div className='form-group'>
            <label htmlFor='project_image'>Add a Project Image</label>
            <a href="#"
               id='project_image'
               onClick={this._uploadImage}>Upload File</a>
          </div>

          <div className='form-group'>
            <label htmlFor='project_sound_clip'>Add a Music Clip</label>
            <a href="#"
               id='project_sound_clip'
               onClick={this._uploadSoundClip}>Upload Music Clip</a>
          </div>

          <button type="submit" className="btn btn-default">Update Project!</button>
        </form>
        <button onClick={ this.history.goBack } className="btn btn-default red">Cancel</button>
      </div>
    )
  }
})
