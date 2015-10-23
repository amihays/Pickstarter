window.SmallProjectsIndexItem = React.createClass({
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
      <div className="small-project-index-item" onClick={this.showProject}>
        <div className="small-project-image-container" style={style}></div>
        <div className="small-projects-index-title-container">
          <h6 className="small-project-text title">{this.props.project.title}</h6>
          <h6 className="small-project-text artist">{this.props.project.artist_name}</h6>
        </div>
      </div>
    )
  }
})
