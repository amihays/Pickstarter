window.ProjectsIndexItem = React.createClass({
  mixins: [ReactRouter.History],

  showProject: function (e) {
    this.history.pushState(null, '/projects/' + this.props.project.id, {});
  },

  render: function () {
    return (
      <div className="project-index-item" onClick={this.showProject}>
        <h6 className="project-text">{this.props.project.title}</h6>
      </div>
    );
  }
  // <img className="project-image" src={this.props.project.image_url}/>
})
