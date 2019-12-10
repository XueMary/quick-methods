function debounce(fn, time) {
  let t = new Date().getTime();
  let first = true;

  return async function() {
    let newTime = new Date().getTime()
    if (newTime - t > time || first) {
      first = false;
      await fn(...arguments);
      t = newTime;
    }
  };
}

export default {
  debounce
}
