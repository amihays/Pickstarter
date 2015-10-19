window.UserProfile = React.createClass({
  getInitialState: function () {
    return ({user: {}});
  },

  _onChange: function () {
    user = UserStore.user();
    this.setState({user: user});
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
      <ul>
        {
          this.state.user.projects.map(function(project) {
            return (
              <li>
                { project.title }
              </li>
            )
          })
        }
      </ul>
    }

    var backedProjects;
    if (this.state.user.backed_projects) {
      backedProjects =
      <ul>
        {
          this.state.user.backed_projects.map(function(project) {
            return (
              <li>
                { project.title }
              </li>
            )
          })
        }
      </ul>
    }

    return (
      <div>
        <h2>Hi, {this.state.user.username}!</h2>
        <h4>Your Projects</h4>
        { projects }
        <h4>Projects You've Backed</h4>
        { backedProjects }
      </div>
    )
  }
})
