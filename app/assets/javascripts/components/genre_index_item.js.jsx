window.GenreIndexItem = React.createClass({
  mixins: [ReactRouter.History],

  showGenre: function (e) {
    this.history.pushState(null, '/genres/' + this.props.genre.id, {});
  },

  render: function () {
    return (
      <li onClick={this.showGenre}>{this.props.genre.name}</li>
    )
  }
})
