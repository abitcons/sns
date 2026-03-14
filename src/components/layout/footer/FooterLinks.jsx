
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const links = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Careers', href: '/careers' },
];
export default function FooterLinks() {
    return (<div>
      <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
      <ul className="space-y-2">
        {links.map((link, index) => (<motion.li key={index} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link to={link.href} className="text-gray-100 hover:text-white transition-colors">
              {link.name}
            </Link>
          </motion.li>))}
      </ul>
    </div>);
}
