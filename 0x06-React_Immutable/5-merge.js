import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
  const list1 = List(page1);
  const list2 = List(page2);
  return list1.concat(list2);
}

export function mergeElements(page1, page2) {
  const object1 = Map(page1);
  const object2 = Map(page2);
  return object1.merge(object2);
}
