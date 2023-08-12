/* eslint-disable react/prop-types */
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";

const TextAreaInput = ({ label, name, type, placeholder, className }) => {
  return (
    <div className="mt-8">
      <Label htmlFor={name} className="text-sm">{label}</Label>
      <Textarea
        type={type || 'text'}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`rounded-lg mt-2 ${className} placeholder:text-xs`}
        minLength="50"
      />
    </div>
  );
};

export default TextAreaInput;
