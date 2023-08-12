/* eslint-disable react/prop-types */
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

const TextInput = ({ label, name, type, placeholder, className }) => {
  return (
    <div className="mt-8">
      <Label htmlFor={name} className="text-sm">{label}</Label>
      <Input
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

export default TextInput;
