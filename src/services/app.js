// request api
import request from 'Utils';

export async function getUser () {
  return request({
    url: 'api/table/list',
    method: 'get',
  });
}
