const EventHooksPlugin = require('../../event-hooks');

module.exports = {
    plugins: [
        new EventHooksPlugin({
            'run': () => {
                console.log('RUN!');
            },
            'done': () => {
                console.log('DONE!');
            }
        })
    ]
}
