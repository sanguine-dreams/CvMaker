
import {PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from './PdfMaker';
import { Button } from 'antd';
import { MyFormValues } from '../entities/Entities';

const PDFDown = ({CvC}:{CvC: MyFormValues}) => (
 <PDFDownloadLink 
 document={<MyDocument CvC={CvC}/>} fileName='CV-From-Sanguine'
 >
    <Button type='primary'>Download</Button>
 </PDFDownloadLink>
);

export default PDFDown;