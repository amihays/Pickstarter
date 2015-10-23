window.SortByJumbotron = React.createClass({
  getInitialState: function () {
    return {order: 'popularity', allProjects: false}
  },

  componentDidMount: function () {
    this._fetchOrderedProjects();
  },

  _handleSortByChange: function (e) {
    this.setState({order: e.target.value},
      this._fetchOrderedProjects);
    window.scrollTo(0, 510);
  },

  _fetchOrderedProjects: function() {
    ApiUtil.fetchOrderedProjects(this.state);
  },

  _handleShowAllChange: function () {
    this.setState({allProjects: !this.state.allProjects},
      this._fetchOrderedProjects);
  },

  render: function () {
    var checkbox;
    if (this.state.allProjects) {
      checkbox = <div className="checkbox-container" onClick={this._handleShowAllChange}><h2 className="checkbox checked">Remove finished projects</h2></div>;
    } else {
      checkbox = <div className="checkbox-container" onClick={this._handleShowAllChange}><h2 className="checkbox unchecked">Include finished projects</h2></div>;
    }

    return (
      <div className="jumbotron homepage-header-jumbotron">
        <h1 className="homepage-header">Welcome to Pickstarter</h1>
        <form className="sort-by-form">
          <div className="float-container">
            <select id='sort-by-select'
                    onChange={this._handleSortByChange}>
              <option value='popularity'>Sort by</option>
              <option value='popularity'>Popularity</option>
              <option value='alpha'>A - Z</option>
              <option value='reverse_alpha'>Z - A</option>
              <option value='end_date'>End Date</option>
              <option value='newest'>Newest</option>
            </select>
          </div>
          <div className="float-container">
            { checkbox }
          </div>
        </form>
      </div>
    )
  }
            // &#10004;
            // <label className="homepage-label">Include finished projects</label>
            // <label className="homepage-label">Sort by</label>
})
