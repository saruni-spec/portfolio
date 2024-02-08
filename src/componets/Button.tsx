interface ButtonProps {
  text: string;
  className?: string;
  type?: "submit" | "reset" | "button";
}

const Button: React.FC<ButtonProps> = ({ text, className, type }) => {
  return (
    <div>
      <button type={type} className={className}>
        {text}
      </button>
    </div>
  );
};

export default Button;
