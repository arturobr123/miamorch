import React from 'react';
import moment from 'moment';

class Countdown extends React.Component {
  state = {
    years: undefined,
    months: undefined,
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeTillDate, timeFormat } = this.props;
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      console.log(then);
      console.log(now);
      const countdown = moment(now - then);
      const years = countdown.format('Y');
      const months = countdown.format('M');
      const days = countdown.format('D');
      const hours = countdown.format('HH');
      const minutes = countdown.format('mm');
      const seconds = countdown.format('ss');

      this.setState({ years, months, days, hours, minutes, seconds });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { years, months, days, hours, minutes, seconds } = this.state;

    return (
      <div>
        <h1>Countdown</h1>
        <div className="countdown-wrapper">
          <div className="countdown-item">
            {years}
            <span>years</span>
          </div>
          <div className="countdown-item">
            {months}
            <span>months</span>
          </div>
          <div className="countdown-item">
            {days}
            <span>days</span>
          </div>
          <div className="countdown-item">
            {hours}
            <span>hours</span>
          </div>
          <div className="countdown-item">
            {minutes}
            <span>minutes</span>
          </div>
          <div className="countdown-item">
            {seconds}
            <span>seconds</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Countdown;
