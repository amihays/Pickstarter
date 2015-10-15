window.GenreIndexItem = React.createClass({
  mixins: [ReactRouter.History],

  showGenre: function (e) {
    this.history.pushState(null, '/genres/' + this.props.genre.id, {});
  },

  render: function () {
    return (
      <div className="genre-index-item" onClick={this.showGenre}>
        <img className="genre-image" src={this.props.genre.image_url}/>
        <h1 className="genre-text">{this.props.genre.name}</h1>
      </div>
    )
  }
})
