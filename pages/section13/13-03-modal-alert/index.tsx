import React from 'react';
import { Modal } from 'antd';

export default function ModalAlertPage():JSX.Element {

    const onClickSuccess = (): void => {
        Modal.success({
            content: '성공했습니다',
          });
    }
    const onClickError = ():void => {
        Modal.error({
            title: '실패',
            content: 'some mess...',
          });
    }
    return(
        <div>
            <button onClick={onClickSuccess}>성공</button>
            <button onClick={onClickError}>실패</button>
        </div>
    )
}