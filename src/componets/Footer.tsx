interface FooterProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ className, style, children }) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default Footer;
