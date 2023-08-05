// Import the async library for the fourth function
const async = require('async');
const callbackHellImprovement = require("./callBackHellImprovement")

const stepOne = (callback) => {
    setTimeout(() => {
        console.log('Step One completed.');
        callback();
    }, 1000);
}

function stepTwo(callback) {
    setTimeout(() => {
        console.log('Step Two completed.');
        callback();
    }, 1500);
}

function stepThree(callback) {
    setTimeout(() => {
        console.log('Step Three completed.');
        callback();
    }, 500);
}

function stepFour(callback) {
    setTimeout(() => {
        console.log('Step Four completed.');
        callback();
    }, 800);
}

function callbackHellExample(callback) {
    stepOne(() => {
        stepTwo(() => {
            stepThree(() => {
                stepFour(() => {
                    console.log('callbackHellExample completed.');
                    callback();
                });
            });
        });
    });
}


// Second function: A few promises
function promiseExample() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Second function completed.');
            resolve();
        }, 1000);
    });
}

// Second function: A promise 2
function promiseExample2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

// Third function: An async function with a few awaits
async function asyncAwaitExample() {
    try {
        let promise2 = await promiseExample2()
        console.log('Third async function completed.');
        return promise2
    } catch (e) {
        throw new Error("Promise 2 error", e)
    }

}

// Fourth function: Example of parallel functions with async library
function parallelFunctionsExample(callback) {
    async.parallel([
        function (cb) {
            setTimeout(() => {
                console.log('Parallel function 1 completed.');
                cb();
            }, 1000);
        },
        function (cb) {
            setTimeout(() => {
                console.log('Parallel function 2 completed.');
                cb();
            }, 1500);
        },
        function (cb) {
            setTimeout(() => {
                console.log('Parallel function 3 completed.');
                cb();
            }, 500);
        },
    ], callback);
}

// Main function to test all functions
async function main() {
    console.log('Start of the main function.');

    // First function: Callback hell
    callbackHellExample(() => {
        // Second function: A few promises
        promiseExample()
            .then(() => {
                // Third function: An async function with a few awaits
                return asyncAwaitExample();
            })
            .then(() => {
                return new Promise((resolve) => {
                    // Fourth function: Example of parallel functions with async library
                    parallelFunctionsExample(() => {
                        console.log('End of the 4th function.');
                        resolve()
                    });
                })

            }
            ).then(async () => {
                try {
                    await callbackHellImprovement()
                    console.log('End of the main function.');
                    return Promise.resolve()
                } catch (err) {
                    return Promise.reject(err)
                }

            }).catch(e => {
                console.error(e)
            });
    });
}

// Call the main function to start the execution
main();
