window.UserProfile = React.createClass({
  getInitialState: function () {
    return ({user: {}});
  },

  _onChange: function () {
    user = UserStore.user();
    this.setState({user: user});
  },

  uniqueBackedProjects: function () {
    var result = [];
    if (this.state.user.backed_projects) {
      this.state.user.backed_projects.forEach(function(project) {
        var found = false;
        result.forEach(function(uniqueProject) {
          if (project.title === uniqueProject.title)
          found = true;
        })
        if (!found) {
          result.push(project);
        }
      });
    }
    return result;
  },

  componentDidMount: function () {
    UserStore.addChangeListener(this._onChange);
    ApiUtil.fetchCurrentUser();
  },

  componentWillUnmount: function () {
    UserStore.removeChangeListener(this._onChange);
  },

  render: function () {
    var projects;
    if (this.state.user.projects) {
      projects =
      <div className="row">
        {
          this.state.user.projects.map(function(project) {
            return (
              <div className="col-md-4 col-sm-6 col-xs-8" key={project.id}>
                <ProjectsIndexItem project={project}/>
              </div>
            )
          })
        }
      </div>
    }

    var backedProjects;
    if (this.state.user.backed_projects) {
      backedProjects =
      <div className="row">
        {
          this.uniqueBackedProjects().map(function(project) {
            return (
              <div className="col-md-4 col-sm-6 col-xs-8" key={project.id}>
                <ProjectsIndexItem project={project}/>
              </div>
            )
          })
        }
      </div>
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h2>Hi, {this.state.user.username}!</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <h4>Your Projects</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            { projects }
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <h4>Projects You've Backed</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            { backedProjects }
          </div>
        </div>

      </div>
    )
  }
})
