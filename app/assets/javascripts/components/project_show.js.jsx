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
    return(
      <div className="container">
        <div className="jumbotron">
          <h1 className="genre-header">{this.state.project.title}</h1>
        </div>
        <div className="row">
          <img src={this.state.project.image_url}/>
        </div>
      </div>
    )
  }
})
