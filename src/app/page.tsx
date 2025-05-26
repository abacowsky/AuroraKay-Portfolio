"use client";

import Image from "../../AuroraKay-Portfolio/node_modules/next/image";
import Link from "../../AuroraKay-Portfolio/node_modules/next/link";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("skills");

  const openTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <main>
      {/* HEADER */}
      <header id="header">
        <div className="container">
          <nav>
            <Image src="/images/logo.png" alt="Logo" className="logo" width={150} height={50} />
            <ul id="sidemenu">
              <li><a href="#header">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
              <i className="fas fa-times" onClick={() => document.getElementById('sidemenu')!.style.right = '-200px'}></i>
            </ul>
            <i className="fas fa-bars" onClick={() => document.getElementById('sidemenu')!.style.right = '0'}></i>
          </nav>
          <div className="header-text">
            <p>For Brands That Refuse to Whisper</p>
            <h1>BE <span>BOLD.</span> BE <span>LOUD.</span></h1>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <Image src="/images/user.png" alt="Aurora" width={300} height={300} />
            </div>
            <div className="about-col-2">
              <h1 className="sub-title">About Me</h1>
              <p>Hi there! I’m Aurora—the designer behind Ky Designs. I specialize in creative branding and web design for bold, small businesses that are ready to stand out. 
                I’m based in the beautiful Inland Northwest, where I spend as much time as I can outdoors. 
                Whether I’m hiking, camping, or just chasing sunshine with my son and our animals, nature is a big part of what keeps me inspired. 
                I’m a recent graphic and web design grad, a proud boy mom, and a total animal lover. When I’m not designing, you’ll probably find me 
                exploring the mountains, sipping iced coffee, or sketching new ideas with my dogs curled up nearby. Let’s make something awesome together!</p>
              <div className="tab-titles">
                {['skills', 'experience', 'education'].map((tab) => (
                  <p
                    key={tab}
                    className={`tab-links ${activeTab === tab ? "active-link" : ""}`}
                    onClick={() => openTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </p>
                ))}
              </div>

              <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
                <ul>
                  <li><span>HTML | CSS | Next JS</span><br />Designing Web interfaces</li>
                  <li><span>ADOBE CREATIVE SUITE</span><br />Branding Development</li>
                  <li><span>SOCIAL MEDIA</span><br />Content Creation & Strategy</li>
                </ul>
              </div>
              <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
                <ul>
                  <li><span>Jan 2025–May 2025</span><br />Social Media for @Molly Robbins</li>
                  {/* Add more experience as needed */}
                </ul>
              </div>
              <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
                <ul>
                  <li><span>2025</span><br />AAS Graphic & Web Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <div id="services">
        <div className="container">
          <h1 className="sub-title">My Services</h1>
          <div className="services-list">
            <div>
              <i className="fas fa-code"></i>
              <h2>Web Design</h2>
              <p>
               Designing intuitive, user-friendly web interfaces with a strong
                focus on usability and aesthetics.
              </p>
              <Link href="#">Learn more</Link>
            </div>
            <div>
              <i className="fas fa-crop-alt"></i>
              <h2>Branding</h2>
              <p>Create cohesive brand identities that resonate and engage.</p>
              <Link href="#">Learn more</Link>
            </div>
            <div>
              <i className="fab fa-app-store"></i>
              <h2>Social Media</h2>
              <p>
                Content creation, scheduling, and audience engagement strategies. Drive brand awareness and grow online communities.
              </p>
              <Link href="#">Learn more</Link>
            </div>
          </div>
        </div>
      </div>

      {/* PORTFOLIO */}
      <div id="portfolio">
        <div className="container">
          <h1 className="sub-title">My Work</h1>
          <div className="work-list">
            <div className="work">
              <Image src="/images/work-1.png" alt="Silverwood Project" width={600} height={500} />
              <div className="layer">
                <h3>Silverwood X Pepsi Semi Truck Wrap</h3>
                <p>
                  Winner of a student design contest, this semi truck wrap was created for a Pepsi and Silverwood Theme Park collaboration. 
                  I designed both sides of the trailer to capture the bold, high-energy spirit of the brands. 
                </p>
                <Link href="#"><i className="fas fa-external-link-alt"></i></Link>
              </div>
            </div>
            <div className="work">
              <Image src="/images/work-2.png" alt="Free Rein Project" width={500} height={300} />
              <div className="layer">
                <h3>Free Rein | 2024 AAF Create</h3>
                <p>My team won AAF Spokane’s Create competition for our work with Free Rein- a non-profit.
                  We created a bold visual package with a banner, social media posts, and custom illustrations to show the strength and heart of their mission.
                </p>
                <Link href="#"><i className="fas fa-external-link-alt"></i></Link>
              </div>
            </div>
            <div className="work">
              <Image src="/images/AURORA_BACOWSKY_2025POSTER.jpg" alt="PIA Poster" width={500} height={300} />
              <div className="layer">
               <h3>PIA Print Contest | Print is Persuasive</h3>
                <p>
                  This poster shows how print media affects public opinion and social movements. It uses images from events like Roe v. Wade, the Capitol riot, 
                  and 1984 to show print’s power to persuade people. It won the top College prize out of 70 students.
                </p>
                <Link href="#"><i className="fas fa-external-link-alt"></i></Link>
              </div>
            </div>
            <div className="work">
              <Image src="/images/Barkershop_Carousel-01.jpg" alt="Barkershop" width={500} height={300} />
              <div className="layer">
                <h3>Barkershop</h3>
                <p>
                  Barkershop is a fictional app that lets users book dog grooming appointments. 
                  I created all the branding and designed the app prototype. This Logo design won a Gold Addy Award. </p>
                <Link href="#"><i className="fas fa-external-link-alt"></i></Link>
              </div>
            </div>
             <div className="work">
              <Image src="/images/Beachside_Seafood-02.jpg" alt="Beachside Seafood Box" width={500} height={300} />
              <div className="layer">
                <h3>Beachside Seafood</h3>
                <p>
                 Beachside Seafood is a fictional restaurant serving fresh, fast seafood. 
                 I created the branding, illustrated custom graphics, and designed packaging for the takeout boxes. </p>
                <Link href="#"><i className="fas fa-external-link-alt"></i></Link>
              </div>
            </div>
            <div className="work">
              <Image src="/images/fort_gary_mockup.jpg" alt="Fort Gary Hotel" width={500} height={300} />
              <div className="layer">
                <h3>Fort Gary Hotel Website</h3>
                <p>
                 This is a reimagined concept for The Fort Garry Hotel. 
                 I designed a UX prototype in Adobe XD to improve the user experience and modernize the hotel’s online presence. </p>
                <Link href="#"><i className="fas fa-external-link-alt"></i></Link>
              </div>
            </div>
          </div>
         <Link href="/portfolio" className="btn">See More</Link>
        </div>
      </div>

      {/* CONTACT */}
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h1 className="sub-title">Contact Me</h1>
              <br />
              <div className="contact-info">
                <p>
                  <Image
                    src="/images/Social Icons/Email/pink_email.png"
                    alt="email icon"
                    className="contact-icon"
                    width={20}
                    height={20}
                  />
                  stabbatkennels@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone-square-alt"></i> +1 (208) 671-9918
                </p>
              </div>
              <div className="social-icons">
                <Link href="https://facebook.com/"><i className="fab fa-facebook"></i></Link>
                <Link href="#"><i className="fab fa-twitter-square"></i></Link>
                <Link href="#"><i className="fab fa-instagram"></i></Link>
                <Link href="#"><i className="fab fa-linkedin"></i></Link>
              </div>
              <a href="/images/aurora_resume_spring2025.pdf" download className="btn btn2">
                Download Resume
              </a>
            </div>
            <div className="contact-right">
              <form name="submit-to-google-sheet">
                <input type="text" name="Name" placeholder="Your Name" required />
                <input type="email" name="Email" placeholder="Your Email" required />
                <textarea name="Message" rows={6} placeholder="Your Message"></textarea>
                <button type="submit" className="btn btn2">Submit</button>
              </form>
              <span id="msg"></span>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright © KyDesigns</p>
        </div>
      </div>
    </main>
  );
}
