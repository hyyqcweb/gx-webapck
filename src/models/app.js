import pathToRegexp from 'path-to-regexp';
import { getUser } from 'Services/app';

function chooseLocale () {
  let _val = window.navigator.language.split('_')[0];
  switch (_val.substring(0, 2)) {
    case 'en':
      return 'en_US';
    case 'zh':
      return 'zh_CN';
    default:
      return 'en_US';
  }
}

export default {
  namespace: 'app',
  state: {
    List: [],
    i18n: `${chooseLocale()}`,
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
    * changeLang ({ payload: { value } }, { put }) {
      yield put({ type: 'updateLang', payload: { value } });
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
    updateLang (state, { payload: { value } }) {
      return {
        ...state,
        i18n: value,
      };
    },
  },
};
