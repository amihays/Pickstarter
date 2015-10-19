// var Modal = React.Modal;

window.ProjectShow = React.createClass({
  getStateFromStore: function () {
    var project = ProjectStore.find(parseInt(this.props.params.id)) || {};
    return {project: project, modalIsOpen: false};
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  _onProjectsChange: function () {
    this.setState(this.getStateFromStore());
  },

  deadlinePassed: function () { //this is totally backward - why?!!
    return !(new Date(this.state.project.deadline) > new Date());
  },

  componentDidMount: function () {
    ProjectStore.addChangeListener(this._onProjectsChange);
    ApiUtil.fetchProject(parseInt(this.props.params.id));
  },

  componentWillUnmount: function () {
    ProjectStore.removeChangeListener(this._onProjectsChange);
  },

  handleEditButtonClick: function () {
    // this.props.history.pushState({project: this.state.project}, '/projects/' + this.state.project.id + '/edit', {});
  }, // How to pass in project info?

  openContribute: function () {
    this.setState({modalIsOpen: true});
  },

  closeContribute: function () {
    this.setState({modalIsOpen: false});
  },

  render: function () {
    var style = {};
    if (this.state.project.image_url) {
      style = {
        backgroundImage: 'url(' + this.state.project.image_url + ')'
      };
    }

    var editButton = ''; // change so only shows before project deadline
    if (window.CURRENT_USER.id === parseInt(this.state.project.user_id) &&
        !this.deadlinePassed()) {
      // editButton = (
      //   <button onClick={this.handleEditButtonClick}>Edit Project</button>
      // )
      editButton = ( <button>Edit Project</button> );
    }

    return(
      <div className='container project-show-container'>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='project-title'>
              <h1>{this.state.project.title}</h1>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-6'>
            <img className='project-show-image' src={this.state.project.image_url} />
          </div>
          <div className='col-sm-5 col-sm-offset-1'>
            <div className='project-show-sidebar lightest-grey'>
              <button onClick={this.openContribute}>Contribute!</button>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-4'>
            <h3>Artist</h3>
          </div>
          <div className='col-sm-8 project-artist'>
            <h3 className='grey'>{this.state.project.artist_name}</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-4'>
            <h3>Funding Goal</h3>
          </div>
          <div className='col-sm-8 project-funding-goal'>
            <h3 className='grey'>${this.state.project.funding_goal}</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-4'>
            <h3>Description</h3>
          </div>
          <div className='col-sm-8 project-description'>
            <h3 className='grey'>{this.state.project.description}</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-4'>
            {editButton}
          </div>
        </div>
      </div>
    )
  }
})
//
// <Modal isOpen={this.state.modalIsOpen}
//        onRequestClose={this.closeContribute}
//        className='contribute-modal'>
//        <h2>Contribute to {this.state.project.title}</h2>
//        <button onClick={this.closeContribute}>Close</button>
//        <form>
//          <label htmlFor='contribute-amount'>$</label>
//          <input id='contribute-amount' type='text'/>
//        </form>
// </Modal>
