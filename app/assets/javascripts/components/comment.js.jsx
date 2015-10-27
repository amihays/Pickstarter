window.Comment = React.createClass({
  render: function () {
    var createdAt = new Date(this.props.comment.created_at);

    return (
      <div className="comment">
        <h4 className="comment-user">{ this.props.comment.user.username }</h4>
        <h4 className="comment-time">{ createdAt.getMonth() }/{ createdAt.getDay() }/{ createdAt.getFullYear() } at { createdAt.getHours() }:{ createdAt.getMinutes()}</h4>
        <p>{ this.props.comment.body }</p>
      </div>
    )
  },
})
