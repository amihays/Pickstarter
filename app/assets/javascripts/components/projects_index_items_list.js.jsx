window.ProjectsIndexItemsList = React.createClass({
  render: function () {
    return (
      <div className="row">
        {
          this.props.projects.map(function(project) {
            return (
              <div className="col-md-4 col-sm-6 col-xs-8" key={project.id}>
                <ProjectsIndexItem project={project}></ProjectsIndexItem>
              </div>
            )
          }.bind(this))
        }
      </div>
    )
  }
})
