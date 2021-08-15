import Config from '@/utils/config';
import request, { RequestConfig } from '@/utils/request';
import api from './api';

const { apiPrefix, onlineMock } = Config;

const gen = (params: string) => {
  let url = params;
  let method = 'GET';

  const paramsArray = params.split(' ');
  if (paramsArray.length === 2) {
    method = paramsArray[0];
    url = paramsArray[1];
    // url = paramsArray[1];
  }

  return function (data: object, config: RequestConfig = {}): Promise<any> {
    const { useOnlineMock = false } = config;
    return request({
      baseURL: useOnlineMock ? onlineMock : apiPrefix,
      url,
      data,
      method,
      ...config,
    });
  };
};

type APIKeys = keyof typeof api;
type APIObject = { [key in APIKeys]: () => any };

const APIFunction = {} as APIObject;
for (const key of Object.keys(api)) {
  APIFunction[key] = gen(api[key]);
}

export default APIFunction;
