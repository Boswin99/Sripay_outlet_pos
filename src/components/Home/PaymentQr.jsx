import QRCodeGenerator from './QRCodeGenerator';


const PaymentQr = ({payAmount}) => {
    return(
        <>
            <div>
            {payAmount}
            </div>
            <QRCodeGenerator/>
        </>
    );
}
export default PaymentQr;
