
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const solutions = [
    { name: 'SNAM Travel', href: '/solutions/snam-travel' },
    { name: 'SNAM Muqeem', href: '/solutions/snam-muqeem' },
    { name: 'SNAM Yaqeen', href: '/solutions/snam-yaqeen' },
];
export default function FooterSolutions() {
    return (<div>
      <h4 className="text-lg font-semibold mb-4">Solutions</h4>
      <ul className="space-y-2">
        {solutions.map((solution, index) => (<motion.li key={index} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link to={solution.href} className="text-gray-100 hover:text-white transition-colors">
              {solution.name}
            </Link>
          </motion.li>))}
      </ul>
    </div>);
}
