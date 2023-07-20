import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ProductDetails from './ProductDetails';


const QuickView = () => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
     const onCloseModal = () => setOpen(false);

    return (
        <>
         <span onClick={onOpenModal}>  <i className="bi bi-search"></i> </span>
            <Modal open={open} onClose={onCloseModal} center>
              
                    <div className="quick-view">
                     <ProductDetails />
                    </div>
          
            </Modal>
        </>
    );
};



export default QuickView;
