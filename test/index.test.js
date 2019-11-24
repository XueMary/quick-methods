import quick from '../lib/index';

test('copy string', () => {
  const string = 'xue ji hong'
  if(document.execCommand){
    expect(quick.copy(string)).toBeTruthy();
  }else{
    expect(quick.copy(string)).toBeFalsy();
  }
  
  expect(quick.copy()).toBeFalsy();
});