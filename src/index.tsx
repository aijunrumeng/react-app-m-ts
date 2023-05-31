import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd-mobile';
import zhCN from 'antd-mobile/es/locales/zh-CN';

import store from '@/store';

import Router from '@/router';

import './assets/style/base.css';

const container = document.getElementById('root') as Element;
const root = ReactDOM.createRoot(container);

const app = (
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <Router />
    </ConfigProvider>
  </Provider>
);

root.render(app);
