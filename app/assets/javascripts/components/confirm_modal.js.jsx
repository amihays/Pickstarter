window.ConfirmModal = React.createClass({
  cancel: function () {
    this.props.close();
  },

  delete: function () {
    // debugger;
    this.props.delete();
  },

  render: function () {
    return (
      <div className='modal is-active'>
        <div className='modal-content'>
          <button className='modal-close' onClick={ this.cancel }>&times;</button>
          <h2>Are you sure you want to delete this project?</h2>
          <button onClick={ this.cancel } className="btn btn-default">Cancel</button>
          <button onClick={ this.delete } className="btn btn-default red">Delete</button>
        </div>
        <div className='modal-screen'/>
      </div>
    )
  }
})


// props: project, close handler
