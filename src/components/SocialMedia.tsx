
import React from "react";
import { motion } from "framer-motion";
import useSocialMediaAnimation from "../hooks/useSocialMediaAnimation";
import "../styles/SocialMedia.css";

type SocialItem = {
  platform: string;
  icon: string;
  username: string;
  href?: string;
 
};

const DEFAULT_ITEMS: SocialItem[] = [
  { platform: "Facebook", icon: "flat.jpg", username: "@user-namebtbtrb", href: "https://facebook.com" },
  { platform: "Instagram", icon: "flat.jpg", username: "@user-name", href: "https://instagram.com" },
  { platform: "X", icon: "flat.jpg", username: "@user-name", href: "https://x.com" },
  { platform: "WhatsApp", icon: "flat.jpg", username: "@user-name", href: "https://wa.me/" },
  { platform: "LinkedIn", icon: "flat.jpg", username: "@user-name", href: "https://linkedin.com" },
];

interface SocialMediaLinksProps {
  items?: SocialItem[];
  className?: string;
  compactOnMobile?: boolean;
}

export default function SocialMediaLinks({
  items = DEFAULT_ITEMS,
  className = "",
  compactOnMobile = true,
}: SocialMediaLinksProps) {
  const { ref, controls, listVariant, itemVariant } = useSocialMediaAnimation();

  return (
    <aside
      className={`sm-wrapper social-media-wrapper ${className}`}
      aria-label="Social media links"
    >
      <motion.div
        ref={ref}
        className="social-list"
        variants={listVariant}
        initial="hidden"
        animate={controls}
      >
        {items.map((it, index) => (
          <motion.div
            key={it.platform + index}
            className="social-item"
            variants={itemVariant}
            role="group"
            aria-labelledby={`sm-${it.platform}`}
          >
            {/* icon area */}
            <div className="icon-area" aria-hidden>
              <span className="icon"> <img src={it.icon} className="iconimg" /></span>
              
            </div>

            {/* expanding area: username + button */}
            <div className="expand-area" data-platform={it.platform}>
              <a
                id={`sm-${it.platform}`}
                href={it.href ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="username-link"
              >
                <span className="username-text">{it.username}</span>
              </a>
              <motion.button
                className="action-btn"
                onClick={(e) => {
                  // convenience: navigate to href or open in new tab
                  if (it.href) {
                    window.open(it.href, "_blank", "noopener,noreferrer");
                  } else {
                    e.currentTarget.blur();
                  }
                }}
                whileTap={{ scale: 0.96 }}
                aria-label={`Open ${it.platform}`}
              >
                Btn
              </motion.button>
            </div>
          </motion.div>
        ))}

        {/* Additional section */}
        <motion.div
          className="additional-section"
          variants={itemVariant}
          role="region"
          aria-label="Additional information"
        >
          <h4 className="additional-title">Some text that will be useful in a section like This</h4>
          <p className="additional-content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores consequuntur odio impedit cumque sunt totam voluptate corporis tempora voluptatibus odit? Velit exercitationem vero dignissimos quasi cumque iusto inventore sed a.</p>
        </motion.div>
      </motion.div>
    </aside>
  );
}

