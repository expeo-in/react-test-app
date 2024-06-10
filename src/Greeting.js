const Greeting = function (props) {
  if (props.name) return <h1>Hi {props.name}</h1>;
  else return <h1>Hi Guest</h1>;
};

export default Greeting;
