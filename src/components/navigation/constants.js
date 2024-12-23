import { 
  HomeOutlined,
  UserOutlined,
  TransactionOutlined 
} from '@ant-design/icons';

export const NAVIGATION_TABS = [
  { key: 'home', title: 'Home', icon: HomeOutlined ,path : '/home'},
  { key: 'transaction', title: 'Transaction', icon: TransactionOutlined ,path :'/transaction' },
  { key: 'profile', title: 'Profile', icon: UserOutlined ,path : '/profile'},
];