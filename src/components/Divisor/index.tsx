interface DivisorProps {
  size: number;
}

const Divisor: React.FC<DivisorProps> = ({ size }) => {
  return <div style={{ width: '100%', height: `${size}px` }} />;
};

export default Divisor;
