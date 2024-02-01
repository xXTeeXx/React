import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SignIn from "./commponents/SignIn";
import SignUp from "./commponents/register";// Import the new SignUp component
import ItemsList from "./commponents/itemsList";
import StudentsList from "./commponents/StudentList";
import SubjectsList from "./commponents/subjectsList";
import Item from "./commponents/itemsList/item";
import ItemFormFind from "./commponents/itemformfind";
import StudentFormFind from "./commponents/studentformfind";
import SubjectFormFind from "./commponents/subjectformfind";
import Student from "./commponents/StudentList/student";
import Subject from "./commponents/subjectsList/subjects";
import './App.css';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleSignUpSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div>
        <h3>My Project</h3>
        <nav>
          <Link to="/">หน้าหลัก</Link>
          <hr />
          {!isLoggedIn && (
            <>
              <Link to="/signin">เข้าสู่ระบบ</Link><br />
              <Link to="/signup">สมัคร</Link>
            </>
          )}
        </nav>

        <Routes>
          <Route
            path="/signin"
            element={<SignIn onLoginSuccess={handleLoginSuccess} />}
          />
          <Route
            path="/signup"
            element={
              <SignUp
                onSignUpSuccess={() => {
                  handleSignUpSuccess();
                  // Redirect to login after successful signup
                  window.location.href = "/signin";
                }}
              />
            }
          />
          <Route
            path="/"
            element={
              <>
                <div className="card">
                  {isLoggedIn ? (
                    <>
                      <p>ยินดีต้อนรับ</p>
                      <div className="app">
                        <div className="card">
                          <h2>Items</h2>
                          <ItemFormFind />
                          <Item id="4" />
                          <ItemsList />
                        </div>

                        <div className="card">
                          <h2>Students</h2>
                          <StudentFormFind />
                          <Student id="1" />
                          <StudentsList />
                        </div>

                        <div className="card">
                          <h2>Subjects</h2>
                          <SubjectFormFind />
                          <Subject id="2" />
                          <SubjectsList />
                        </div>
                      </div>
                    </>
                  ) : (
                    <p>กรุณา Login </p>
                  )}
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;