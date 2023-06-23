import Label from "./Label";
import "./Input.css";

const Input = (props) => {
  return (
    <div>
      {props.labelText ? (
        <Label labelText={props.labelText} className={props.labelClassName} />
      ) : null}
      <input
        name={props.name}
        type={props.type}
        className={`input ${props.className}`}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        value={props.value}
        onChange={props.onChangeHandler}
        required
      />
    </div>
  );
};

export default Input;
