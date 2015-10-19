window.ContributeModal = React.createClass({
  getInitialState: function () {
    return {amount: ''}
  },

  submitForm: function (e) {
    e.preventDefault();
    params = $.extend({}, this.state, {project_id: this.props.project.id})
    ApiUtil.createContribution(params, this.props.close);
  },

  handleAmountChange: function (e) {
    this.setState({amount: e.target.value})
  },

  render: function () {
    return (
      <div className='modal is-active'>
        <div className='modal-content'>
          <button onClick={this.props.close}>Close</button>
          <Error/>
          <h2>Back this project</h2>
          <form onSubmit={this.submitForm}>
            <label htmlFor='contribution_amount'>$</label>
            <input type='text'
                   id='contribution_amount'
                   value={this.state.amount}
                   placeholder="How much would you like to contribute?"
                   onChange={this.handleAmountChange}/>
            <button type='submit'>Submit</button>
          </form>
        </div>
        <div className='modal-screen'/>
      </div>
    )
  }
})


// props: project, close handler
