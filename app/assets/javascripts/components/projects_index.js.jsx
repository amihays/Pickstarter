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

  render: function () {
    // var projects = '';
    // if (this.state.projects) {
    //   projects = (
    //     <div className="row">
    //       {
    //         this.state.projects.map(function(project) {
    //           return (
    //             <div className="col-md-4 col-sm-6 col-xs-8" key={project.id}>
    //               <ProjectsIndexItem project={project}></ProjectsIndexItem>
    //             </div>
    //           )
    //         })
    //       }
    //     </div>
    //   )
    // }
    return (
      <div className='projects-index'>
        <SortByJumbotron scroll={this.scroll} projects={this.state.projects}/>
        <div className='container'>
          <div className='row'>
            <form className='search-form'>
              <input type='text'
                     className='search-box'
                     value={this.state.filter}
                     onChange={this._handleFilterChange}
                     placeholder='search projects'/>
            </form>
          </div>
          <ProjectsIndexItemsList projects={this.state.projects} filter={this.state.filter}/>
        </div>
      </div>
    )
  }
})
