import api from '@/services/index';
import { pathMatchRegexp } from '@/utils';
import mdlExtend from '@/utils/model';
import { DvaModel } from '../types/dva';

const { getData } = api;

export interface AppState {
  test: Number;
  data: any;
}

const AppModel: DvaModel<AppState> = {
  namespace: 'app',

  state: { test: 1, data: {} },

  effects: {
    *setUp(_, { put, all }) {
      if (
        pathMatchRegexp(['#/', '#/(.*)/login', '#/login'], window.location.hash)
      ) {
        return;
      }
      yield all([put({ type: 'getDectionary' })]);
    },

    *getData({ payload }, { call, put }) {
      const res = yield call(getData, payload);
      if (res.data) {
        yield put({
          type: 'setData',
          payload: res.data,
        });
      }
    },
  },

  reducers: {
    setData(state, { payload }) {
      return { ...state, data: payload };
    },
  },

  subscriptions: {
    setup({ dispatch }): void {
      dispatch({ type: 'setUp' });
    },
  },
};

export default mdlExtend(AppModel);
