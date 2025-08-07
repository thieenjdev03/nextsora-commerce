import React from 'react';
import { FooterCategory, SocialLink, ContactInfo } from '../../types';

interface FooterProps {
  footerLinks: FooterCategory[];
  socialLinks: SocialLink[];
  contactInfo: ContactInfo;
}

export const Footer: React.FC<FooterProps> = ({ footerLinks, socialLinks, contactInfo }) => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Contact */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">NextSora</div>
            <p className="text-gray-400 mb-4">{contactInfo.address}</p>
            <p className="text-gray-400 mb-2">{contactInfo.email}</p>
            <p className="text-gray-400 mb-6">{contactInfo.phone}</p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((category, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">{category.category}</h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href={item.link}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h3 className="font-semibold text-white mb-4">Subscribe to our newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none"
              />
              <button className="bg-green-700 hover:bg-green-800 px-6 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-between items-center text-sm text-gray-400">
            <div className="flex space-x-6">
              <a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a>
              <a href="/accessibility" className="hover:text-white transition-colors">Accessibility</a>
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/privacy-choices" className="hover:text-white transition-colors">Your Privacy Choices</a>
            </div>
            <div>© 2024 NextSora. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 