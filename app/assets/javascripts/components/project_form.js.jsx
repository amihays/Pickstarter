window.ProjectForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return {
      title: '',
      description: '',
      // genre_id: '',
      deadline: '',
      artist_name: '',
      funding_goal: ''
    };
  },

  submitForm: function (e) {
    e.preventDefault();
    var params = {};
    this.state.
  },

  render: function () {
    return(
      <div className='container'>
        <form className='create-project' onSubmit={this.submitForm}>
          <div>
            <label htmlFor='project_title'></label>
            <input type='text'
                   id='project_title'
                   valueLink={this.linkState('title')}/>
          </div>

          <div>
            <label htmlFor='project_description'></label>
            <text id='project_description'
                  valueLink={this.linkState('description')}/>
          </div>

          <div>
            <label htmlFor='project_deadline'></label>
            <input type='date'
                   id='project_deadline'
                   valueLink={this.linkState('deadline')}/>
          </div>
        </form>
      </div>
    )
  }
})
