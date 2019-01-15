import pathToRegexp from 'path-to-regexp';
import { getUser } from 'Services/app';

export default {
  namespace: 'app',
  state: {
    List: [],
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(({ pathname }) => {
        const match = pathToRegexp('/').exec(pathname);
        if (match) {
          dispatch({ type: 'query' });
        }
      });
    },
  },
  effects: {
    * query () {
      console.log('默认加载', 1);
    },
    * getUser ({ payload }, { call, put }) {
      const { data, success } = yield call(getUser, payload);
      if (success) {
        yield put({
          type: 'getUserSuccess',
          payload: {
            List: data.list,
          },
        });
      }
    },
  },
  reducers: {
    getUserSuccess (state, { payload }) {
      const { List } = payload;
      return {
        ...state,
        List,
      };
    },
  },
};
