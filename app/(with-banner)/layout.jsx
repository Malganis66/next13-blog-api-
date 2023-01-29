export default ({ children }) => {
  return (
    <div>
      <marquee style={{background: '#fff', color: 'purple'}}>These are my thoughts</marquee>
      {children}
    </div>
  );
};
