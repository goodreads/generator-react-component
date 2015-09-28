import GrComponentFactory from "./gr_component_factory";

/*
 <%= name %> is used for _________
*/
export default GrComponentFactory.createClass({
  propTypes: {
    label: React.PropTypes.string.isRequired // label is used for _______
  },

  clickHandler: function() {
    this.setState({ label: "CLICKED" });
  },

  getInitialState: function() {
    return {
      label: this.props.label
    };
  },

  render: function() {
    return <div className="<%= varName %>" onClick={this.clickHandler}>
             {this.state.label}
           </div>;
  }
});
