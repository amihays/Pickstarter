window.App = React.createClass({
  render: function () {
    return(
      <div>
        <Navbar/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
})
