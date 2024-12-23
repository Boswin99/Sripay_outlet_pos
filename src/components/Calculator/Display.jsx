import { Typography } from 'antd';
import { formatCurrency } from '../../utils/formatters';
import '../../styles/Display.css';

const { Title } = Typography;

function Display({ value, currency }) {
  return (
    <div className="display">
      <Title level={7} style={{ margin: 0, color: '#03045e' }}>
        {formatCurrency(value, currency)}
      </Title>
    </div>
  );
}

export default Display;