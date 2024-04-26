import { useEffect, useState } from "react";
import * as Vsc from "react-icons/vsc";

function App() {

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

        <div className="formBox col-12 col-sm-8 col-md-5 col-lg-4 col-xl-3 bg-white p-4">
          <h6 className="text-muted text-center mb-3 mt-1 p-0 position-relative">ارسال پیام به مدیریت</h6>
          <form className="d-flex gap-4 flex-column">
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
              <textarea name="body" className="form-control" rows="4" onFocus={(e) => handleFocus(e)} placeholder="متن پیام شما..." required></textarea>
            </div>

            <div className="w-100">
              <button className="btn btn-primary w-100">
                ارســال پیــام
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
