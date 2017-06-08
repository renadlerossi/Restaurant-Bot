const lib = require('lib')({token: process.env.STDLIB_TOKEN});

/**
* message event
*
*   All events use this template, simply create additional files with different
*   names to add event responses
*
*   See https://api.slack.com/events-api for more details.
*
* @param {string} user The user id of the user that invoked this event (name is usable as well)
* @param {string} channel The channel id the event was executed in (name is usable as well)
* @param {string} text The text contents of the event
* @param {object} event The full Slack event object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/
module.exports = (user, channel, text = '', event = {}, botToken = null, callback) => {

    var restaurantList = [
        {'name': 'The Bakery', 'address': 'Essex St', 'food': 'Sandwiches'},
        {'name': 'Bison Bar & BBQ', 'address': 'Wellington Quay', 'food': 'Barbecue'},
        {'name': 'Saburritos', 'address': 'Dame St', 'food': 'Burritos'},
        {'name': 'Dall\' Italia Pastabar', 'address': 'Merchant\'s', 'food': 'Pasta'},
        {'name': 'Skinflint', 'address': 'Crane Ln', 'food': 'Pizza'},
        {'name': 'Mongolian BBQ', 'address': 'Anglesea St', 'food': 'Stir Fry'},

    ];

    function selectRestaurant() {
        var draw = Math.floor(Math.random() * restaurantList.length);
        return restaurantList[draw];
    }

    var selectedRestaurant = selectRestaurant();

  // Only send a response to certain messages
  if (text.match(/hungry|starving/i)) {
    callback(null, {
        text: `Hello, <@${user}>...\nWhy don't you try ${selectedRestaurant.name} on ${selectedRestaurant.address}?\nI heard they serve great ${selectedRestaurant.food}!`
    });
  } else {
    callback(null, {});
  }

};
