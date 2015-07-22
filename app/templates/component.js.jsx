import GrComponentFactory from "./gr_component_factory";

/*
 <%= name %> is used for _________
*/
export default GrComponentFactory.createClass({
  propTypes: {
    foo: React.PropTypes.string.isRequired // foo is used for _______
  },

  render: function() {
    return <div>
             {this.props.foo}
           </div>;
  }
});