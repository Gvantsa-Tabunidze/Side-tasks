'use strict';

// Task 1
function pre_LaunchChecks(fuel, weather, system) {
  return new Promise((resolve, reject) => {
    if (fuel >= 2000 && weather <= 10 && system === 'ok') {
      return setTimeout(() => resolve('All checks pass'), 1000);
    } else {
      return setTimeout(
        () => reject('Weather conditions are not suitable for launch!'),
        1000
      );
    }
  });
}

function Fuel_the_Rocket(prevStatus, fuel) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (prevStatus === 'All checks pass' && fuel >= 2000) {
        return resolve('Fueling is complete!');
      } else {
        return reject('Fuel leak is detected!');
      }
    }, 3000);
  });
}

function Board_the_Crew(fuelResp, astronauts) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fuelResp === 'Fueling is complete!' && astronauts >= 12) {
        return resolve('All astronauts got the seatbelts ready!');
      } else {
        return reject('An astronaut is missing!');
      }
    }, 2000);
  });
}

function Countdown_and_Launch(astronautsResp, seconds) {
  return new Promise((resolve, reject) => {
    if (astronautsResp !== 'All astronauts got the seatbelts ready!')
      return reject('Abort mission! Engine failure detected');

    let count = seconds;
    const timer = setInterval(() => {
      console.log(count);
      count--;
      if (count < 0) {
        clearInterval(timer);
        return resolve('Go!');
      }
    }, 1000);
  });
}

function finalResult(lastResponse) {
  return new Promise((resolve) => {
    if (lastResponse === 'Go!')
      return resolve('Rocket has successfully entered space!');
  });
}

pre_LaunchChecks(5000, 8, 'ok')
  .then((status) => {
    console.log(status);
    return Fuel_the_Rocket(status, 2000);
  })
  .then((fuelResp) => {
    console.log(fuelResp);
    return Board_the_Crew(fuelResp, 12);
  })
  .then((astronautsResp) => {
    console.log(astronautsResp);
    return Countdown_and_Launch(astronautsResp, 5);
  })
  .then((lastResponse) => {
    return finalResult(lastResponse);
  })
  .then((grandResult) => console.log(grandResult))
  .catch((negStatus) => console.log(negStatus));






// Task 2
// Get the Song

const song = {
  name: "Don't cry",
  band: 'Guns n roses',
};

function searhForSong(songObject) {
  return new Promise((resolve, reject) => {
    if (songObject.name === "Don't cry") return resolve('This is a right song');
    return reject('Song not found!');
  });
}

function loadTheSong(searchResult) {
  if (searchResult === 'This is a right song') {
    console.log('The song is loading');
    return new Promise((resolve, reject) => {

      setTimeout(()=>{
        if (Math.random() < 0.7){
          return reject('Buffering error! Please try again.')
        }else{
          return resolve('Song is ready to play');
        }
    
      },3000)
    });
  }
}

function PlaySong(loadResult, songObject){
  return new Promise((resolve) => {
    setTimeout(()=>{
      if(loadResult === 'Song is ready to play')
     return resolve(`Now playing:${songObject.name}`)
    }, 2000)
   })
}

searhForSong(song)
  .then((response) => {
    console.log(response);
    return loadTheSong(response);
  })
  .then((loadStatus) => {
    console.log(loadStatus);
    return PlaySong(loadStatus,song)
  })
  .then((final)=> console.log(final))
  .catch((err) => console.log(err));







// Task3
let ingridients = ['mushrooms', 'cheese', 'dough', 'tomato'];
function orderConfiormation() {
  return new Promise((resolve, reject) => {
    const newIngridients = ingridients.map((ingr) => ingr);

    if (JSON.stringify(ingridients) === JSON.stringify(newIngridients)) {
      return resolve('All ingridients are at a place!');
    } else {
      return reject("Sorry, we're out of cheese!");
    }
  });
}

function PreparePizza(orderConfirmation, preparationTime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        orderConfirmation === 'All ingridients are at a place!' &&
        Math.random() * 3 + 1 <= preparationTime
      ) {
        return resolve('Pizza is ready to bake!');
      } else {
        return reject('Chef is on a break!');
      }
    }, 3000);
  });
}

function BakePizza(prepResp) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (prepResp === 'Pizza is ready to bake!') {
        resolve('Pizza is baked!');
      } else {
        return reject('Oven malfunction! Order canceled!');
      }
    }, 5000);
  });
}

function DeliverPizza(bakingResponse, deliveryGuy) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (bakingResponse === 'Pizza is baked!' && deliveryGuy) {
        resolve('Pizza delivered!');
      } else {
        return reject('Driver got lost! Refund issued.');
      }
    }, 4000);
  });
}

orderConfiormation()
  .then((response) => {
    console.log(response);
    return PreparePizza(response, 4);
  })
  .then((preparationResponse) => {
    console.log(preparationResponse);
    return BakePizza(preparationResponse);
  })
  .then((deliveryResponse) => {
    console.log(deliveryResponse);
    return DeliverPizza(deliveryResponse, 'David');
  })
  .then((finalResponse) => console.log(finalResponse))
  .catch((error) => console.log(error));
