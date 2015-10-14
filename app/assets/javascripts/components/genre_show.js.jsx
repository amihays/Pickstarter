window.GenreShow = React.createClass({
  getStateFromStore: function () {
    return {genre: GenreStore.find(parseInt(this.props.params.id))}
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  render: function () {
    return(
      <h1>{this.state.genre.name}</h1>
    )
  }
})
