import cookie from 'react-cookies'

//based on ECMAScript 5
export function isObjectEmpty(objectToCheck) {
  return (Object.keys(objectToCheck).length > 0 ? false : true);
}

export function getSavedRolls() {

    var arrayToReturn = [];

    var cookies = cookie.loadAll();

    for (const prop in cookies) {
      arrayToReturn.push(JSON.parse(cookies[prop]));
    }

    return arrayToReturn;
    
  }

export function getRandomInts(min, max, cardinality, sumResult)	{

   var randomInts = new Array(cardinality);
   var i;
   
	for (i = 0; i < cardinality; i++) {
		randomInts[i] = Math.floor(Math.random() * max) + min;  // returns a random integer from 1 to 10     
   }

   if (sumResult) {
	   var sum = 0;
		for (i = 0; i < randomInts.length; i++) {
			sum += randomInts[i];     
	   }
		return randomInts.slice(1);
	}
	else	{
		return randomInts;
	}

}

export function getFirstSavedRoll() {

    //var rollToReturn = '';

     var cookies = cookie.loadAll();

     //cookie.remove('Port Attack');

    if (isObjectEmpty(cookies))
    {
      return {}; 
    }
    else
    {
      for (const prop in cookies) {
        return JSON.parse(cookies[prop])
      }

    } 


  }


export function convertCookieStringToSavedRoll(stringToConvert)  {

    var currentStringTrackingPosition = 0;

    while (stringToConvert.IndexOf(':',currentStringTrackingPosition))
    {
      //const property
      //var start = content.indexOf(propertyName);
      //var end = content.indexOf(",",start);
      //var returnString = content.slice(start + propertyName.length + 1,end);
    }
    //return returnString; 
    
  }


