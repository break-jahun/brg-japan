type ValueOf<T> = T[keyof T];
type Entries<T> = [keyof T, ValueOf<T>][];

/**
 *
 * @remarks Object.entries의 값에 대한 타입 추론이 가능하도록 설정해주는 함수입니다.
 * 사용방법: 아래 objectEntries 함수를 objectEntries를 사용하는 파일에 import 하시면 됩니다.
 */
export function objectEntries<T extends object>(obj: T): Entries<T> {
  return Object.entries(obj) as Entries<T>;
}
