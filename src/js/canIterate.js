export default function canIterate(object){
  return !!object && Object.getPrototypeOf(object)[Symbol.iterator] !== undefined;
}