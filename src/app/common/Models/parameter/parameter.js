import Property from '../property/property';
import Schema from '../schema/schema';
import Items from '../items/items';
import {
  combineProps,
  getAllProps,
  toSwagger,
  createIsValid,
  getProperty,
  makeAddObjectProp,
  makeRemoveObjectProp,
  } from '../utils/helpers';

/**
 * Parameter - Factory Function to create parameter objects;
 */
export default function Parameter() {
  const factories = {
    items: Items,
    schema: Schema,
  };

  const items = Items();
  const itemProps = items.getAllProps();
  const inProp = Property('in', undefined, () => true);

  getProperty(itemProps, 'type')
    .setRequired(() => inProp.value !== 'body');

  const props = combineProps(itemProps,
    [
      inProp,
      Property('name', undefined, () => true),
      Property('description'),
      Property('required', undefined, () => inProp.value === 'path'),
      Property('schema', undefined, () => inProp.value === 'body'),
    ]
  );

  const stateMethods = {
    setName(value) {
      getProperty(props, 'name').value = value;
    },

    setIn(value) {
      getProperty(props, 'in').value = value;
    },

    setRequired(value) {
      getProperty(props, 'required').value = value;
    },

  };

  const completeState = Object.assign(
    {},
    items,
    toSwagger(props),
    createIsValid(props),
    getAllProps(props),
    makeAddObjectProp(props, factories),
    makeRemoveObjectProp(props, factories),
    stateMethods
  );

  return Object.freeze(completeState);
}
