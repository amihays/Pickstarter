window.ChangingJumbotron = React.createClass({
  getInitialState: function () {
    return {order: 'popularity', allProjects: false}
  },

  componentDidMount: function () {
    this._fetchOrderedProjects();
  },

  _handleSortByChange: function (e) {
    this.setState({order: e.target.value},
      this._fetchOrderedProjects);
    this.props.scroll()
  },

  _fetchOrderedProjects: function() {
    ApiUtil.fetchOrderedProjects(this.state);
  },

  _handleShowAllChange: function () {
    this.setState({allProjects: !this.state.allProjects},
      this._fetchOrderedProjects);
  },

  // _scroll: function () {
  //   $(function() {
  //   	$('ul.nav a').bind('click',function(event){
  //   		var $anchor = $(this);
  //
  //   		$('html, body').stop().animate({
  //   			scrollTop: $($anchor.attr('href')).offset().top
  //   		}, 1500,'easeInOutExpo');
  //   		/*
  //   		if you don't want to use the easing effects:
  //   		$('html, body').stop().animate({
  //   			scrollTop: $($anchor.attr('href')).offset().top
  //   		}, 1000);
  //   		*/
  //   		event.preventDefault();
  //   	});
  //   });
  // },

  render: function () {
    var checkbox;
    if (this.state.allProjects) {
      checkbox = <div className="checkbox-container" onClick={this._handleShowAllChange}><h2 className="checkbox checked">&#10004;</h2></div>;
    } else {
      checkbox = <div className="checkbox-container" onClick={this._handleShowAllChange}><h2 className="checkbox unchecked"></h2></div>;
    }

    return (


      <div id="bg-fade-carousel" className="carousel slide carousel-fade" data-ride="carousel">
        <div className="carousel-inner">
            <div className="item active">
                <div className="slide1"></div>
            </div>
            <div className="item">
                <div className="slide2"></div>
            </div>
            <div className="item">
                <div className="slide3"></div>
            </div>
        </div>
        <div className="container carousel-overlay text-center">
          <div className="text-center">
            <h1 className="homepage-header">Welcome to Pickstarter</h1>
          </div>
          <div className="sort-by-form">
            <form className="sort-by-form">
              <label className="sort-by homepage-label">Sort by</label>
              <div className="sort-by-select-container">
                <select id='sort-by-select'
                        className='homepage-label'
                        onChange={this._handleSortByChange}>
                  <option value='popularity'>Popularity</option>
                  <option value='alpha'>A - Z</option>
                  <option value='reverse_alpha'>Z - A</option>
                  <option value='end_date'>End Date</option>
                  <option value='newest'>Newest</option>
                </select>
              </div>
              <label className="check-box homepage-label">Include finished projects</label>
              { checkbox }
            </form>
          </div>
        </div>
      </div>
    )
  }
            // &#10004;
            // <h3 id="sort-by-carrot"> &#9660;</h3>
})
