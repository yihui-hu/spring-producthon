import { useCountdown } from "../hooks/useCountdown";

type DateTimeDisplayProps = {
  value: string;
  type: string;
};

const DateTimeDisplay = (props: DateTimeDisplayProps) => {
  const { value, type } = props;

  return (
    <div className="TimeContainer">
      <p className="TimeValue">{value}</p>
      <span className="TimeUnit">{type}</span>
    </div>
  );
};

type ShowCounterProps = {
  days: any;
  hours: any;
  minutes: any;
  seconds: any;
};

const ShowCounter = (props: ShowCounterProps) => {
  const { days, hours, minutes, seconds } = props;

  return (
    <div className="TimeWrapper">
      <DateTimeDisplay value={days} type={"Days"} />
      <DateTimeDisplay value={hours} type={"Hours"} />
      <DateTimeDisplay value={minutes} type={"Minutes"} />
      <DateTimeDisplay value={seconds} type={"Seconds"} />
    </div>
  );
};

type CountdownProps = {
  targetDate: Date;
};

const Countdown = (props: CountdownProps) => {
  const { targetDate } = props;
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return null;
  } else {
    return (
      <div className="CountdownContainer">
        <h4 style={{ fontWeight: 300 }}>Producthon starts in...</h4>
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </div>
    );
  }
};

export default Countdown;
