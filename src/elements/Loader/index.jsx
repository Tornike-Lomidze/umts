import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 60 }} spin />;

const Loader = () => <Spin size="large" indicator={antIcon} />

export default Loader;