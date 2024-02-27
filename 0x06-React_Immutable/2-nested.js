import { fromJS } from './node_modules/immutable/dist/immutable';

export default function accessImmutableObject(object, array) {
  const mappedObject = fromJS(object);

  return mappedObject.getIn(array, undefined);
}
