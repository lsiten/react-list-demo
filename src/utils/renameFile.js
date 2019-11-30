import uuid from 'uuid';

const getFileExtension = fileName => fileName.split('.').pop();
export default function (fileName) {
  return `${uuid()}.${getFileExtension(fileName)}`;
}
