import SpecHelper from "../interaction_spec_helper";
import <%= name %> from "../../../src/react_components/<%= componentFilenameBase %>";

describe("<%= name %>", () => {

  let <%= varName %>;
  let domNode;

  beforeEach(function() {
    <%= varName %> = SpecHelper.renderIntoDocument(<%= name %>, { label: "abc" });
    domNode = React.findDOMNode(<%= varName %>);
  });

  it("when clicked changes its message to CLICKED", (done) => {
    ReactTestUtils.Simulate.click(domNode);
    setTimeout(() => {
      domNode.textContent.should.eql("CLICKED");
      done();
    });
  });

});
