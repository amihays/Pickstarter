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

    var diffDays = Math.round((deadline.getTime() - today.getTime())/(oneDay));
    if (diffDays > 0) {
      return diffDays;
    } else {
      return 0;
    }
  },

  percentFunded: function () {
    var goal = parseInt(this.props.project.funding_goal)
    var percent = this.amountRaised()/goal * 100;
    if (percent > 100) {
      return 100;
    } else {
      return percent;
    }
  },

  render: function () {
    var percentFundedBarStyle = {width: String(this.percentFunded()) + '%'};
    var percentFundedBar = (
      <div className='percent-funded-bar center'>
        <div className='funding-fill' style={percentFundedBarStyle}></div>
      </div>
    );

    var daysLeft;
    if (this.daysLeft() > 0) {
      daysLeft = (
        <div className='days-left'>
          <h1 className='text-center top-padding no-margin'>{this.daysLeft()}</h1>
          <h4 className='text-center no-margin'>days left</h4>
        </div>
      )
    } else {
      daysLeft = (
        <h3 className='text-center top-padding'>Funding Closed</h3>
      )
    };

    var contributeButton = '';
    if (this.daysLeft() > 0) {
      contributeButton = (
        <button className='btn btn-default contribute'
                onClick={this.props.openContribute}>Contribute!</button>
      )
    }

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
        <h4 className='text-center no-margin'>raised of ${this.props.project.funding_goal} goal</h4>
        { percentFundedBar }
        { contributeButton }
      </div>

    )
  }
})
