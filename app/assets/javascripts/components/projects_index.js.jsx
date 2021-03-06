window.ProjectsIndex = React.createClass({
  getInitialState: function () {
    return {projects: [], filter: ''};
  },

  _onProjectsChange: function () {
    this.setState({projects: ProjectStore.all()});
  },

  componentDidMount: function () {
    ProjectStore.addChangeListener(this._onProjectsChange);
    ApiUtil.fetchProjects();
  },

  componentWillUnmount: function () {
    ProjectStore.removeChangeListener(this._onProjectsChange);
  },

  scroll: function () {
    $('html, body').animate({
      scrollTop: $("div.container").offset().top
    }, 1500, 'easeInOutExpo');
  },

  _handleFilterChange: function (e) {
    this.setState({filter: e.target.value})
  },

  _filterProjects: function () {
    result = [];
    this.state.projects.forEach(function(project) {
      var regExp = new RegExp('^' + this.state.filter.toLowerCase())
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
      <div className='projects-index'>
        <SortByJumbotron filter={this.state.filter} handleFilterChange={this._handleFilterChange} scroll={this.scroll} projects={this.state.projects}/>
        <div className='container'>
          <ProjectsIndexItemsList projects={this._filterProjects()}/>
        </div>
      </div>
    )
  }
})
