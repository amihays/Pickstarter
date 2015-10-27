window.Comments = React.createClass({
  render: function () {
    return (
      <div className="comments">
        {
          this.props.comments.map(function(comment) {
            return (<Comment comment={comment} key={comment.id}/>);
          })
        }
      </div>
    )
  },
})
