window.PercentFundedBar = React.createClass({
  percentFunded: function () {
    var goal = parseInt(this.props.project.funding_goal)
    var percent = this.amountRaised()/goal * 100;
    if (percent > 100) {
      return 100;
    } else {
      return percent;
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

  render: function () {
    var percentFundedBarStyle = {width: this.props.width, height: this.props.height}
    var fillerStyle = {width: String(this.percentFunded()) + '%'};
    return (
      <div className='percent-funded-bar center' style={percentFundedBarStyle}>
        <div className='funding-fill' style={fillerStyle}></div>
      </div>
    );

  }
})
