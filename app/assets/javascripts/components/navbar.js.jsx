window.Navbar = React.createClass({
  render: function () {
    return (
        <nav class="navbar navbar-default">
        <div class="container-fluid">

          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#collapse-menu"
                    aria-expanded="false">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>

          <div class="collapse navbar-collapse" id="collapse-menu">
            <ul class="nav navbar-nav pull-right">
              <li>{/* Button to Sign Out */}</li>
            </ul>
          </div>

        </div>
        </nav>
    )
  }
})
