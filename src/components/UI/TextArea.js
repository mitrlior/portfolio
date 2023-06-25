import Label from "./Label";
import "./TextArea.css";

const TextArea = (props) => {
  return (
    <div>
      {props.labelText ? (
        <Label labelText={props.labelText} className={props.labelClassName} />
      ) : null}
      <textarea
        type={props.type}
        name={props.name}
        rows={props.rows}
        className={`text-area ${props.className}`}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        value={props.value}
        onChange={props.onChangeHandler}
        required
      />
    </div>
  );
};

export default TextArea;
