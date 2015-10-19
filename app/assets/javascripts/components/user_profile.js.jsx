window.UserProfile = React.createClass({
  getInitialState: function () {
    return ({user: {}});
  },

  _onChange: function () {
    user = UserStore.user();
    this.setState({user: user});
  },

  componentDidMount: function () {
    UserStore.addChangeListener(this._onChange)
    ApiUtil.fetchCurrentUser();
  },

  componentWillUnmount: function () {
    UserStore.removeChangeListener(this._onChange)
  },

  render: function () {
    var projects;
    if (this.state.user.projects) {
      projects = this.state.user.projects.map(function(project) {
        return(
          <li>
            {project.title}
          </li>
        )
      })
    }
    return (
      <div>
        <h2>Hi, {this.state.user.username}!</h2>
        <ul>
          { projects }
        </ul>
      </div>
    )
  }
})
