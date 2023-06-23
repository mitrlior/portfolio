import "./Button.css";

const Button = (props) => {
  const handleClick = (e) => {
    props.onClick();
  };

  return (
    <button
      type={props.type ? props.type : ""}
      className={`button ${props.className}`}
      onClick={handleClick}
    >
      {props.title}
    </button>
  );
};

export default Button;
