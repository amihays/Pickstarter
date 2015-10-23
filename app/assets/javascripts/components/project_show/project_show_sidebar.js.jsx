window.ProjectShowSidebar = React.createClass({
  contributorsCount: function () {
    if (this.props.project.contributors){
      uniqueContributors = [];
      this.props.project.contributors.forEach(function(contributor) {
        var found = false;
        uniqueContributors.forEach(function(uniqueContributor) {
          if (uniqueContributor.id === contributor.id) {
            found = true;
          }
        })
        if (found === false) {
          uniqueContributors.push(contributor);
        }
      })
      return String(uniqueContributors.length);
    }
    else {
      return '0';
    }
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

  daysLeft: function () {
    var deadline = new Date(this.props.project.deadline);
    var today = new Date();
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds

    var diffDays = (deadline.getTime() - today.getTime())/(oneDay);
    return diffDays;
  },

  hoursLeft: function () {
    var deadline = new Date(this.props.project.deadline);
    var today = new Date();
    var oneHour = 60*60*1000; // hours*minutes*seconds*milliseconds

    var diffHours = (deadline.getTime() - today.getTime())/(oneHour);
    return diffHours;
  },

  render: function () {

    var button = ''; // change so only shows before project deadline
    if (window.CURRENT_USER.id === parseInt(this.props.project.user_id) &&
        this.daysLeft() >= 0) {
      button = (
        <button className='btn btn-default edit-button' onClick={this.props.handleEditButtonClick}>Edit Project</button>
      )
    } else if (this.daysLeft() >= 0) {
      button = (
        <button className='btn btn-default contribute'
                onClick={this.props.openContribute}>Contribute!</button>
        )
    }

    var daysLeft;
    if (this.daysLeft() >= 1) {
      daysLeft = (
        <div className='days-left'>
          <h1 className='text-center top-padding no-margin'>{Math.floor(this.daysLeft())}</h1>
          <h4 className='text-center no-margin'>days left</h4>
        </div>
      )
    } else if (this.daysLeft() > 0) {
      daysLeft = (
        <div className='days-left'>
          <h1 className='text-center top-padding no-margin'>{Math.floor(this.hoursLeft())}</h1>
          <h4 className='text-center no-margin'>hours left!</h4>
        </div>
      )
    } else {
      daysLeft = (
        <h3 className='text-center top-padding'>Funding Closed</h3>
      )
    };

    var backers;
    if (this.contributorsCount() === '1') {
      backers = 'backer'
    } else {
      backers = 'backers'
    }

    return (
      <div className='project-show-sidebar lightest-grey'>
        <h1 className='text-center no-margin'>{this.contributorsCount()}</h1>
        <h4 className='text-center no-margin'>{backers}</h4>
        { daysLeft }
        <h1 className='text-center top-padding no-margin'>${this.amountRaised()}</h1>
        <h4 className='text-center margin-bottom-25px'>raised of ${this.props.project.funding_goal} goal</h4>
        <PercentFundedBar project={this.props.project} width="150px" height="20px" marginTop="25px"/>
        { button }
      </div>

    )
  }
})
