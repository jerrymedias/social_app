import PropTypes from "prop-types";
import "./InputField.css"; // Optional: For styling
import TextualCta from "../TextualCta/TextualCta";
import ImageLoader from "../ImageLoader/ImageLoader";

const InputField = ({
  label,
  placeholder,
  cta,
  onChange,
  type,
  toggleEye,
  showEye,
  bgColor,
  fieldType,
  className,
}) => {
  return (
    <div className="flex flex-col input-field">
      <div className="flex items-center justify-between">
        <label className="font-medium text-sm input-label">{label}</label>
        {cta?.label && <TextualCta cta={{ label: "Forgot password?" }} />}
      </div>
      <div className="input-wrapper">
        <input
          type={type}
          className={`font-normal text-base input-text mt-2 ${
            className ? className : "p-2"
          }`}
          placeholder={placeholder}
          required
          onChange={onChange}
          style={{
            background: bgColor ? bgColor : "transparent",
            height: fieldType == "sm" ? "78px" : "43px",
          }}
        />
        {showEye && (
          <div className="eye-wrapper" onClick={toggleEye}>
            <ImageLoader
              imageUrl="src/assets/eye.png"
              height="20"
              width="20"
              altText="eye"
            />
          </div>
        )}
      </div>
    </div>
  );
};

// PropTypes for type checking
InputField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  cta: PropTypes.shape({
    label: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
  }),
};

export default InputField;
