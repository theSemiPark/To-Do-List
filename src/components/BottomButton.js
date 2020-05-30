import React, { Fragment } from 'react';
import './BottomButton.css'

const BottomButton = ({removeLast, removeDone, keyword, onChange}) => {
    return (
        <div className="wrapper">
            <input className="keywordBox" placeholder="키워드를 입력하세요.." name="keyword" value={keyword} onChange={onChange}/>
            <div>
                <span className="action-button" onClick={removeLast}>지난 내역 삭제하기</span>
                <span className="action-button" onClick={removeDone}>완료한 내역 삭제하기</span>
            </div>
        </div>
    );
};

export default BottomButton;