import React, { useState } from 'react';
import { Modal } from 'antd';
import DaumPostcodeEmbed from 'react-daum-postcode';
import type { Address } from 'react-daum-postcode'

export default function ModalCustomPage():JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

    const onToggleModal = (): void => {
        setIsOpen((prev) => !prev);
    }


    const handleComplete = (data: Address): void => {
        console.log(data);
        onToggleModal();
    }

    return(
        <div>
            <button onClick={onToggleModal}>모달창 열기</button>

            {/* 모달종류 방식 1. 모달 숨기는 방법 */}
            {/* <Modal title="모달 제목" open={isOpen} onOk={handleOk} onCancel={handleCancle}>
                <DaumPostcodeEmbed onComplete={handleComplete}/>
            </Modal> */}

            {/* 모달 종류 방식 2. 모달을 삭제했다 다시 여는 방법 */}
            {isOpen && (<Modal title="모달 제목" open={true} onOk={onToggleModal} onCancel={onToggleModal}>
                <DaumPostcodeEmbed onComplete={handleComplete}/>
            </Modal>)}
            
            
        </div>
    )
}