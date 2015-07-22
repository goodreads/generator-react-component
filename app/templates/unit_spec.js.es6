import SpecHelper from "../../base_spec_helper";
import <%= name %> from "../../../src/react_components/<%= componentFilenameBase %>";

describe("<%= name %>", () => {

  let $ = null;

  context("when foo is XYZ", () => {
    beforeEach(() => {
      $ = SpecHelper.renderToCheerio(<%= name %>, { foo: "XYZ" });
    });

    it("renders XYZ", () => {
      $('div').text().should.eql("XYZ");
    });

  });

});