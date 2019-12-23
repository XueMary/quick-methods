import base from '../Base'
function loadFn(fn) {
  let loading = false;
  async function load() {
    if (loading === true) {
      return true;
    }
    loading = true;
    await fn(...arguments);
    loading = false;
  }
  return load;
}

async function scrollShare(el, fn, busy, diff = 100) {
  if(busy===true){
    return 
  }
  let height = el.offsetHeight;
  let scrollTop = el.scrollTop;

  let wrap = el.children[0];
  let wrapHeight = wrap.offsetHeight;
  let diffHeight = wrapHeight - height;
  if (diffHeight - scrollTop <= diff) {
    await fn(...arguments);
  }  
}

function scrollHandle(sm = 20) {
  return base.debounce(loadFn(scrollShare), sm);
}
let bindScroll = scrollHandle();

export default bindScroll