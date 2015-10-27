window.CommentForm = React.createClass({
  getInitialState: function () {
    return {body: ''}
  },

  handleBodyChange: function (e) {
    this.setState({body: e.target.value})
  },

  userBackedProject: function () {
    var result = false;
    if (this.props.project.contributions) {
      this.props.project.contributions.forEach(function(contribution) {
        if (contribution.user_id === window.CURRENT_USER.id) {
          result = true;
        }
      })
    }
    return result;
  },

  _refreshProject: function () {
    this.setState({body: ''})
    ApiUtil.fetchProject(this.props.project.id);
  },

  submitForm: function (e) {
    e.preventDefault();
    params = $.extend({}, this.state, {project_id: this.props.project.id})
    ApiUtil.createComment(params, this._refreshProject);
  },

  renderCommentForm: function () {
    return (
      <div className='comment-form'>
        <Error/>
        <form onSubmit={this.submitForm}>
          <div className='form-group'>
            <label htmlFor='comment_body'
                   className='comment-body-label'>Add a Comment</label>
            <textarea id='comment_body'
                      value={this.state.body}
                      className='form-control comment-body-input'
                      onChange={this.handleBodyChange}/>
          </div>
          <button type='submit' className="btn btn-default no-focus">Submit</button>
        </form>
      </div>
    )
  },

  render: function () {
    if (this.userBackedProject() || this.props.project.user_id === window.CURRENT_USER.id) {
      return this.renderCommentForm();
    } else {
      return (
        <div className="comments-header center">
          <h4 className="no-margin">Only backers can post comments.</h4>
        </div>
      )
    }
  }
})
