import * as Vsc from "react-icons/vsc";
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

function App() {

  const [loading,setLoading] = useState(false);

  const sendEmail = (e) => {
      e.preventDefault();
      setLoading(true);
      emailjs.sendForm('service_x3fysx9','template_ng8pzz8',e.target,{
        publicKey: 'Cfm89S9r4DYcYVxGo',
      })
      .then((res)=>{
        if(res.status == 200){
          toast("پیام با موفقیت ارسال شد!");
          setLoading(false);
        }
      },(error)=>{
        toast.error("ارسال پیام با شکست مواجه شد!");
        setLoading(false);
      })
      
  }

  const handleFocus = (e) => {
    let tags = document.querySelectorAll('.form-group');

    tags.forEach(tag => {
      tag.classList.remove('active')
    });

    e.target.parentElement.classList.add('active')
  }

  return (
    <div className="App vh-100 d-flex align-items-center justify-content-center position-relative">
      <div className="main row flex-grow-1 m-0 p-5 p-md-0 d-flex justify-content-center">
        <ToastContainer />
        <div className="formBox col-12 col-sm-8 col-md-5 col-lg-4 col-xl-3 bg-white p-4">
          <h6 className="text-muted text-center mb-3 mt-1 p-0 position-relative">ارسال پیام به مدیریت</h6>
          <form className="d-flex gap-4 flex-column" onSubmit={(e)=>sendEmail(e)}>
            <div className="form-group position-relative">
              <input type="text" name="name" className="form-control" onFocus={(e) => handleFocus(e)} placeholder="نام شما..." required />
            </div>
            <div className="form-group position-relative">
              <input type="email" name="email" className="form-control" onFocus={(e) => handleFocus(e)} placeholder="آدرس ایمیل شما..." required />
            </div>
            <div className="form-group position-relative">
              <input type="text" name="title" className="form-control" onFocus={(e) => handleFocus(e)} placeholder="عنوان پیام شما..." required />
            </div>
            <div className="form-group position-relative">
              <textarea name="message" className="form-control" rows="4" onFocus={(e) => handleFocus(e)} placeholder="متن پیام شما..." required></textarea>
            </div>

            <div className="w-100">
              <button className="sendBtn btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2" disabled={loading} >
              {
                loading &&
                <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                
              }
              <span>ارســال پیــام</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="footer text-center text-white py-3 position-absolute bottom-0 start-0 end-0">
        <small> طراحی شده توسط <a href="https://hamidkamyab.ir/" className="text-warning">حمید کامیاب</a></small>
      </div>
    </div>
  );
}

export default App;
