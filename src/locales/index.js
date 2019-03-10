import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import zgh from 'react-intl/locale-data/zgh';
import enUSAnt from 'antd/lib/locale-provider/en_US';
import zhCNAnt from 'antd/lib/locale-provider/zh_CN';

const zhCN = {
  'App.username': '用户名',
  'App.password': '密码',
};
const enUS = {
  'App.username': 'Username',
  'App.password': 'Password',
};

addLocaleData([
  ...en,
  ...zh,
  ...zgh,
  { locale: 'en_US', parentLocale: 'en' },
  { locale: 'zh_CN', parentLocale: 'zh' },
]);


export const ANT_LANGPACKAGE = {
  en_US: enUSAnt,
  zh_CN: zhCNAnt,
};

export const LANGPACKAGE = {
  en_US: enUS,
  zh_CN: zhCN,
};
