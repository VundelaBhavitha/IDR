'use client';

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'community', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom > 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      {/* Navigation */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <img src="/logo-icon.jpg" alt="IDR Logo" className={styles.logoIcon} />
            <span className={styles.logoText}>IDR</span>
          </div>

          <button
            className={styles.menuToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className={activeSection === 'about' ? styles.active : ''}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('services')}
                className={activeSection === 'services' ? styles.active : ''}
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('community')}
                className={activeSection === 'community' ? styles.active : ''}
              >
                Community
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className={activeSection === 'contact' ? styles.active : ''}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="hero" className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Advancing the Future of Digital Risk</h1>
          <p className={styles.heroSubtitle}>
            Training and deploying digital risk practitioners through industry-led excellence.
            Combining academic insight with real-world practice to build resilience in
            regulated, high-consequence environments.
          </p>
          <button
            className={styles.ctaButton}
            onClick={() => scrollToSection('services')}
          >
            Explore Programs
          </button>
        </div>
        <div className={styles.heroDecor}></div>
      </header>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>About the Institute</h2>
          <div className={styles.aboutContent}>
            <p>
              The Institute of Digital Risk (IDR) is an industry-led training and deployment
              institute focused on digital, cyber, and technology risk. We operate at the
              intersection of academic rigor and industry practice, serving regulated sectors
              including financial services, critical infrastructure, and government.
            </p>
            <p>
              Our mission is to develop the next generation of digital risk practitioners
              equipped with the knowledge, skills, and networks to address emerging threats in
              high-consequence environments. Through partnerships with leading UK universities,
              we blend cutting-edge research with practical deployment experience.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={styles.services}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Core Model</h2>
          <p className={styles.sectionSubtitle}>
            The IDR train – hire – innovate – deploy pipeline
          </p>

          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>📚</div>
              <h3>Academy</h3>
              <p>
                Intensive bootcamps and training programs for students and professionals
                seeking expertise in digital and cyber risk management.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>🚀</div>
              <h3>Innovation & Incubation</h3>
              <p>
                Developing intellectual property, future risk models, AI governance
                frameworks, and next-generation solutions for emerging threats.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>🛡️</div>
              <h3>Advisory Services</h3>
              <p>
                Helping organisations implement frameworks including NIST Cybersecurity
                Framework, ISO 27001, and NIS2 Directive compliance.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>💼</div>
              <h3>Talent Deployment</h3>
              <p>
                Connecting trained practitioners with organisations seeking skilled digital
                risk professionals for critical projects and roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className={styles.community}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Who We Serve</h2>
          <div className={styles.communityContent}>
            <p>
              Our community comprises students, early-career professionals, and experienced
              practitioners across regulated industries seeking to deepen their expertise in
              digital and cyber risk. We serve:
            </p>

            <div className={styles.communityList}>
              <div className={styles.communityItem}>
                <span className={styles.dot}></span>
                <span>Financial services professionals managing enterprise risk</span>
              </div>
              <div className={styles.communityItem}>
                <span className={styles.dot}></span>
                <span>Critical infrastructure operators building resilience</span>
              </div>
              <div className={styles.communityItem}>
                <span className={styles.dot}></span>
                <span>Government agencies addressing emerging threats</span>
              </div>
              <div className={styles.communityItem}>
                <span className={styles.dot}></span>
                <span>University students launching careers in digital risk</span>
              </div>
              <div className={styles.communityItem}>
                <span className={styles.dot}></span>
                <span>Tech professionals transitioning to risk and compliance roles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Register Your Interest</h2>
          <p className={styles.sectionSubtitle}>
            Join our community of digital risk leaders
          </p>

          <form className={styles.contactForm} onSubmit={handleContactSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tell us about your interest in digital risk..."
                rows={4}
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              Send
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h4>Institute of Digital Risk</h4>
              <p>Leading digital and cyber risk training and deployment.</p>
            </div>
            <div className={styles.footerSection}>
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <button onClick={() => scrollToSection('about')}>About</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')}>Services</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('community')}>Community</button>
                </li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h4>Contact</h4>
              <p>Email: hello@digitialrisk.io</p>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2025 Institute of Digital Risk. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
