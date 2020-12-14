import './OneInterval.css';

function OneInterval(props) {
  const dyStyle = {
    width: props.width,
    backgroundColor: props.color,
    border: `${props.borderWidth} solid black`
  }


  return (
    <div className="OneInterval" style={dyStyle}></div>
  );
}

export default OneInterval;
