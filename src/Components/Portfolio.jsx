

import { useState } from "react"
import emailjs from "@emailjs/browser";
import "./PortFolio.css"
export default function Portfolio() {

    const[name,seTName] = useState("");
    const [email,setEmail] = useState("");
    const[message,setMsg] = useState("");

    const[form,setForm] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault();
        const serviceId = "service_jzpd6g4";
        const templateId = "template_xudtah9";
        const publicKey = "8B3muuRRp5Z_-PzqK";

        const templateParams= {
            from_name:name,
            from_email:email,
            to_name:"Rahul lodhi",
            message:message
        }
    
        emailjs.send(serviceId,templateId,templateParams,publicKey)
            .then((res)=>{
                console.log("email send succesfull");
                setEmail("");
                setMsg("");
                seTName("");
                alert("Thank You For Messagin Me Email Is Recieved Successfully");
                setForm(false);
                console.log(templateParams);
            })
            .catch((e)=>{
                console.log(e);
                alert("there is something error please try again !")
            })
        

    }

   



    return (
        <div className="Portfolio">
            <div className="heading"><h1>PortFolio</h1></div>
            <div className="Intorduction">
                <div className="ME">
                    <h1>   <span>I'M</span> RAHUL LODHI</h1>
                    <h2>Mern Stack Developer</h2>
                </div>
                <div className="About">
                    <h1>About</h1>
                    <ul>
                        <li>Full-Stack Development: Passionate in building and maintaining end-to-end web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).</li>
                        <li>Database Management : Skilled in designing and managing NOSQL database with MONGODB with efficient storage and retrieval
                        </li>
                        <li>Front-end-expertise: Expertise in Dealing with APIs and Creating Responsive layout with REACTJS</li>
                        <li>Version Control : Versed in git using for version control and collaboration</li>
                    </ul>



                </div>

                <div className="education">
                    <div className="ed"><h1>Education</h1></div>
                    <div className="college">
                    <h3>RADHARAMAN ENGINEERING COLLEGE BHOPAL ( B.TECH : CSE )</h3>
                        <h4>SESSION : 2021-2025</h4>
                        <h4><b>CGPA : 7.95</b></h4>

                    </div>
                    <div className="hss">
                        <h3>GOVERNMENT MODEL HIGHER SECONDARY SCHOOL VIJAYRAGHAVGARH</h3>
                        <h4> SESSION : 2017-2021</h4>
                        <h4><b>XII : 88.2%</b></h4>
                       
                    </div>
                </div>

            </div>
            <div className="SkillandProject">
                <div className="top-Skills">
                    <div className="head">
                        <h1 >My Key Skills</h1>
                    </div>
                    <div className="skill">
                        <h1>  <i className="fa-brands fa-react react"></i></h1>
                        ReactJS
                    </div>
                    <div className="skill">
                        <h1><i className="fa-brands fa-js javas"></i></h1>
                        Javascript
                    </div>
                    <div className="skill">
                        <h1><i className="fa-brands fa-node nodejs"></i></h1>
                        NodeJs
                    </div>


                    <div className="skill">
                        <h1 >  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368" className="mongodb"><path d="M440-120v-319q-64 0-123-24.5T213-533q-45-45-69-104t-24-123v-80h80q63 0 122 24.5T426-746q31 31 51.5 68t31.5 79q5-7 11-13.5t13-13.5q45-45 104-69.5T760-720h80v80q0 64-24.5 123T746-413q-45 45-103.5 69T520-320v200h-80Zm0-400q0-48-18.5-91.5T369-689q-34-34-77.5-52.5T200-760q0 48 18 92t52 78q34 34 78 52t92 18Zm80 120q48 0 91.5-18t77.5-52q34-34 52.5-78t18.5-92q-48 0-92 18.5T590-569q-34 34-52 77.5T520-400Zm0 0Zm-80-120Z" /></svg></h1>
                        MongoDB
                        
                    </div>

                    <div className="skill">
                        <h1 > <i className="fa-solid fa-database SQL"></i></h1>
                        MYSQL
                        
                    </div>




                    <div className="skill">


                        
                        <h1><i className="fa-brands fa-square-github git"></i></h1>
                        Version Control</div>

                    <div className="skill">
                        <h1><i className="fa-brands fa-html5 ht"></i> &nbsp;<i class="fa-brands fa-css3-alt cs"></i></h1>
                        HTML & CSS
                    </div>

                    <div className="skill">
                        <h1><i className="fa-brands fa-bootstrap BTS"></i></h1>
                        BOOTSRAP
                    </div>

                </div>

                <div className="Projects">

                    <div className="key"><h2>ACADEMIC PROJECT</h2></div>

                    <div className="mernP">
                        <h1 className="head">MernProject</h1>
                        <div className="p">
                          
                          <a href="https://wanderlust-v6tc.onrender.com/listing" target="_blank">Wanderlust</a>
                        </div>
                    </div>



                    <div className="htcsJs">
                        <h1 className="hct">HTML & CSS & JAVASCRIPT PROJECT</h1>

                        <div className="pr">
                            <div className="p">
                               <a href="https://wendictionary.netlify.app/" target="_blank">Dictionary</a>
                            </div>

                            <div className="p">
                              <a href="https://github.com/RAHUL676789/Delta-Projects" target="_blank">SimonSay</a>
                            </div>
                        </div>

                    </div>
                    <div className="ReactP">
                        <h1>REACT PROJECT</h1>
                        <div className="pr">
                            <div className="p">
                             <a href="https://rcalendarwithreact.netlify.app/" target="_blank">Calendar</a>
                            </div>
                            <div className="p">
                              <a href="https://rasuswebsite.netlify.app" target="_blank">WebNews</a>
                            </div>
                            <div className="p">
                              <a href="https://glowing-paletas-92eb75.netlify.app/" target="_blank">WeatherApp</a>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
            <div className="Contact">
                <h1> Contact Me </h1>




                    
                  { form && <div className="formData">
                    <form onSubmit={handleSubmit} className="emailForm"> 
                    <button className="close" onClick={()=>setForm(false)}><i class="fa-solid fa-trash"></i></button>
                    <label htmlFor="name">Your Name</label>
                        <input 
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        id="name"
                        onChange={(e)=>seTName(e.target.value)}
                         />
                          &nbsp;
                          <label htmlFor="email">Your Email</label>
                         
                         <input type="text" 
                         placeholder="Your Email"
                         value={email}
                         id="email"
                         onChange={(e)=>setEmail(e.target.value)}/>
                           &nbsp;
                          
                          <label htmlFor="message">Meassage For me</label>
                          &nbsp;

                         <textarea
                          cols={30}
                          rows={5}
                          onChange={(e)=>setMsg(e.target.value)}
                          value={message}
                          id="message"

                         >

                         </textarea>
                            &nbsp;
                         <button type="submit" className="submit">Submit</button>


                    </form> </div>
                    
                    }








                <div className="gamil">

                   <div className="fst" onClick={()=>setForm(true)}>   <i class="fa-solid fa-envelope gm"> </i> rahullodhi3814@gmail.com</div> 
                    <div className="sec"> <i class="fa-solid fa-phone ph"></i>9302969810 </div>

                </div>



                <div className="social">
                    <a href="https://www.linkedin.com/in/rahul-lodhi-614748258/"  target="_blank">   <i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/RAHUL676789" target="_blanl">  <i class="fa-brands fa-github"></i></a>
                    <a href="https://www.instagram.com/rahull0dhi45?igsh=aWtkZng5a2w2bnpz" target="_blank">  <i class="fa-brands fa-instagram"></i> </a>
                </div>

            </div>
            <div className="footer">
              <h1>  "Thanks For Scrolling"</h1>
            </div>
        </div>
    )
}