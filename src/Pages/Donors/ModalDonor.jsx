import { useState } from "react";
import "./Modal.css";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className="modal-toggle" onClick={() => setIsOpen(true)}>
        Toggle modal
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Sign in to our platform</h3>
              <button className="close-btn" onClick={() => setIsOpen(false)}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <form>
                <label>Email</label>
                <input type="email" placeholder="name@company.com" required />
                
                <label>Password</label>
                <input type="password" placeholder="••••••••" required />
                
                <div className="remember-forgot">
                  <label>
                    <input type="checkbox" /> Remember me
                  </label>
                  <a href="#">Lost Password?</a>
                </div>
                
                <button type="submit" className="submit-btn">Login</button>
                <p>Not registered? <a href="#">Create account</a></p>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;