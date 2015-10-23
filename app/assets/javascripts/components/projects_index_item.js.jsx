window.ProjectsIndexItem = React.createClass({
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

  shortenedTitle: function () {
    if (this.props.project.title.length > 50) {
      return this.props.project.title.slice(0,40) + "...";
    } else {
      return this.props.project.title;
    }
  },

  render: function () {
    var style = {};
    if (this.props.project.image_url) {
      style = {
        backgroundImage: 'url(' + this.props.project.image_url + ')'
      };
    }
    return (
      <div className="project-index-item" onClick={this.showProject}>
        <div className="project-image-container transitionfix" style={style}></div>
        <div className="projects-index-title-container">
          <h6 className="project-text title">{this.shortenedTitle()}</h6>
          <h6 className="project-text artist">{this.props.project.artist_name}</h6>
        </div>
        <div className="projects-index-amount-container">
          <h6 className="project-text amount-raised">${this.amountRaised()} raised of ${this.props.project.funding_goal}</h6>
        </div>
        <div className="projects-index-item-bar">
          <PercentFundedBar project={this.props.project} width="75%" height="10px" marginTop="10px"/>
        </div>
      </div>
    );
  }
  // <img className="project-image" src={this.props.project.image_url}/>
  // <img className="project-image" src={this.props.project.image_url}/>
})
//
// <div className="genre-index-item" onClick={this.showGenre}>
//   <img className="genre-image" src={this.props.genre.image_url}/>
//   <h1 className="genre-text">{this.props.genre.name}</h1>
// </div>
