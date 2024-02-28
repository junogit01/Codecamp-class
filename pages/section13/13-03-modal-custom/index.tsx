import React, { useState } from 'react';
import { Modal } from 'antd';

export default function ModalCustomPage():JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    }

    const handleOk = () => {
        setIsOpen(false);
    }
    const handleCancle = () => {
        setIsOpen(false);
    }




    
    return(
        <div>
            <button onClick={showModal}>모달창 열기</button>
            <Modal title="모달 제목" open={isOpen} onOk={handleOk} onCancel={handleCancle}>
                비밀번호 입력 : <input type="password"/>
            </Modal>
        </div>
    )
}