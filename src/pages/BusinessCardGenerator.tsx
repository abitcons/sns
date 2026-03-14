import React, { useState, useRef } from 'react';
import { saveAs } from 'file-saver';
import { QRCodeSVG } from 'qrcode.react';
import { Html2CanvasOptions, jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

interface BusinessCardForm {
    firstName: string;
    lastName: string;
    position: string;
    email: string;
    phone: string;
}

const BusinessCardCreator: React.FC = () => {
    const [formData, setFormData] = useState<BusinessCardForm>({
        firstName: '',
        lastName: '',
        position: '',
        email: '',
        phone: '',
    });

    const frontCardRef = useRef<HTMLDivElement | null>(null);
    const backCardRef = useRef<HTMLDivElement | null>(null);

    const generateQRData = (): string => {
        return `BEGIN:VCARD
VERSION:3.0
N:${formData.lastName};${formData.firstName}
FN:${formData.firstName} ${formData.lastName}
TITLE:${formData.position}
TEL:${formData.phone}
EMAIL:${formData.email}
ADR:;;Nakheel Tower\\, 19th Floor\\, King Fahad Branch Road\\, Nakheel District\\, Riyadh
END:VCARD`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
    };

    const downloadAsSVG = async (): Promise<void> => {
        if (!frontCardRef.current || !backCardRef.current) return;
        const frontSvg = frontCardRef.current.querySelector('svg');
        const backSvg = backCardRef.current.querySelector('svg');
        if (!frontSvg || !backSvg) return;

        const compositeSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        compositeSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        compositeSvg.setAttribute('width', '700');
        compositeSvg.setAttribute('height', '200');

        const frontClone = frontSvg.cloneNode(true) as SVGElement;
        const backClone = backSvg.cloneNode(true) as SVGElement;
        compositeSvg.appendChild(backClone);
        compositeSvg.appendChild(frontClone);
        frontClone.setAttribute('x', '350');

        const svgData = new XMLSerializer().serializeToString(compositeSvg);
        const blob = new Blob([svgData], { type: 'image/svg+xml' });
        saveAs(blob, 'business-card.svg');
    };

    const downloadAsEPS = async (): Promise<void> => {
        if (!frontCardRef.current || !backCardRef.current) return;
        const frontSvg = frontCardRef.current.querySelector('svg');
        const backSvg = backCardRef.current.querySelector('svg');
        if (!frontSvg || !backSvg) return;

        const compositeSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        compositeSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        compositeSvg.setAttribute('width', '700');
        compositeSvg.setAttribute('height', '200');

        const frontClone = frontSvg.cloneNode(true) as SVGElement;
        const backClone = backSvg.cloneNode(true) as SVGElement;
        compositeSvg.appendChild(backClone);
        compositeSvg.appendChild(frontClone);
        frontClone.setAttribute('x', '350');

        const svgData = new XMLSerializer().serializeToString(compositeSvg);
        const blob = new Blob([svgData], { type: 'application/postscript' });
        saveAs(blob, 'business-card.eps');
    };

    const downloadAsPDF = async (): Promise<void> => {
        if (!frontCardRef.current || !backCardRef.current) return;
    
        try {
            // PDF dimensions (in mm)
            const CARD_WIDTH = 89;
            const CARD_HEIGHT = 51;
            const BLEED = 3;
            const TOTAL_WIDTH = CARD_WIDTH + (BLEED * 2);
            const TOTAL_HEIGHT = CARD_HEIGHT + (BLEED * 2);
    
            // Higher DPI settings
            const SCALE = 4;
            const DPI = 300;
            const MM_TO_PX = DPI / 25.4;
            
            // Calculate dimensions in pixels
            const widthPx = Math.ceil(TOTAL_WIDTH * MM_TO_PX);
            const heightPx = Math.ceil(TOTAL_HEIGHT * MM_TO_PX);
    
            const prepareElement = async (element: HTMLDivElement): Promise<HTMLCanvasElement> => {
    const wrapper = document.createElement('div');
    wrapper.style.width = `${widthPx}px`;
    wrapper.style.height = `${heightPx}px`;
    wrapper.style.position = 'fixed';
    wrapper.style.left = '-9999px';
    wrapper.style.top = '0';
    document.body.appendChild(wrapper);

    const clone = element.cloneNode(true) as HTMLDivElement;
    wrapper.appendChild(clone);

    clone.style.width = '100%';
    clone.style.height = '100%';
    clone.style.transform = 'none';
    clone.style.transformOrigin = 'top left';
    clone.style.background = 'white';

    const images = clone.getElementsByTagName('image');
    await Promise.all(
        Array.from(images).map(
            (img) =>
                new Promise((resolve) => {
                    if (img.getAttribute('href')) {
                        const image = new Image();
                        image.onload = resolve;
                        image.onerror = resolve;
                        image.src = img.getAttribute('href') || '';
                    } else {
                        resolve(null);
                    }
                })
        )
    );

    const canvasOptions: Partial<Html2CanvasOptions> & { scale: number } = {
        width: widthPx,
        height: heightPx,
        backgroundColor: '#ffffff',
        logging: false,
        useCORS: true,
        allowTaint: true,
        foreignObjectRendering: true,
        scale: SCALE,
        onclone: (_clonedDoc) => {
            return Promise.resolve();
        },
    };

    try {
        const canvas = await html2canvas(wrapper, canvasOptions as any);
        return canvas;
    } finally {
        if (wrapper.parentNode) {
            document.body.removeChild(wrapper);
        }
    }
};

    
            // Generate high-quality canvases
            const frontCanvas = await prepareElement(frontCardRef.current);
            const backCanvas = await prepareElement(backCardRef.current);
    
            // Create PDF
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'mm',
                format: [TOTAL_HEIGHT, TOTAL_WIDTH],
                hotfixes: ['px_scaling']
            });
    
            // Add images to PDF
            const addPageToDoc = (canvas: HTMLCanvasElement, isFirstPage: boolean = true) => {
                if (!isFirstPage) {
                    pdf.addPage([TOTAL_HEIGHT, TOTAL_WIDTH]);
                }
    
                pdf.addImage(
                    canvas.toDataURL('image/png', 1.0),
                    'PNG',
                    BLEED,
                    BLEED,
                    CARD_WIDTH,
                    CARD_HEIGHT,
                    undefined,
                    'FAST'
                );
    
                // Add crop marks
                pdf.setDrawColor(0);
                pdf.setLineWidth(0.1);
                
                const markLength = 5;
                // Top marks
                pdf.line(0, BLEED, markLength, BLEED);
                pdf.line(TOTAL_WIDTH - markLength, BLEED, TOTAL_WIDTH, BLEED);
                // Bottom marks
                pdf.line(0, TOTAL_HEIGHT - BLEED, markLength, TOTAL_HEIGHT - BLEED);
                pdf.line(TOTAL_WIDTH - markLength, TOTAL_HEIGHT - BLEED, TOTAL_WIDTH, TOTAL_HEIGHT - BLEED);
                // Left marks
                pdf.line(BLEED, 0, BLEED, markLength);
                pdf.line(BLEED, TOTAL_HEIGHT - markLength, BLEED, TOTAL_HEIGHT);
                // Right marks
                pdf.line(TOTAL_WIDTH - BLEED, 0, TOTAL_WIDTH - BLEED, markLength);
                pdf.line(TOTAL_WIDTH - BLEED, TOTAL_HEIGHT - markLength, TOTAL_WIDTH - BLEED, TOTAL_HEIGHT);
            };
    
            // Add both sides to PDF
            addPageToDoc(frontCanvas, true);
            addPageToDoc(backCanvas, false);
    
            // Save the PDF
            pdf.save('business-card.pdf');
    
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500 to-green-400 text-white text-center py-12 mb-8 rounded-lg shadow-lg">
                <h1 className="text-5xl font-bold mb-4">Welcome to Business Card Creator</h1>
                <p className="text-lg">Easily design and download your personalized business cards in various formats.</p>
            </div>

            <div className="grid grid-cols-3 gap-8">
                {/* Form */}
                <div className="col-span-1">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First Name"
                                className="p-2 border rounded"
                            />
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last Name"
                                className="p-2 border rounded"
                            />
                        </div>
                        <input
                            type="text"
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                            placeholder="Position"
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                            className="w-full p-2 border rounded"
                        />
                        <div className="flex gap-4">
                            <button 
                                onClick={downloadAsSVG} 
                                type="button"
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Download SVG
                            </button>
                            <button 
                                onClick={downloadAsEPS}
                                type="button"
                                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                            >
                                Download EPS
                            </button>
                            <button 
                                onClick={downloadAsPDF}
                                type="button"
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Download PDF
                            </button>
                        </div>
                    </form>
                </div>

                {/* Back of Card */}
                <div ref={backCardRef} className="w-[350px] h-[200px] bg-white rounded shadow-lg relative mb-6">
                    <svg width="350" height="200" viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: '#36a0d0', stopOpacity: 1 }} />
                                <stop offset="50%" style={{ stopColor: '#5bb6bb', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: '#6ec6ab', stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        
                        {/* Gradient Background */}
                        <rect width="350" height="200" fill="url(#backgroundGradient)"/>
                        
                        {/* Centered Logo */}
                        <image
                            href="/Logo/SNS-logo-white.svg"
                            x="125"
                            y="75"
                            width="100"
                            height="50"
                            preserveAspectRatio="xMidYMid meet"
                        />
                    </svg>
                </div>

                {/* Front of Card */}
                <div ref={frontCardRef} className="w-[350px] h-[200px] bg-white rounded shadow-lg relative mb-6">
                    <svg width="350" height="200" viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
                        <rect width="350" height="200" fill="white"/>
                        
                        <defs>
                            <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: '#36a0d0', stopOpacity: 1 }} />
                                <stop offset="50%" style={{ stopColor: '#5bb6bb', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: '#6ec6ab', stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        
                        {/* Name */}
                        <text x="20" y="40" fontSize="20" fill="#36a0d0" fontFamily="Arial, sans-serif">
                            <tspan>{formData.firstName} {formData.lastName}</tspan>
                        </text>
                        
                        {/* Position */}
                        <text x="20" y="60" fontSize="14" fill="#36a0d0" fontFamily="Arial, sans-serif">
                            <tspan>{formData.position}</tspan>
                        </text>

                        {/* Gradient Line */}
                        <line x1="20" y1="80" x2="120" y2="80" stroke="url(#brandGradient)" strokeWidth="2"/>

                        {/* Contact Info with Icons */}
                        <g>
                            {/* Phone Icon and Number */}
                            <circle cx="33" cy="110" r="8" fill="#36a0d0" opacity="0.9"/>
                            <text x="48" y="114" fontSize="12" fill="#444" fontFamily="Arial, sans-serif">
                                <tspan>+{formData.phone}</tspan>
                            </text>
                            
                            {/* Email Icon and Address */}
                            <circle cx="33" cy="135" r="8" fill="#36a0d0" opacity="0.9"/>
                            <text x="48" y="139" fontSize="12" fill="#444" fontFamily="Arial, sans-serif">
                                <tspan>{formData.email}</tspan>
                            </text>
                            
                            {/* Location Icon and Address */}
                            <circle cx="33" cy="160" r="8" fill="#36a0d0" opacity="0.9"/>
                            <text x="48" y="164" fontSize="12" fill="#444" fontFamily="Arial, sans-serif">
                                <tspan>Nakheel Tower, 19th Floor, King Fahad</tspan>
                            </text>
                            <text x="48" y="180" fontSize="12" fill="#444" fontFamily="Arial, sans-serif">
                                <tspan>Branch Road, Nakheel District, Riyadh</tspan>
                            </text>
                        </g>

                        {/* Logo */}
                        <image
                            href="/Logo/SNS logo SVG SVG-01.svg"
                            x="220"
                            y="20"
                            width="110"
                            height="60"
                            preserveAspectRatio="xMidYMid meet"
                        />

                        {/* QR Code */}
                        <foreignObject x="220" y="90" width="110" height="110">
                            <QRCodeSVG 
                                value={generateQRData()}
                                size={110}
                                level="Q"
                                fgColor="#36a0d0"
                                bgColor="white"
                            />
                        </foreignObject>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default BusinessCardCreator;