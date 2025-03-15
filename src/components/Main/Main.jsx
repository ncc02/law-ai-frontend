import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {
    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)
  return (
    <div className='main'>
        <div className="nav">
            <p>Legal AI</p>
            <img src={assets.user_icon} alt="" />
        </div>

        <div className='main-container'>
            {!showResult?<><div className="greet">
                <p><span>Xin chào</span></p>
                <p>Hôm nay bạn cần tư vấn gì về pháp luật?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Luật an ninh mạng là gì ?</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Tội phạm mạng là gì ?</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Khủng bố mạng là gì ?</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Tóm tắt một văn bản pháp luật giúp tôi</p>
                    <img src={assets.message_icon} alt="" />
                </div>
            </div></>
            : <div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading?<div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>:
                    <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                </div>
                </div>}
            
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Nhập câu hỏi tại đây" name="" id="" />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input?<img onClick={()=>onSent()}src={assets.send_icon} alt="" />:null}
                    </div>
                </div>
                <div className="bottom-info">
                © 03/2025 AI - Hỏi đáp pháp luật™. Địa chỉ liên hệ: cuongtk2002@gmail.com
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main
