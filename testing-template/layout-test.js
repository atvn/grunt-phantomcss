var renderTemplate = function () {
  var templateStr = '<h1 class="testing__title">Tests</h1>{{#if anyFailed}}<div class="testing__status failed-bg">&nbsp;</div>{{else}}<div class="testing__status passed-bg">&nbsp;</div>{{/if}}<p class="testing__result">{{passedNumber}}&nbsp;passed,&nbsp;{{failedNumber}}&nbsp;failed&nbsp;of&nbsp;{{totalNumber}}&nbsp;tests.</p><ol class="testing__list">{{#if isPassed}}<li data-test-item class="testing__list__item passed-bg">{{else}}<li data-test-item class="testing__list__item failed-bg">{{/if}}<strong>{{itemName}}:&nbsp;<span>{{itemStatus}}</span></strong> </li></ol>',
    context = {
      anyFailed: true,
      passedNumber: '1',
      failedNumber: '3',
      totalNumber: '4',
      isPassed: false,
      itemName: 'name',
      itemStatus: 'status'
    };
  var template = Handlebars.compile(templateStr);
  var html = template(context);
  document.querySelector('#layout-test').innerHTML = html;
};

var init = function () {
  renderTemplate();
};

if (document.readyState !== 'loading') {
  init();
} else {
  document.addEventListener('DOMContentLoaded', init);
}
