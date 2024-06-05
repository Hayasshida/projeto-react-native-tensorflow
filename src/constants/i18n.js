import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';

const i18n = new I18n({
    en:{
        title: "Verify the toxicity of your text",
        placeholder: "Type here...",
        button: "Verify"
    },
    "pt-BR": {
        title: "Verifique a agressividade de seu texto",
        placeholder: "Digite aqui...",
        button: "Verificar"
    },
    es: {
        title: "Comprueba la agresividad de tu texto",
        placeholder: "Digite aquí...",
        button: "Verificar"
    }
})

i18n.locale = getLocales()[0].languageTag;
export default i18n;
