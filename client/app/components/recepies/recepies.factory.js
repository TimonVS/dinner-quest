'use strict';

const apiURL = 'https://frahmework.ah.nl/ah/json/recepten';
const defaultFood = 'pasta';

// ?receptomschrijving=pasta&nasanr=1&personalkey=QIMw3XwUtCI3H102gZTbTpK7NMCjtNtz

let recepieFactory = function ($resource) {
  let params = {
    nasanr: 1,
    personalkey: 'QIMw3XwUtCI3H102gZTbTpK7NMCjtNtz',
    receptomschrijving: defaultFood
  };

  return $resource(apiURL, params, {});
};

export default recepieFactory;
