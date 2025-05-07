import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Card } from "react-bootstrap";
import emailjs from "emailjs-com";
import { useRef } from "react";

export default function Home() {

  const form = useRef();
  
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
        form.current.reset();
      },
      (error) => {
        alert("Failed to send email: " + error.text);
      }
    );
  };

  return (
    <>
      <div
       className={styles.cover}
      >
        
        <h1
          className={styles.myname}
        >
          Hi my Name is,{" "}
        </h1>
        <h1
         className= {styles.carissa}
        >
          Carissa Cho
        </h1>
        <hr
         className={styles.hr}
        />
      </div>

      <div 
        className= {styles.positioncard}
      >
        <Card
          className={styles.stylecard}
        >
          <Card.Body>
            <Card.Title className={styles.stylecardtitle}>
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
            <Link href={"/aboutme"}>Read More</Link>
          </Card.Body>
        </Card>
      </div>

      <div className={styles.positionhero}>
        <h1 className={styles.theheader}>Experience</h1>
        <p className={styles.position}>
          Low Code Application Developer (Co-Op)/Part-time,{" "}
          <span className={styles.workplace}>
            Ministry of Public and Business Service Delivery and Procurement
          </span>
        </p>
        <p> January 2, 2024- May 2, 2025 </p>
        <ol className={styles.ol}>
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

        <div className={styles.theheader}>
          <Link href={"/experiences"}>Read More</Link>
        </div>
      </div>

      <div className={styles.positioncardtwo} > 
<Card className={styles.stylecard}>

<Card.Title className={styles.stylecardtitle}> <h1>{"Let's Chat!"}</h1></Card.Title>

<div className={styles.contact}>
  <form ref={form} onSubmit={sendEmail} className={styles.form}>
    <span>Name:</span>
    <input
      className={styles.input}
      type="text"
      name="name"
      placeholder="Name"
      required
    />

    <span>Email:</span>
    <input
        className={styles.input}
      type="email"
      name="email"
      placeholder="Email"
      required
    />

    <span>Message:</span>
    <textarea
     className={styles.textarea}
      name="message"
      placeholder="Message"
      required
    />

        <br></br>
      <button className={styles.button}
  >Send</button>
  </form>
</div>
    </Card>
    </div>

    </>
  );
}
