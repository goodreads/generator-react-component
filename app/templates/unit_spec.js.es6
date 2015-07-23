import SpecHelper from "../../base_spec_helper";
import <%= name %> from "../../../src/react_components/<%= componentFilenameBase %>";

describe("<%= name %>", () => {

  let $ = null;

  context("when label is XYZ", () => {
    beforeEach(() => {
      $ = SpecHelper.renderToCheerio(<%= name %>, { label: "XYZ" });
    });

    it("renders XYZ", () => {
      $('div').text().should.eql("XYZ");
    });

  });

});