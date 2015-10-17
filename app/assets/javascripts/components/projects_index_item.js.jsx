window.ProjectsIndexItem = React.createClass({
  mixins: [ReactRouter.History],

  showProject: function (e) {
    this.history.pushState(null, '/projects/' + this.props.project.id, {});
  },

  render: function () {
    var style = {};
    if (this.props.project.image_url) {
      style = {
        backgroundImage: 'url(' + this.props.project.image_url + ')'
      };
    }
    return (
      <div className="project-index-item" onClick={this.showProject}>
        <div className="project-image-container" style={style}>
        </div>
        <h6 className="project-text title">{this.props.project.title}</h6>
        <h6 className="project-text artist">{this.props.project.artist_name}</h6>
        <h6 className="project-text description">{this.props.project.description}</h6>
      </div>
    );
  }
  // <img className="project-image" src={this.props.project.image_url}/>
  // <img className="project-image" src={this.props.project.image_url}/>
})
//
// <div className="genre-index-item" onClick={this.showGenre}>
//   <img className="genre-image" src={this.props.genre.image_url}/>
//   <h1 className="genre-text">{this.props.genre.name}</h1>
// </div>
