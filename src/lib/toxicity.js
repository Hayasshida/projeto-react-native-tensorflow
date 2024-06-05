require('@tensorflow/tfjs')
const toxicity = require('@tensorflow-models/toxicity');
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native'

const toxicityTest = async (sentence, printText) => {
  const threshold = 0.75;
  const negativeMatches = [];

  await tf.setBackend('rn-webgl')
  await tf.ready()

  await toxicity.load(threshold).then(async (model) => {
     await model.classify(sentence).then((predictions) => {
      
      for (let i = 0; i < predictions.length; i++) {
        if (predictions[i].results[0].match) {
          negativeMatches[negativeMatches.length] = {
            label: predictions[i].label,
            probabilidade: predictions[i].results[0].probabilities[1].toFixed(3)
          };
        } else if (
          predictions[i].results[0].probabilities[0] >
          predictions[i].results[0].probabilities[1]
        ) {
          predictions[i].results[0].match = false;
        } else {
          predictions[i].results[0].match = true;
          negativeMatches[negativeMatches.length] = {
            label: predictions[i].label,
            probabilidade: predictions[i].results[0].probabilities[1].toFixed(3)
        };
      }
      }});
  });

  if(negativeMatches[0] !== undefined){
    negativeMatches.sort((a,b) => b.probabilidade - a.probabilidade);
  }

    if(negativeMatches[0] === undefined){
      printText = 'nothing'
      return({
        negativeMatches: negativeMatches,
        printText: 'nothing',
      });
    }else{
      printText = negativeMatches[0].label
      return({
        negativeMatches: negativeMatches,
        printText: printText,
      });
    }
};

export default toxicityTest;