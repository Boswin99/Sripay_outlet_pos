import QRCodeGenerator from './QRCodeGenerator';
import { Button } from 'antd';
import payIcone from '../../assets/icone/pay.png'


import {
    CloseCircleOutlined,
} from "@ant-design/icons";


const PaymentQr = ({ payAmount }) => {
    return (
        <>
            <QRCodeGenerator />
            <div  >
                <Button
                    style={{color:'red',width:'320px',height:'40px',border:'red',fontFamily:'"Poppins", serif'}}
                // onClick={payAmountSubmit}
                >
                    Cansel To Pay
                    <CloseCircleOutlined size={50} width={10} />
                </Button>

            </div>

        </>
    );
}
export default PaymentQr;