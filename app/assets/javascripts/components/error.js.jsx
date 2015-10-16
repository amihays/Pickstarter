window.Error = React.createClass({
  getStateFromStore: function () {
    return {errors: ErrorStore.all()}
  },

  _onErrorsAdded: function () {
    this.setState(this.getStateFromStore());
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  componentDidMount: function () {
    ErrorStore.addChangeListener(this._onErrorsAdded);
  },

  componentWillUnmount: function () {
    ErrorStore.removeChangeListener(this._onErrorsAdded);
  },

  render: function () {
    return (<div>{this.state.errors}</div>);
  }
})
