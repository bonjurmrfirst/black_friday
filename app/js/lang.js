var langs = ['en', 'ru', 'ua'];
var langCode = '';
var langJS = null;


var translate = function (jsdata)
{
  $("[tkey]").each (function (index)
  {
    var strTr = jsdata [$(this).attr ('tkey')];
    $(this).html (strTr);
  });
};

langCode = 'ru';
$.getJSON('assets/lang/' + langCode + '.json', translate);

function switchLang(setLang) {
  if (langs.indexOf(setLang) + 1)
    $.getJSON('assets/lang/' + setLang + '.json', translate);
  else
    $.getJSON('assets/lang/' + 'ru.json', translate);
}

