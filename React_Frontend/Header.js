const Header = (props) => {
    return (
      <header style={{ textAlign : "center", color: 'White', backgroundColor: '#114c5f', height: "100px", justifyContent: "Center", 
      width: "100%"}}>
        <h1>{props.name}</h1>
      </header>
    );
  };
  // Definición de PropTypes
Header.propTypes = {
    name: PropTypes.string.isRequired
};

  window.Header = Header;
