import { message } from 'antd';
import dva from 'dva';
import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';

const app = dva({
  history: createHistory(),
  onError (e) {
    message.error(e.message, 3);
  },
});

app.use(createLoading());

app.model(require('./models/app').default);

app.router(require('./router').default);

app.start('#root');
