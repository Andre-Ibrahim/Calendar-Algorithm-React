import './OneInterval.css';
import OneInterval from './OneInterval'

function Timeline(props) {
  //props parameters binary string
  const binary = props.binary
  const jsx = []
  let color = ""
  const width = (100/binary.length) + "%"
  for(let i = 0; i < binary.length; i++){
      if(binary[i] === '0'){
        color = "grey"
      }

      jsx.push(<OneInterval width={width} color={color}/>)

      color = ""

  }


  return (
    <div>{jsx}</div>
  );
}

export default Timeline;
