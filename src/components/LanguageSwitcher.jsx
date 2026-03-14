import { useTranslation } from 'react-i18next';
const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr'; // Set RTL for Arabic
        document.documentElement.lang = lng; // Set the `lang` attribute for accessibility
    };
    return (<div className="language-switcher">
      <button onClick={() => changeLanguage('en')} disabled={i18n.language === 'en'}>
        English
      </button>
      <button onClick={() => changeLanguage('ar')} disabled={i18n.language === 'ar'}>
        العربية
      </button>
    </div>);
};
export default LanguageSwitcher;
