const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm p-4 ${className} border shadow-sm`}>
      {children}
    </div>
  );
};

export default Card;