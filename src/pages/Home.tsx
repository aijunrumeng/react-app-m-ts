import { useSelector } from 'react-redux';
import type { RootState } from '@/store';

import { Space, Button } from 'antd-mobile';
import { SearchOutline } from 'antd-mobile-icons';

import * as userAPI from '@/services/user';

import styles from './index.less';
import { useEffect } from 'react';

export default function Home() {
  const info = useSelector((state: RootState) => state.info);

  useEffect(() => {
    userAPI.queryUserInfo();
  }, []);

  return <div className={styles['home']}>home</div>;
}
