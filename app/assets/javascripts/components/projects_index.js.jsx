window.ProjectsIndex = React.createClass({
  getInitialState: function () {
    return {projects: []};
  },

  _onProjectsChange: function () {
    this.setState({projects: ProjectStore.all()});
  },

  componentDidMount: function () {
    ProjectStore.addChangeListener(this._onProjectsChange);
    ApiUtil.fetchProjects();
  },

  componentWillUnmount: function () {
    ProjectStore.removeChangeListener(this._onProjectsChange);
  },

  scroll: function () {
    $('html, body').animate({
      scrollTop: $("div.container").offset().top
    }, 1500, 'easeInOutExpo');
  },

  render: function () {
    var projects = '';
    if (this.state.projects) {
      projects = (
        <div className="row">
          {
            this.state.projects.map(function(project) {
              return (
                <div className="col-md-4 col-sm-6 col-xs-8" key={project.id}>
                  <ProjectsIndexItem project={project}></ProjectsIndexItem>
                </div>
              )
            })
          }
        </div>
      )
    }
    return (
      <div className='projects-index'>
        <SortByJumbotron scroll={this.scroll} projects={this.state.projects}/>
        <div className='container'>
          { projects }
        </div>
      </div>
    )
  }
})
