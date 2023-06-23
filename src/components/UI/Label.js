import "./Label.css";

const Label = (props) => {
  return (
    <label className={`label ${props.className}`}>{props.labelText}</label>
  );
};

export default Label;
