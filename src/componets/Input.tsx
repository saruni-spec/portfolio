interface InputProps {
  label?: string;
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  className,
  style,
  type,
}) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input
        placeholder={placeholder}
        className={className}
        style={style}
        type={type}
      />
    </div>
  );
};

export default Input;
