import { useState } from "react";
import { Button, Modal } from "antd";
import MyDocument from "../pdf/PdfMaker";
import { PDFViewer } from "@react-pdf/renderer";
import PDFDown from "../pdf/PdfViewer";
import { MyFormValues } from "../entities/Entities";

const ModalPop = ({CvC}:{CvC: MyFormValues}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };


  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
       Submit
      </Button>
      <Modal
        title="Preview PDF"
        width={'1500'}
        bodyStyle={{height: '80vh'}}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={(_, {CancelBtn }) => (
          <>
            <CancelBtn />
            <PDFDown CvC={CvC} />
          </>
        )}
      >
        <PDFViewer style={{width: '100%' , height: '100%'}}>
          <MyDocument CvC={CvC} />
        </PDFViewer>

       
      </Modal>
    </>
  );
};

export default ModalPop;
