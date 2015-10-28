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
    this.props.scroll()
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
          <input type='text'
                 className='search-box'
                 value={this.props.filter}
                 onChange={this.props.handleFilterChange}
                 placeholder='search projects'/>
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
    )
  }
})
