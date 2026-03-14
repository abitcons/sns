import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Activity, Brain, Heart, Sparkles, Play, Pause } from "lucide-react";
import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
const AlphaiotaSection = () => {
    const { t, i18n } = useTranslation("Alphaiota.Home");
    const [isHovered, setIsHovered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);
    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            }
            else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };
    // ✅ Ensure `features` is always an array to avoid `.map()` issues
    const features = Array.isArray(t("alphaiota.features", { returnObjects: true }))
        ? t("alphaiota.features", { returnObjects: true })
        : [];
    // ✅ Adjust arrow direction for Arabic
    const isArabic = i18n.language === "ar";
    const arrowDirection = isArabic ? "ml-2 rotate-180" : "ml-2";
    return (<section id="AlphaiotaSection" className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("alphaiota.title")}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("alphaiota.description")}</p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content - Features */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-6 space-y-8">
            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (<motion.div key={index} whileHover={{ scale: 1.03 }} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Icons based on index */}
                  {index === 0 && <Activity className="h-12 w-12 text-[#36a0d0] mb-4"/>}
                  {index === 1 && <Brain className="h-12 w-12 text-[#36a0d0] mb-4"/>}
                  {index === 2 && <Heart className="h-12 w-12 text-[#36a0d0] mb-4"/>}
                  {index === 3 && <Sparkles className="h-12 w-12 text-[#36a0d0] mb-4"/>}

                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Link to="/Alphaiota" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#36a0d0] to-[#6ec6ab] text-white rounded-lg hover:from-[#5bb6bb] hover:to-[#2980b9] transition-all duration-300 shadow-lg hover:shadow-xl group">
                <span className="text-lg">{t("alphaiota.cta.title")}</span>
                <ArrowRight className={`ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform ${arrowDirection}`}/>
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Video */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="lg:col-span-6 flex justify-center">
            <div className="relative w-full min-h-[500px] lg:min-h-[600px]" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              <motion.div className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <video ref={videoRef} className="w-full h-full object-cover object-[100%_center]" autoPlay muted loop playsInline>
                  <source src="/hero video/Alphaiota.mp4" type="video/mp4"/>
                  Your browser does not support the video tag.
                </video>

                {/* Interactive Overlay */}
                <motion.div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" initial={{ opacity: 0 }} animate={{ opacity: isHovered ? 1 : 0 }} transition={{ duration: 0.3 }}>
                  {/* Play/Pause Button */}
                  <button onClick={handlePlayPause} className="absolute bottom-6 left-6 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                    {isPlaying ? <Pause className="w-6 h-6 text-white"/> : <Play className="w-6 h-6 text-white"/>}
                  </button>

                  {/* Video Title */}
                  <div className="absolute bottom-6 left-20 right-6">
                    <h3 className="text-white text-lg font-medium">{t("alphaiota.video.title")}</h3>
                    <p className="text-white/80 text-sm">{t("alphaiota.video.description")}</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);
};
export default AlphaiotaSection;
