export function addClassToRoot (className) {
  if (typeof className !== 'string') 
    return new Error('parameter must be a string');

  document.documentElement.classList.add(className);
}

export function removeClassFromRoot (className) {
  if (typeof className !== 'string') 
    return new Error('parameter must be a string');

  document.documentElement.classList.remove(className);
}

export function clone (obj) {
  return JSON.parse(JSON.stringify(obj));
}