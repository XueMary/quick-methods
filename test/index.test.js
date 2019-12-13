import copy from '../lib/String/copy'

test('copy string', () => {
  const string = 'xue ji hong'
  if(document.execCommand){
    expect(copy(string)).toBeTruthy();
  }else{
    expect(copy(string)).toBeFalsy();
  }
  
  expect(copy()).toBeFalsy();
});
