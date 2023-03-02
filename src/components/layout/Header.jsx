import React from 'react'
import '../../css/mainlayout.css'
import { Link } from 'react-router-dom';
import {AiFillHome,AiOutlinePlusCircle} from 'react-icons/ai';
import {MdInsertComment,MdNotifications} from 'react-icons/md';

function Header() {
  return (
    <div className='a-container'>
        <Link to="/" className='a-header'>HelloWorld</Link>
        <div className='a-navi'>
            {/* NAVI */}
            <Link to="/" className="a-navi-link">
                <AiFillHome/>
                홈
            </Link>
            <Link to="/topic" className="a-navi-link">
                <MdInsertComment/>
                토픽
            </Link>
            <Link to="/notification" className="a-navi-link">
                <MdNotifications/>
                알림
            </Link>
            <div className='a-navi-create'>
                <AiOutlinePlusCircle/>
                글쓰기
                {/* 모달창 만들기 (todolist 참고) */}
            </div>
        </div>
        <div className='a-mypage'>
            Mypage
            {/* 얘도 아마 모달인듯? */}
        </div>
    </div>
  )
}

export default Header