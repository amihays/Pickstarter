window.ProjectShow = React.createClass({
  getStateFromStore: function () {
    var project = ProjectStore.find(parseInt(this.props.params.id)) || {};
    return {project: project, modalIsOpen: false};
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  _onProjectsChange: function () {
    this.setState(this.getStateFromStore());
  },

  deadlinePassed: function () {
    return (new Date(this.state.project.deadline) < new Date());
  },

  componentDidMount: function () {
    window.scrollTo(0,0);
    ProjectStore.addChangeListener(this._onProjectsChange);
    ApiUtil.fetchProject(parseInt(this.props.params.id));
  },

  componentWillUnmount: function () {
    ProjectStore.removeChangeListener(this._onProjectsChange);
  },

  handleEditButtonClick: function () {
    this.props.history.pushState(null, '/projects/' + this.state.project.id + '/edit', {});
  },

  openContribute: function () {
    this.setState({modalIsOpen: true});
  },

  closeContribute: function () {
    this.setState({modalIsOpen: false});
  },

  userBackedProject: function () {
    var result = false;
    if (this.state.project.comments) {
      this.state.project.comments.forEach(function(comment) {
        
      })
    }
  },
  //
  // render: function () {
  //   if (!this.state.project.contributors) {
  //     return this.renderLoading();
  //   } else {
  //     return this.renderContent();
  //   }
  // },
  //
  // renderLoading: function () {
  //   return <Loading/>
  // },

  render: function () {
    var style = {};
    if (this.state.project.image_url) {
      style = {
        backgroundImage: 'url(' + this.state.project.image_url + ')'
      };
    }

    var modal = '';
    if (this.state.modalIsOpen) {
      modal = (
        <ContributeModal close={this.closeContribute} project={this.state.project}/>
      );
    }

    var musicClip = '';
    if (this.state.project.sound_clip_url) {
      musicClip = (
        <div className='row'>
          <div className='col-sm-4'>
            <h3>Listen now</h3>
          </div>
          <div className='col-sm-7 project-music-clip'>
            <audio className='audio-controls' controls='controls' src={this.state.project.sound_clip_url} type="audio/mpeg">Your browser doesn't support the audio element</audio>
          </div>
        </div>
      )
    }

    var commentForm = '';

    var projectImageStyle = {};
    if (this.state.project.image_url) {
      projectImageStyle = { backgroundImage: 'url(' + this.state.project.image_url + ')' };
    }

    return(
      <div className='container project-show-container'>
        { modal }
        <div className='row'>
          <div className='col-sm-8 col-sm-offset-2'>
            <div className='project-title'>
              <h1 className='project-title'>{this.state.project.title}</h1>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-8 col-sm-offset-2'>
            <div className='project-title'>
              <h4 className='project-artist'>by <b>{this.state.project.artist_name}</b></h4>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-7 project-show-image-container' style={projectImageStyle}></div>
          <div className='col-sm-4'>
            <ProjectShowSidebar project={this.state.project} handleEditButtonClick={this.handleEditButtonClick} openContribute={this.openContribute}/>
          </div>
        </div>
        { musicClip }
        <div className='row'>
          <div className='col-sm-4'>
            <h3>About this project</h3>
          </div>
          <div className='col-sm-7'>
            <h3 className='grey project-description'>{this.state.project.description}</h3>
          </div>
        </div>
      </div>
    )
  }
});

        // <div className='row'>
        //   <div className='col-sm-4'>
        //     {editButton}
        //   </div>
        // </div>
            // <img className='project-show-image' src={this.state.project.image_url} />

// <div className='row'>
//   <div className='col-sm-4'>
//     <h3>Artist</h3>
//   </div>
//   <div className='col-sm-8 project-artist'>
//     <h3 className='grey'>{this.state.project.artist_name}</h3>
//   </div>
// </div>
//
// <div className='row'>
//   <div className='col-sm-4'>
//     <h3>Funding Goal</h3>
//   </div>
//   <div className='col-sm-7 project-funding-goal'>
//     <h3 className='grey'>${this.state.project.funding_goal}</h3>
//   </div>
// </div>
