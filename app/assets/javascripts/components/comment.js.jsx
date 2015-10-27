window.Comment = React.createClass({
  getInitialState: function () {
    return this.getStateFromStore();
  },

  _daysAgo: function () {
    var createdAt = new Date(this.props.comment.created_at);
    var today = new Date();
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds

    var diffDays = Math.round((today.getTime() - createdAt.getTime())/(oneDay));
    if (diffDays === 1) {
      return "1 day ago";
    } else {
      return diffDays + " days ago";
    }
  },

  componentDidMount: function () {
    ProjectStore.addChangeListener(this._onProjectChange);
    ApiUtil.fetchProject(this.props.comment.project_id);
  },

  componentWillUnmount: function () {
    ProjectStore.removeChangeListener(this._onProjectChange);
  },

  _onProjectChange: function () {
    this.setState(this.getStateFromStore());
  },

  getStateFromStore: function () {
    return {project: ProjectStore.find(this.props.comment.project_id)};
  },

  _artistComment: function () {
    return !!(this.state.project.user_id === this.props.comment.user_id)
  },

  _delete: function () {
    ApiUtil.deleteComment(this.props.comment.id, this.props.comment.project_id);
  },

  render: function () {
    var trashButton = '';
    if (this.props.comment.user_id === window.CURRENT_USER.id) {
      trashButton = (
        <button onClick={this._delete} className="trash-button glyphicon glyphicon-trash"/>
      )
    }

    var style = {backgroundColor: "inherit"};
    if (this._artistComment()) {
      style = {backgroundColor: "rgba(112, 164, 167, 0.25)"}
    }

    return (
      <div className="comment" style={ style }>
        <div className="comment-info">
          <h4 className="comment-user">{ this.props.comment.user.username }</h4>
          <h6 className="comment-time">{ this._daysAgo() }</h6>
          { trashButton }
        </div>
        <p>{ this.props.comment.body }</p>
      </div>
    )
  },
})
