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
      <div className="scrollable-row">
        {
          this.state.user.projects.map(function(project) {
            return (
              <SmallProjectsIndexItem key={project.id} project={project}/>
            )
          })
        }
      </div>
    }

    var backedProjects;
    if (this.state.user.backed_projects) {
      backedProjects =
      <div className="scrollable-row">
        {
          this.uniqueBackedProjects().map(function(project) {
            return (
              <SmallProjectsIndexItem key={project.id} project={project}/>
            )
          })
        }
      </div>
    }

    return (
      <div>
        <div className="profile-header"><h2>Hi, {this.state.user.username}!</h2></div>
        <h4 className="profile-text">Your Projects</h4>
        { projects }
        <h4 className="profile-text">Projects You've Backed</h4>
        { backedProjects }
      </div>
    )
  }
})
