window.ContributeModal = React.createClass({
  submitForm: function () {
    this.props.close();
  },

  render: function () {
    return (
      <div className='modal is-active'>
        <div className='modal-content'>
          <button onClick={this.props.close}>Close</button>
          <form onSubmit={this.submitForm}>
            
          </form>
        </div>
        <div className='modal-screen'/>
      </div>
    )
  }
})


// props: project, close handler
