
export default function SAPGoldPartnerLogo({ className = '', variant = 'default' }) {
    return (<img src="/Logo/SAP Gold partner .svg" alt="SAP Gold Partner" className={`w-auto h-full transition-transform duration-300 ${variant === 'white' ? 'brightness-0 invert' : ''} ${className}`}/>);
}
