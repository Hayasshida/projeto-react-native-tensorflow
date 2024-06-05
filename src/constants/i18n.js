import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';

const i18n = new I18n({
    "en-US":{
        title: "Verify the toxicity of your text",
        placeholder: "Type here...",
        button: "Verify",
        titleWithToxicity: "Your text have",
        nonToxicity: "Your text is non-toxic",
        "identity_attack": "identity attack",
        insult: "insult",
        obscene: "obscene",
        "severe_toxicity": "severe toxicity",
        "sexual_explicit": "sexual explicit",
        threat: "threat",
        toxicity: "toxicity",
    },
    "pt-BR": {
        title: "Verifique a agressividade de seu texto",
        placeholder: "Digite aqui...",
        button: "Verificar",
        titleWithToxicity: "Seu texto contém",
        nonToxicity: "Seu texto não é tóxico",
        "identity_attack": "ataque de identidade",
        insult: "insulto",
        obscene: "termos obscenos",
        "severe_toxicity": "toxicidade severa",
        "sexual_explicit": "conteúdo sexual explícito",
        threat: "ameaças",
        toxicity: "toxicidade",
    },
    "es-ES": {
        title: "Comprueba la agresividad de tu texto",
        placeholder: "Digite aquí...",
        button: "Verificar",
        titleWithToxicity: "Tu texto contiene",
        nonToxicity: "Tu texto no es tóxico",
        "identity_attack": "ataque de identidad",
        insult: "insulto",
        obscene: "términos obscenos",
        "severe_toxicity": "toxicidad severa",
        "sexual_explicit": "contenido sexual explícito",
        threat: "amenazas",
        toxicidade: "toxicidad",

    }
})

i18n.locale = getLocales()[0].languageTag;
export default i18n;
