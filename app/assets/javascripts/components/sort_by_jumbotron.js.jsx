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
      checkbox = <div className="checkbox-container" onClick={this._handleShowAllChange}><h2 className="checkbox checked">&#10004;</h2></div>;
    } else {
      checkbox = <div className="checkbox-container" onClick={this._handleShowAllChange}><h2 className="checkbox unchecked"></h2></div>;
    }

    return (
      <div className="jumbotron homepage-header-jumbotron">
        <h1 className="homepage-header">Welcome to Pickstarter</h1>
        <form className="sort-by-form">
          <div className="float-container">
            <label className="homepage-label" htmlFor='sort-by-select'>Sort by</label>
            <select id='sort-by-select'
                    onChange={this._handleSortByChange}>
              <option value='popularity'>Popularity</option>
              <option value='alpha'>A - Z</option>
              <option value='reverse_alpha'>Z - A</option>
              <option value='end_date'>End Date</option>
              <option value='newest'>Newest</option>
            </select>
          </div>
          <div className="float-container">
            <label className="homepage-label" htmlFor='cbox'>Include finished projects</label>
            { checkbox }
          </div>
        </form>
      </div>
    )
  }
})
