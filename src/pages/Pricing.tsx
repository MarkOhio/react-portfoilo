// File: pricing.tsx

import React, { useState } from 'react'; import './pricing.css'; 
import PriceQuestion from "../components/PriceQuestion"; 
import PaymentButtons from "../components/payment-buttons";


const Pricing: React.FC = () => { const [hoveredPay, setHoveredPay] = useState<string | null>(null); const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

const handleHover = (id: string) => setHoveredPay(id); const handleLeave = () => setHoveredPay(null); const handleIconClick = (icon: string) => { setActiveTooltip(activeTooltip === icon ? null : icon); };

return ( <div className="pricing-page"> {/* =============== FIRST ROW =============== */} 
<div className="plans-row"> 
  <div className="plans-grid"> 

    <div className="plan-card">  
      <h3>Lite</h3>  
      <p><strong>Starts at ₦50,000</strong></p>
      <ul className="plan-list fade-on-scroll">
        <li>Requirement scoping & kickoff — ₦5,000</li>
        <li>Design (template/light custom) — ₦20,000</li>
        <li>Up to 5 pages setup — ₦40,000</li>
        <li>Responsive & device checks — ₦10,000</li>
        <li>Contact form — ₦5,000</li>
        <li>Social links integration — ₦2,000</li>
        <li>Basic on-page SEO — ₦10,000</li>
        <li>Domain (1 year) — ₦6,000</li>
        <li>Hosting (1 year) — ₦24,000</li>
        <li>SSL certificate — Free</li>
        <li>Content upload — ₦5,000</li>
        <li>Post-launch support — ₦5,000</li>
      </ul>
      
    </div> 

    <div className="plan-card"> 
      <h3>Standard</h3> 
      <p><strong>Starts at ₦450,000</strong></p>
  <ul className="plan-list fade-on-scroll">
    <li>Requirement & UX planning — ₦20,000</li>
    <li>Customized theme — ₦60,000</li>
    <li>Up to 15 pages + blog — ₦80,000</li>
    <li>CMS setup & training — ₦25,000</li>
    <li>Responsive checks — ₦20,000</li>
    <li>Contact forms & newsletter — ₦10,000</li>
    <li>Analytics setup — ₦8,000</li>
    <li>On-page SEO — ₦30,000</li>
    <li>Photo sourcing — ₦5,000</li>
    <li>Domain (1 year) — ₦6,000</li>
    <li>Hosting (1 year) — ₦60,000</li>
    <li>SSL certificate — Free</li>
    <li>Optional: product catalog — ₦40,000</li>
    <li>1–3 months maintenance — ₦30,000</li>
  </ul>
    </div> 

    <div className="plan-card"> 
      <h3>Advanced</h3> 
      <p><strong>Starts at ₦1,500,000</strong></p>
  <ul className="plan-list fade-on-scroll">
    <li>Discovery & wireframes — ₦150,000</li>
    <li>Custom UI/UX design — ₦200,000</li>
    <li>Frontend development — ₦200,000</li>
    <li>Backend (Firebase / custom) — ₦250,000</li>
    <li>Payment gateway integration — ₦80,000</li>
    <li>Catalog & product features — ₦100,000</li>
    <li>Admin dashboard — ₦150,000</li>
    <li>Security & backups — ₦50,000</li>
    <li>Performance optimization — ₦50,000</li>
    <li>Third-party integrations — ₦50,000</li>
    <li>QA & testing — ₦80,000</li>
    <li>Training & deployment — ₦40,000</li>
    <li>Maintenance (monthly) — ₦60,000</li>
  </ul>
    </div> 

  </div>

<div className="other-payments">
      <div className="small-card">
        <h2>SEO</h2>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, cumque adipisci deleniti repudiandae recusandae magni iure nulla quae quis asperiores dicta dolorum ipsam doloremque libero consequatur quam. Est, nam dolor.</div>
      <div className="small-card">
        <h2>Site Mgmt</h2>
      </div>
      <div className="small-card">
        <h2>Social Media</h2>
      </div>
      <div className="small-card">
        <h2>Email Mktg</h2>
      </div>
      <div className="small-card">
        <h2>Cloud Setup</h2>
      </div>
      <div className="small-card">
        <h2>Maintenance</h2>
      </div>
    </div>
  </div>
<PriceQuestion /> 
  <div className="dotted-row" />

  {/* =============== SECOND ROW =============== */}
 
  <PaymentButtons />
</div>

); };

export default Pricing;
