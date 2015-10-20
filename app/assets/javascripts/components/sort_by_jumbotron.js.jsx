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
    return (
      <div className="jumbotron homepage-header-jumbotron">
        <h1 className="homepage-header">Welcome to Pickstarter</h1>
        <label htmlFor='sort-by-select'>Sort By</label>
        <select id='sort-by-select'
                onChange={this._handleSortByChange}>
          <option value='popularity'>Popularity</option>
          <option value='alpha'>A - Z</option>
          <option value='reverse_alpha'>Z - A</option>
          <option value='end_date'>End Date</option>
          <option value='newest'>Newest</option>
        </select>
        <label htmlFor='cbox'>Show projects past funding deadline</label>
        <input type="checkbox" id="cbox" onClick={this._handleShowAllChange}/>
      </div>
    )
  }
})
