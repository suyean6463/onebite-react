import './Button.css';

const Button = ({text, type, onClick}) => {
  return (<button onClick={onClick} className={`btn_comm ${type ? `btn_${type}` : ''}`}>{text}</button>)
}

export default Button;