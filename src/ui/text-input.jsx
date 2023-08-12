/* eslint-disable react/prop-types */
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { ErrorText } from "./error-text";

const TextInput = ({ label, name, type, placeholder, className, errors, onChange, value, defaultValue, maxLength, readOnly, disabled, labelClassName }) => {

  return (
    <div className="mt-8">
      <Label htmlFor={name} className={`${labelClassName} text-sm`}>{label}</Label>
      <Input
        type={type || 'text'}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`rounded-lg mt-2 ${className} placeholder:text-xs`}
        maxLength={maxLength}
        error={errors && errors[name]?.message}
        onChange={onChange}
        defaultValue={defaultValue || ''}
        value={value}
        readOnly={readOnly}
        disabled={disabled}
      />
      <ErrorText message={errors && errors[name]?.message} />
    </div>
  );
};

export default TextInput;