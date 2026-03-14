
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LogoIcon from './LogoIcon';
export default function LogoLink({ variant = 'default', className = '' }) {
    return (<Link to="/">
      <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className={`inline-flex items-center ${className}`}>
        <LogoIcon variant={variant}/>
      </motion.div>
    </Link>);
}
