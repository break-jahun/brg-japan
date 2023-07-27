import _ from 'lodash';
import { AtomEffect } from 'recoil';

// const IS_DEBUG = process.env.NODE_ENV !== 'production';
const IS_DEBUG = false;

/**
 * @remarks
 * 상태값의 변화를 관찰하기 위한 effect 입니다.
 */
const historyEffect: <T>(name: string) => AtomEffect<T> =
  (name) =>
  ({ setSelf, onSet }) => {
    onSet((newValue: any, oldValue: any) => {
      if (!IS_DEBUG) {
        return;
      }
      if (typeof newValue === 'object') {
        const properties = _.union(
          Object.keys(oldValue),
          Object.keys(newValue)
        );
        const list: { property: string; before: string; after: string }[] = [];
        properties.forEach((property) => {
          const before = `${JSON.stringify(oldValue?.[property])}`;
          const after = `${JSON.stringify(newValue?.[property])}`;

          if (before !== after) {
            list.push({ property, before, after });
          }
        });

        if (list.length > 0) {
          console.log(`%c[${name}]`, 'color:red;font-weight:bold;');
          list.forEach((item) => {
            console.log(`%c[${item.property}]`, 'color:blue;font-weight:bold;');
            console.log(
              `%c${item.before} -> ${item.after}`,
              'font-weight:bold;'
            );
          });
        }
      }

      if (typeof newValue !== 'object') {
        if (oldValue !== newValue) {
          console.log(`%c[${name}]`, 'color:red;font-weight:bold;');
          console.log(`%c${oldValue} -> ${newValue}`, 'font-weight:bold;');
        }
      }
      console.log('현재상태', newValue);
    });
  };

export default historyEffect;
