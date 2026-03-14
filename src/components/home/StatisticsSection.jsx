
import { motion } from 'framer-motion';
import { TrendingUp, Users as Team, Clock } from 'lucide-react';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';
const StatisticsSection = () => {
    const { t, i18n } = useTranslation('Home');
    const isRtl = i18n.dir() === 'rtl';
    const statistics = [
        {
            value: 35,
            suffix: '+',
            translationKey: 'projects',
            icon: TrendingUp
        },
        {
            value: 100,
            suffix: '+',
            translationKey: 'clients',
            icon: Team
        },
        {
            value: 15,
            suffix: '+',
            translationKey: 'experience',
            icon: Clock
        }
    ];
    return (<motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
      {statistics.map((stat, index) => (<motion.div key={index} whileHover={{ y: -5 }} className="flex flex-col p-6 bg-white rounded-xl shadow-lg border border-gray-100 h-full">
          {/* Numbers on top */}
          <div className="text-2xl font-bold bg-gradient-to-r from-[#36a0d0] to-[#5bb6bb] bg-clip-text text-transparent flex mb-3">
            <CountUp end={stat.value} duration={2} enableScrollSpy scrollSpyOnce/>
            <span className={isRtl ? 'mr-1' : 'ml-1'}>{stat.suffix}</span>
          </div>

          {/* Text and Icon row */}
          <div className={`flex items-start gap-4 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className="p-3 rounded-lg bg-gradient-to-r from-[#36a0d0] to-[#5bb6bb] shrink-0">
              <stat.icon className="h-6 w-6 text-white"/>
            </div>

            <div className="flex-grow">
              <p className="text-gray-600 font-medium">
                {t(`about.statistics.${stat.translationKey}.label`)}
              </p>
              <p className="text-sm text-gray-500">
                {t(`about.statistics.${stat.translationKey}.description`)}
              </p>
            </div>
          </div>
        </motion.div>))}
    </motion.div>);
};
export default StatisticsSection;
