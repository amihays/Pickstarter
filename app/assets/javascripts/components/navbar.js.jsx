window.Navbar = React.createClass({
  mixins: [ReactRouter.History],

  logOutClickHandler: function () {
    ApiUtil.signOut();
  },

  profileClickHandler: function () {
    this.history.pushState(null, '/user', {})
  },

  render: function () {
    var button = (
      <li className="dropdown">
          <a href="#" className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false">{CURRENT_USER.username}<span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a className="navbar-dropdown" onClick={this.profileClickHandler}>Your profile</a></li>
            <li><a className="navbar-dropdown" onClick={this.logOutClickHandler}>Log out</a></li>
          </ul>
      </li>
    );

    return (
      <nav className="navbar navbar-default no-margin">
      <div className="container-fluid">

        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#collapse-menu"
                  aria-expanded="false">
          </button>
        </div>

        <div className="collapse navbar-collapse" id="collapse-menu">
          <ul className="nav navbar-nav pull-left">
            <a className="navbar-brand" href="#/">
              <button className="logo no-border"><img className="brand" src="http://res.cloudinary.com/daqcetxc6/image/upload/v1445384142/genres/PICKSTARTER-logo.png"/></button>
            </a>
          </ul>
          <ul className="nav navbar-nav pull-right">
            <li>
              <a className="add-project-link" href="#/projects/new">
                <button className="navbar-links no-border">Start a Project</button>
              </a>
            </li>
            <li>
              <a className="genres-link" href="#/genres">
                <button className="navbar-links no-border">Discover</button>
              </a>
            </li>
            <li>{button}</li>
          </ul>
        </div>

      </div>
      </nav>
    );
  }
})
