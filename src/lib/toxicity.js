require('@tensorflow/tfjs')
const toxicity = require('@tensorflow-models/toxicity');
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native'

const toxicityTest = async (sentence) => {
  const threshold = 0.75;
  const negativeMatches = [];

  await tf.setBackend('rn-webgl')
  await tf.ready()
  console.log("tf is ready!!!")

  await toxicity.load(threshold).then(async (model) => {
     await model.classify(sentence).then((predictions) => {
      
      for (let i = 0; i < predictions.length; i++) {
        if (predictions[i].results[0].match) {
          negativeMatches[negativeMatches.length] = predictions[i].label;
        } else if (
          predictions[i].results[0].probabilities[0] >
          predictions[i].results[0].probabilities[1]
        ) {
          predictions[i].results[0].match = false;
        } else {
          predictions[i].results[0].match = true;
          negativeMatches[negativeMatches.length] = predictions[i].label;
        }
      }
    });
  });

  return negativeMatches;
};

export default toxicityTest;