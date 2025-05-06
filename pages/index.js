import styles from "@/styles/Home.module.css";
import coding from "@/Images/coding.jpg";
import Head from "next/head";
import Link from "next/link";
import { Card } from "react-bootstrap";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

export default function Home() {

  const form = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const buttonStyle = {
    backgroundColor: isClicked ? "#a9cfff" : isHovered ? "#7faefc" : "transparent",
    color: isHovered || isClicked ? "white" : "#428af5",
    border: "2px solid #428af5",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    cursor: "pointer",
    width: "10rem",
    marginBottom: "1rem",
    transition: "background-color 0.3s, color 0.3s",
  };
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_hbobek8",
      "template_uhnwyaz",
      form.current,
      "NfXSci4NNFC4fLHkq"
    ).then(
      (result) => {
        alert("Email sent successfully!");
      },
      (error) => {
        alert("Failed to send email: " + error.text);
      }
    );
  };

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cascadia+Code:ital,wght@0,200..700;1,200..700&family=Rowdies:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        style={{
          backgroundImage: `url(${coding.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "85vh",
          width: "98.8vw",
          margin: 0,
          padding: 0,
          position: "absolute",
          top: 56,
          left: 0,
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#428af5",
            fontFamily: "Cascadia Code",
            marginTop: "11rem",
            fontWeight: "bolder",
          }}
        >
          Hi my Name is,{" "}
        </h1>
        <h1
          style={{
            fontFamily: "Rowdies",
            textAlign: "center",
            color: "#FFFFFF",
          }}
        >
          Carissa Cho
        </h1>
        <hr
          style={{
            border: "none",
            height: "2px",
            backgroundColor: "	#E5E4E2",
            opacity: 1,
            width: "40%",
            margin: "20px auto",
          }}
        />
      </div>

      <div
        style={{ marginTop: "27.8rem", width: "98.9vw", marginLeft: "-4.7rem" }}
      >
        <Card
          style={{
            backgroundColor: "rgb(247, 243, 234)",
            textAlign: "center",
            fontFamily: "Cascadia Code",
          }}
        >
          <Card.Body>
            <Card.Title style={{ marginTop: "3rem" }}>
              {" "}
              <h1>About Me</h1>
            </Card.Title>
            <Card.Text>
              I am a passionate and results-driven developer with a diploma in
              Computer Programming and Analysis from Seneca College, and
              hands-on experience as a Low Code Application Developer. My career
              path reflects a strong blend of technical expertise,
              problem-solving ability, and leadership, particularly in public
              sector environments.
            </Card.Text>
            <Link href={"/"}>Read More</Link>
          </Card.Body>
        </Card>
      </div>

      <div style={{ marginTop: "3rem", fontFamily: "Cascadia Code" }}>
        <h1 style={{ textAlign: "center" }}>Experience</h1>
        <p style={{ fontWeight: "bold" }}>
          Low Code Application Developer (Co-Op)/Part-time,{" "}
          <span style={{ color: "#428af5" }}>
            Ministry of Public and Business Service Delivery and Procurement
          </span>
        </p>
        <p> January 2, 2024- May 2, 2025 </p>
        <ol style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
          <li>
            Spearheaded the development of custom applications using Power
            Automate, Dataverse, Power Apps,C#, React, Java, that directly
            improves internal workflows by automating tasks that previously
            required manual intervention, leading to significant time savings.
          </li>
          <li>
            Collaborated with the UI/UX team to redesign and enhance multiple
            web interfaces, focusing on accessibility, usability, and visual
            appeal, resulting in improved user satisfaction.
          </li>
          <li>
            Utilized WAVE and Lighthouse testing tools to ensure that
            applications met accessibility standards, particularly in areas like
            color contrast, screen reader support, and keyboard navigation.
          </li>
          <li>
            Engaged in problem-solving sessions to address both technical and
            functional challenges.{" "}
          </li>
          <li>
            Worked closely with cross-functional teams to integrate low-code
            solutions into larger enterprise systems, which helped modernize
            legacy systems and enhance data management across ministries.
          </li>
        </ol>

        <div style={{ textAlign: "center" }}>
          <Link href={"/"}>Read More</Link>
        </div>
      </div>

      <div style={{ marginTop: "2rem", width: "98.9vw", marginLeft: "-4.7rem" }}> 
<Card   style={{
            backgroundColor: "rgb(247, 243, 234)",
            textAlign: "center",
            fontFamily: "Cascadia Code",
          }}>

<Card.Title style={{ marginTop: "3rem" }}> <h1>Let's Chat!</h1></Card.Title>

      <form ref={form} onSubmit={sendEmail}>
      <span>Name:</span> <br></br>
      <input style={{width: "25rem",  height: "30px"}} type="text" name="name" placeholder="Name" required />
      <br></br>
      
      <span>Email:</span> <br></br>
      <input style={{width: "25rem",  height: "30px"}} type="email" name="email" placeholder="Email" required />
      <br></br>
      
      <span>Message:</span> <br></br>
      <textarea style={{width: "25rem",  height: "15rem", resize: "none" }} name="message" placeholder="Message" required />
      <br></br>
        <br></br>
      <button style={buttonStyle}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => {
    setIsHovered(false);
    setIsClicked(false);
  }}
  onMouseDown={() => setIsClicked(true)}
  onMouseUp={() => setIsClicked(false)}
  >Send</button>
    </form>
    </Card>
    </div>

    </>
  );
}
