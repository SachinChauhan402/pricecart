import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="firstbox">
       <h4 className="version">FREE</h4>
       <p className="dollar">$0<span className="month">/month</span></p>
        <hr style={{width : "90%"}}/>
        <ul className="ul">
          <li>&#10004;<span style={{margin : "3px"}}>Single User</span></li>
          <li>&#10004;<span style={{margin : "3px"}}>5GB Storage</span></li>
          <li>&#10004;<span style={{margin : "3px"}}>Unlimited Public Projects</span></li>
          <li>&#10004;<span style={{margin : "3px"}}>Community Access</span></li>
          <li style={{ opacity : "0.5"}}>&#10006;<span style={{margin : "3px"}}>Unlimited Private Projects</span></li>
          <li style={{ opacity : "0.5"}}>&#10006;<span style={{margin : "3px"}}>Dedicated Phone Support</span></li>
          <li style={{ opacity : "0.5"}}>&#10006;<span style={{margin : "3px"}}>Free Subdomain</span></li>
          <li style={{ opacity : "0.5"}}>&#10006;<span style={{margin : "3px"}}>Monthly Status Reports</span></li>
        </ul>
        <button className="btn">BUTTON</button>

      </div>


      <div className="secondbox">
      <h4 className="version">PLUS</h4>
       <p className="dollar">$9<span className="month">/month</span></p>
        <hr style={{width : "90%"}}/>
        <ul className="ul">
          <li>&#10004;<span className="users" style={{margin : "3px"}}>5 Users</span></li>
          <li>&#10004;<span style={{margin : "3px"}}>50GB Storage</span></li>
          <li>&#10004;<span style={{margin : "3px"}}>Unlimited Public Projects</span></li>
          <li>&#10004;<span style={{margin : "3px"}}>Community Access</span>Community Access</li>
          <li>&#10004;<span style={{margin : "3px"}}>Unlimited Private Projects</span></li>
          <li>&#10004;<span style={{margin : "3px"}}>Dedicated Phone Support</span></li>
          <li>&#10004;<span style={{margin : "3px"}}>Free Subdomain</span></li>
          <li style={{ opacity : "0.5"}}>&#10006;<span style={{margin : "3px"}}>Monthly Status Reports</span></li>
        </ul>
        <button className="btn">BUTTON</button>
      </div>



      <div className="thirdbox">
      <h4 className="version">PRO</h4>
       <p className="dollar">$49<span className="month">/month</span></p>
        <hr style={{width : "90%"}}/>
        <ul className="ul">
          <li>&#10004;<span className="users" style={{margin : "3px"}}>Unlimited Users</span></li>
          <li>&#10004;<span style={{margin : "3px"}}>150GB Storage</span></li>
          <li>&#10004;<span style={{margin : "3px"}}>Unlimited Public Projects</span></li>
          <li>&#10004;<span style={{margin : "3px"}}>Community Access</span></li>
          <li>&#10004;<span style={{margin : "3px"}}>Unlimited Private Projects</span></li>
          <li>&#10004;<span style={{margin : "3px"}}>Dedicated Phone Support</span></li>
          <li>&#10004;<span style={{margin : "3px"}}><span className="users">Unlimited</span> Free Subdomain</span></li>
          <li>&#10004;<span style={{margin : "3px"}}>Monthly Status Reports</span></li>
        </ul>
        <button className="btn">BUTTON</button>
      </div>
    
    </div>
  );
}

export default App;
