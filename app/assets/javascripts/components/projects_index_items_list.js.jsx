window.ProjectsIndexItemsList = React.createClass({
  filteredProjects: function () {
    result = [];
    this.props.projects.forEach(function(project) {
      var regExp = new RegExp(this.props.filter)
      if (project.title.toLowerCase().match(regExp) && result.indexOf(project) === -1) {
        result.push(project)
      } else if (project.artist_name.toLowerCase().match(regExp) && result.indexOf(project) === -1) {
        result.push(project)
      } else if (project.genre_name.toLowerCase().match(regExp) && result.indexOf(project) === -1) {
        result.push(project)
      }
      titleWords = project.title.split(' ');
      titleWords.forEach(function(word) {
        if (word.toLowerCase().match(regExp) && result.indexOf(project) === -1) {
          result.push(project)
        }
      })
      artistWords = project.artist_name.split(' ');
      artistWords.forEach(function(word) {
        if (word.toLowerCase().match(regExp) && result.indexOf(project) === -1) {
          result.push(project);
        }
      })
    }.bind(this))
    return result;
  },

  render: function () {
    return (
      <div className="row">
        {
          this.filteredProjects().map(function(project) {
            if (!project) {
              debugger;
            }
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
