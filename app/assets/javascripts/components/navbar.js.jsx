window.Navbar = React.createClass({
  logOutClickHandler: function () {
    ApiUtil.signOut();
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
            <li><a onClick={this.logOutClickHandler}>Log out</a></li>
          </ul>
      </li>
    );

    return (
      <nav className="navbar navbar-default">
      <div className="container-fluid">

        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#collapse-menu"
                  aria-expanded="false">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="collapse-menu">
          <ul className="nav navbar-nav pull-left">
            <a className="navbar-brand" href="#">
              <button className="logo"><img className="brand" src="assets/PICKSTARTER-logo.png"/></button>
            </a>
          </ul>
          <ul className="nav navbar-nav pull-right">
            <li>
              <a className="navbar-genres" href="#">
                <button className="genres-index-link">Discover</button>
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
