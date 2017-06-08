const lib = require('lib')({token: process.env.STDLIB_TOKEN});

/**
 * /hungry
 *
 *   All Commands use this template, simply create additional files with
 *   different names to add commands.
 *
 *   See https://api.slack.com/slash-commands for more details.
 *
 * @param {string} user The user id of the user that invoked this command (name is usable as well)
 * @param {string} channel The channel id the command was executed in (name is usable as well)
 * @param {string} text The text contents of the command
 * @param {object} command The full Slack command object
 * @param {string} botToken The bot token for the Slack bot you have activated
 * @returns {object}
 */
module.exports = (user, channel, text = '', command = {}, botToken = null, callback) => {

    var restaurantList = [
        {'name': 'The Bakery', 'address': 'Essex St', 'food': 'Sandwiches'},
        {'name': 'Bison Bar & BBQ', 'address': 'Wellington Quay', 'food': 'Barbecue'},
        {'name': 'Saburritos', 'address': 'Dame St', 'food': 'Burritos'},
        {'name': 'Dall\' Italia Pastabar', 'address': 'Merchant\'s', 'food': 'Pasta'},
        {'name': 'Skinflint', 'address': 'Crane Ln', 'food': 'Pizza'},
        {'name': 'Mongolian BBQ', 'address': 'Anglesea St', 'food': 'Stir Fry'},
        {'name': 'Pablo Picante', 'address': 'Aston Quay', 'food': 'Burritos and Tortas (Mexican paninis)'},
        {'name': 'Rafa\'s Temaki', 'address': 'Parlament St', 'food': 'Sushi'},
        {'name': 'Klaw Pokē', 'address': 'Capel St', 'food': 'Pokē Bowls (Hawaiian Sushi'},

    ];

    function selectRestaurant() {
        var draw = Math.floor(Math.random() * restaurantList.length);
        return restaurantList[draw];
    }

    var selectedRestaurant = selectRestaurant();

    callback(null, {
        response_type: 'in_channel',
        text: `Hello, <@${user}>...\nWhy don't you try ${selectedRestaurant.name} on ${selectedRestaurant.address}?\nI heard they serve great ${selectedRestaurant.food}!`
    });

};
