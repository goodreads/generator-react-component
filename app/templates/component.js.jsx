import GrComponentFactory from "./gr_component_factory";

/*doc
---
title: <%= name %>
name: <%= filename %>
category: React
---

*Props*

<dl>
  <dt>
    `label`
  </dt>
  <dd>
    A string to be displayed. (Required)
  </dd>
</dl>
*/
export default GrComponentFactory.createClass({
  propTypes: {
    label: React.PropTypes.string.isRequired
  },

  clickHandler() {
    this.setState({ label: "CLICKED" });
  },

  getInitialState() {
    return {
      label: this.props.label
    };
  },

  render() {
    return <div className="<%= varName %>" onClick={this.clickHandler}>
             {this.state.label}
           </div>;
  }
});
