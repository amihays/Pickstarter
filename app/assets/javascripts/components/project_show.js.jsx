window.ProjectShow = React.createClass({
  getStateFromStore: function () {
    var project = ProjectStore.find(parseInt(this.props.params.id)) || {};
    return {project: project};
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  _onProjectsChange: function () {
    this.setState(this.getStateFromStore());
  },

  componentDidMount: function () {
    ProjectStore.addChangeListener(this._onProjectsChange);
    ApiUtil.fetchProject(parseInt(this.props.params.id));
  },

  componentWillUnmount: function () {
    ProjectStore.removeChangeListener(this._onProjectsChange);
  },

  render: function () {
    var style = {};
    if (this.state.project.image_url) {
      style = {
        backgroundImage: 'url(' + this.state.project.image_url + ')'
      };
    }

    return(
      <div className='container project-show-container'>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='project-title'>
              <h1>{this.state.project.title}</h1>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-6'>
            <img className='project-show-image' src={this.state.project.image_url} />
          </div>
          <div className='col-sm-5 col-sm-offset-1'>
            <div className='project-show-sidebar'>

            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-4'>
            <h3>Artist</h3>
          </div>
          <div className='col-sm-8 project-artist'>
            <h3 className='grey'>{this.state.project.artist_name}</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-4'>
            <h3>Funding Goal</h3>
          </div>
          <div className='col-sm-8 project-funding-goal'>
            <h3 className='grey'>{this.state.project.funding_goal}</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-4'>
            <h3>Description</h3>
          </div>
          <div className='col-sm-8 project-description'>
            <h3 className='grey'>{this.state.project.description}</h3>
          </div>
        </div>
      </div>
    )
  }
})
