/**
 * @remarks
 * id 값을 생성해주는 함수입니다.
 */
function getUuid() {
  return Math.floor(Math.random() * 10000000000);
}

export default getUuid;
