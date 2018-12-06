(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['quiz2'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"question\">\r\n    <div class=\"radio-buttons\">\r\n      <div class=\"close-button\">\r\n	  <button type=\"button\" class=\"close\">X</button>\r\n      </div>\r\n      <div id=\"question-text\" class=\"questionTextHeader\">\r\n          <em class=\"actualText\" data-name=\""
    + alias4(((helper = (helper = helpers.question || (depth0 != null ? depth0.question : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.question || (depth0 != null ? depth0.question : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question","hash":{},"data":data}) : helper)))
    + "</em>\r\n      </div>\r\n        <fieldset class=\"answers\">\r\n            <legend>Choose your answer</legend>\r\n            <div>\r\n                <input type=\"radio\" name=\""
    + alias4(((helper = (helper = helpers.question || (depth0 != null ? depth0.question : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question","hash":{},"data":data}) : helper)))
    + "\" class=\"first-answer\" value=\""
    + alias4(((helper = (helper = helpers.firstAnswer || (depth0 != null ? depth0.firstAnswer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstAnswer","hash":{},"data":data}) : helper)))
    + "\">\r\n                <label for=\"firstAnswer\">"
    + alias4(((helper = (helper = helpers.firstAnswer || (depth0 != null ? depth0.firstAnswer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstAnswer","hash":{},"data":data}) : helper)))
    + "</label>\r\n            </div>\r\n            <div>\r\n                <input type=\"radio\" name=\""
    + alias4(((helper = (helper = helpers.question || (depth0 != null ? depth0.question : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question","hash":{},"data":data}) : helper)))
    + "\" class=\"second-answer\" value=\""
    + alias4(((helper = (helper = helpers.secondAnswer || (depth0 != null ? depth0.secondAnswer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondAnswer","hash":{},"data":data}) : helper)))
    + "\">\r\n                <label for=\"secondAnswer\">"
    + alias4(((helper = (helper = helpers.secondAnswer || (depth0 != null ? depth0.secondAnswer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondAnswer","hash":{},"data":data}) : helper)))
    + "</label>\r\n            </div>\r\n            <div>\r\n                <input type=\"radio\" name=\""
    + alias4(((helper = (helper = helpers.question || (depth0 != null ? depth0.question : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question","hash":{},"data":data}) : helper)))
    + "\" class=\"third-answer\" value=\""
    + alias4(((helper = (helper = helpers.thirdAnswer || (depth0 != null ? depth0.thirdAnswer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thirdAnswer","hash":{},"data":data}) : helper)))
    + "\">\r\n                <label for=\"thirdAnswer\">"
    + alias4(((helper = (helper = helpers.thirdAnswer || (depth0 != null ? depth0.thirdAnswer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thirdAnswer","hash":{},"data":data}) : helper)))
    + "</label>\r\n            </div>\r\n            <div>\r\n                <input type=\"radio\" name=\""
    + alias4(((helper = (helper = helpers.question || (depth0 != null ? depth0.question : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question","hash":{},"data":data}) : helper)))
    + "\" class=\"fourth-answer\" value=\""
    + alias4(((helper = (helper = helpers.fourthAnswer || (depth0 != null ? depth0.fourthAnswer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fourthAnswer","hash":{},"data":data}) : helper)))
    + "\">\r\n                <label for=\"fourthAnswer\">"
    + alias4(((helper = (helper = helpers.fourthAnswer || (depth0 != null ? depth0.fourthAnswer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fourthAnswer","hash":{},"data":data}) : helper)))
    + "</label>\r\n            </div>\r\n        </fieldset>\r\n    </div>\r\n</div>\r\n";
},"useData":true});
})();