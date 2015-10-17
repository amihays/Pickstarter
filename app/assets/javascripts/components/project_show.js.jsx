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
      <div className='container'>
        <div className='row'>
          <div className='col-sm-8 col-sm-offset-2'>
            <div className='project-header'>
              <h1>{this.state.project.title}</h1>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-8 col-sm-offset-2'>
            <div className='project-show-image-container'>
              <img src={this.state.project.image_url} />
            </div>
          </div>
        </div>
      </div>
    )
  }
})
