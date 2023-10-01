
import "./Profile.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram ,AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
export default function Profile(){
    return(
        <>
        <div className="profile-card">
            <div className="image">
                <img className="profile-img" src="https://speakerhub.com/sites/default/files/styles/speaker_share/public/user/profile_picture/2021/07/29/wyatt-carrell.png?itok=sGiwD8RS"></img>
            </div>
           
            <div className="text-data">
                <span className="name">UserName:<span style={{paddingLeft:8+"px",fontSize:22+"px",fontWeight:400}}>coding lab</span></span>
                <span className="name">Email:<span style={{paddingLeft:8+"px",fontSize:22+"px",fontWeight:400}}>coding lab</span></span>
                <span className="name">Occupation:<span style={{paddingLeft:8+"px",fontSize:22+"px",fontWeight:400}}>coding lab</span></span>
                <span className="name">Phone Number:<span style={{paddingLeft:8+"px",fontSize:22+"px",fontWeight:400}}>coding lab</span></span>
            </div>
            <div className="media-buttons">
             <a  className="link" href="#"><BsFacebook></BsFacebook></a>
             <a  className="link" href="#"><AiFillInstagram></AiFillInstagram></a>
             <a className="link" href="#"><BiLogoGmail></BiLogoGmail></a>
             <a className="link" href="#"><AiFillTwitterCircle></AiFillTwitterCircle></a>
            </div>
        </div>
        </>
    )
}