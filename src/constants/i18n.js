import { Identity } from '@tensorflow/tfjs';
import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';

const i18n = new I18n({
    "en-US":{
        title: "Verify the toxicity of your text",
        placeholder: "Type here...",
        button: "Verify",
        titleWithToxicity: "Your text have",
        nonToxicity: "Your text is non-toxic",
        identityAttack: "identity attack",
        insult: "insult",
        obscene: "obscene",
        severeToxicity: "severe toxicity",
        sexualExplicit: "sexual explicit",
        threat: "threat",
        toxicity: "toxicity",
    },
    "pt-BR": {
        title: "Verifique a agressividade de seu texto",
        placeholder: "Digite aqui...",
        button: "Verificar",
        titleWithToxicity: "Seu texto contém",
        nonToxicity: "Seu texto não é tóxico",
        identityAttack: "ataque de identidade",
        insult: "insulto",
        obscene: "termos obscenos",
        severeToxicity: "toxicidade severa",
        sexualExplicit: "conteúdo sexual explícito",
        threat: "ameaças",
        toxicity: "toxicidade",
    },
    "es-ES": {
        title: "Comprueba la agresividad de tu texto",
        placeholder: "Digite aquí...",
        button: "Verificar",
        titleWithToxicity: "Tu texto contiene",
        nonToxicity: "Tu texto no es tóxico",
        IdentityAttack: "ataque de identidad",
        insult: "insulto",
        obscene: "términos obscenos",
        severeToxicity: "toxicidad severa",
        sexualExplicit: "contenido sexual explícito",
        threat: "amenazas",
        toxicidade: "toxicidad",

    }
})

i18n.locale = getLocales()[0].languageTag;
export default i18n;
