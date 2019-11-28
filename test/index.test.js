import copy from '../lib/String/copy'
import insetAtCursor from '../lib/String/insertAtCursor'

test('copy string', () => {
  const string = 'xue ji hong'
  if(document.execCommand){
    expect(copy(string)).toBeTruthy();
  }else{
    expect(copy(string)).toBeFalsy();
  }
  
  expect(copy()).toBeFalsy();
});

test('inset at cursor', () => {
  const string = 'xue ji hong'
  document.body.innerHTML = '\
  <div class="list_con">\
    <input type="textarea" id="textarea" />\
  </div>';
  var textarea = document.querySelector('#textarea')
  var target = textarea.value
  var results = target + string
  expect(insetAtCursor(textarea, target, string)).toBe(results);

  document.body.innerHTML = '\
  <div class="list_con">\
    <input type="textarea" id="textarea" />\
  </div>';
  var textarea = document.querySelector('#textarea')
  var target = textarea.value
  var results = target + string
  textarea.focus()
  textarea.select()
  expect(insetAtCursor(textarea, target, string)).toBe(string);
});