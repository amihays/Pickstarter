window.SortByJumbotron = React.createClass({
  getInitialState: function () {
    return {order: 'alpha'}
  },

  handleSortByChange: function (e) {
    this.setState({order: e.target.value});
    ApiUtil.fetchOrderedProjects(this.state.order);
  },

  render: function () {
    return (
      <div className="jumbotron homepage-header-jumbotron">
        <h1 className="homepage-header">Welcome to Pickstarter</h1>
        <label htmlFor='sort-by-select'>Sort By</label>
        <select id='sort-by-select'
                onChange={this.handleSortByChange}>
          <option value='alpha'>A - Z</option>
          <option value='reverse_alpha'>Z - A</option>
          <option value='popularity'>Popularity</option>
          <option value='end_date'>End Date</option>
          <option value='newest'>Newest</option>
        </select>
      </div>
    )
  }
})
