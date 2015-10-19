window.ContributeModal = React.createClass({
  getInitialState: function () {
    return {amount: ''}
  },

  closeAndFetchProject: function () {
    ApiUtil.fetchProject(this.props.project.id);
    this.props.close();
  },

  submitForm: function (e) {
    e.preventDefault();
    params = $.extend({}, this.state, {project_id: this.props.project.id})
    ApiUtil.createContribution(params, this.closeAndFetchProject);
  },

  handleAmountChange: function (e) {
    this.setState({amount: e.target.value})
  },

  render: function () {
    return (
      <div className='modal is-active'>
        <div className='modal-content'>
          <button className='modal-close' onClick={this.props.close}>X</button>
          <Error/>
          <h2>Back this project</h2>
          <form onSubmit={this.submitForm}>
            <div className='form-group'>
              <label htmlFor='contribution_amount'
                     className='contribution-amount-label'>$</label>
              <input type='text'
                     id='contribution_amount'
                     value={this.state.amount}
                     className='form-control contribution-input'
                     placeholder='How much would you like to contribute?'
                     onChange={this.handleAmountChange}/>
            </div>
            <button type='submit' className="btn btn-default">Submit</button>
          </form>
        </div>
        <div className='modal-screen'/>
      </div>
    )
  }
})


// props: project, close handler
