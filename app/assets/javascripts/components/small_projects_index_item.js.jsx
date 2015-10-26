window.SmallProjectsIndexItem = React.createClass({
  mixins: [ReactRouter.History],

  showProject: function (e) {
    this.history.pushState(null, '/projects/' + this.props.project.id, {});
  },

  amountRaised: function () {
    result = 0;
    if (this.props.project.contributions) {
      this.props.project.contributions.forEach(function(contribution){
        result += contribution.amount;
      })
    }
    return result;
  },

  render: function () {
    var style = {};
    if (this.props.project.image_url) {
      style = {
        backgroundImage: 'url(' + this.props.project.image_url + ')'
      };
    }
    
    return (
      <div className="small-project-index-item" onClick={this.showProject}>
        <div className="small-project-image-container" style={style}></div>
        <div className="small-projects-index-title-container">
          <h6 className="small-project-text title">{this.props.project.title}</h6>
        </div>
        <div className="small-projects-index-artist-container">
          <h6 className="small-project-text artist">{this.props.project.artist_name}</h6>
        </div>
        <div className="small-projects-index-item-bar">
          <PercentFundedBar project={this.props.project} width="100px" height="7px" marginTop="5px"/>
        </div>
      </div>
    )
  }
})
        // <div className="small-projects-index-amount-container">
        //   <h6 className="small-project-text amount-raised">${this.amountRaised()} raised of ${this.props.project.funding_goal}</h6>
        // </div>
