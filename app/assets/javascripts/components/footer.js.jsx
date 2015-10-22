window.Footer = React.createClass({
  _scrollToTop: function (e) {
    e.preventDefault();
    window.scrollTo(0,0);
  },

  render: function () {
    return (
      <footer className="footer">
        <div className="container footer-container">
          <a onClick={this._scrollToTop} href="#/">
            <img className="brand footer-image" src="http://res.cloudinary.com/daqcetxc6/image/upload/v1445384142/genres/PICKSTARTER-logo.png"/>
          </a>
        </div>
      </footer>
    )
  }
})
