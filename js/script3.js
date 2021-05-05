function Home() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "App home", id: "home" }, /*#__PURE__*/
      React.createElement("header", { className: "App-header" }, /*#__PURE__*/
      React.createElement("div", { className: "star-small" }), /*#__PURE__*/
      React.createElement("div", { className: "star-mid" }), /*#__PURE__*/
      React.createElement("div", { className: "star-large" }), /*#__PURE__*/
      React.createElement("i", { className: "logo fa fa-rocket" }), /*#__PURE__*/
      React.createElement("img", { src: "https://sanaullah.netlify.app/navlogov2.svg", className: "App-logo", alt: "logo" }), /*#__PURE__*/
      React.createElement("p", null, "Edit ", /*#__PURE__*/
      React.createElement("code", null, "some text"), " & some more text."), /*#__PURE__*/
  
      React.createElement("a", {
        className: "App-link",
        href: "https://reactjs.org",
        target: "_blank",
        rel: "noopener noreferrer" }, "Learn Home"))));
  
  
  
  
  
  
  }
  
  
  
  
  
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        sticky: false };
  
    }
  
    componentDidMount() {
      console.log('mounted');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 4) {
          this.setState({ ...this.state, sticky: true });
        } else {
          this.setState({ ...this.state, sticky: false });
        }
  
      });
    }
  
    render() {
      let stickit = this.state.sticky;
  
      return /*#__PURE__*/(
        React.createElement("div", { className: "App" }, /*#__PURE__*/
        React.createElement("div", { className: "App-inner" }, /*#__PURE__*/
        React.createElement("div", { className: stickit ? 'routernav-container stickit' : 'routernav-container' }, /*#__PURE__*/
        React.createElement("div", { className: "routernav-inner" }, /*#__PURE__*/
        React.createElement("div", { className: "container-logo" }, /*#__PURE__*/
        React.createElement("a", { href: "/" }, /*#__PURE__*/
        React.createElement("i", { className: "logo fa fa-rocket" })), /*#__PURE__*/
  
        React.createElement("h1", { className: "logo-text" }, /*#__PURE__*/React.createElement("a", { href: "/" }, "ToUpMarketong"))))), /*#__PURE__*/
  
  
  
  
  
  
        React.createElement(Home, null))));
  
  
  
  
  
  
  
  
  
    }}
  
  
  
  // Rendering to DOM/HTML 
  ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));