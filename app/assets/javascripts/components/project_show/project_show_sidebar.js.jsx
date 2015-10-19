window.ProjectShowSidebar = React.createClass({
  contributorsCount: function () {
    if (this.props.project.contributors){
      return String(this.props.project.contributors.length);
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

    var diffDays = Math.round(Math.abs((deadline.getTime() - today.getTime())/(oneDay)));
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
      return 0;
    }
  },

  render: function () {
    var percentFundedBarStyle = {width: String(this.percentFunded()) + '%'};
    var percentFundedBar = (
      <div className='percent-funded-bar center'>
        <div className='funding-fill' style={percentFundedBarStyle}></div>
      </div>
    );

    return (
      <div className='project-show-sidebar lightest-grey'>
        <h1 className='text-center top-padding no-margin'>{this.contributorsCount()}</h1>
        <h4 className='text-center no-margin'>backers</h4>
        <h1 className='text-center top-padding no-margin'>${this.amountRaised()}</h1>
        <h4 className='text-center no-margin'>raised of ${this.props.project.funding_goal} goal</h4>
        <h1 className='text-center top-padding no-margin'>{this.daysLeft()}</h1>
        <h4 className='text-center'>days left</h4>
        { percentFundedBar }
        <button className='btn btn-default contribute'
                onClick={this.props.openContribute}>Contribute!</button>
      </div>

    )
  }
})
