import axios from 'axios';
import renameFile from '../utils/renameFile';
//
// const mock = (data, timeout) => new Promise((resolve) => {
//   setTimeout(() => resolve(data), timeout);
// });
const shotGet = url => params => axios.get(url, { params });

const api = {
  login: shotGet('/author/login'), //登录
  logout: shotGet('/author/logout'), //登出
  bookList: shotGet('/book/list'), //书列表
  bookCreate: shotGet('/book/create'), // 书创建
  bookGet: shotGet('/book/get'), // 书获取
  bookRemove: shotGet('/book/remove'), //书删除
  bookUpdate: shotGet('/book/update'), // 书更新
  chapterCreate: shotGet('/chapter/create'), // 章创建
  chapterGet: shotGet('/chapter/get'), // 章获取
  chapterRemove: shotGet('/chapter/remove'), // 章删除
  chapterReorder: shotGet('/chapter/reorder'), // 章排序
  chapterUpdate: shotGet('/chapter/update'), // 章更新
  conversationCreate: shotGet('/conversation/create'), // 节创建
  conversationRemove: shotGet('/conversation/remove'), // 节删除
  conversationReorder: shotGet('/conversation/reorder'), // 节排序
  conversationUpdate: shotGet('/conversation/update'), // 节更新
  uploadFile: ({
    file,
    filename,
    headers,
    onError,
    onSuccess,
    withCredentials
  }) => {
    const formData = new FormData();
    const fileName = renameFile(file.name);
    formData.append('file', file, fileName);
    axios.post('/common/upload', formData, {
      headers: {
        withCredentials,
        headers
      }
    }).then(({ data: response }) => {
      onSuccess(response, file);
    })
      .catch(onError);
    return {
      abort() {
        console.log('upload progress is aborted.');
      }
    };
  }
};


export default api;
