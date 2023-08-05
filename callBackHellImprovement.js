function stepOne() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Step One completed.');
            resolve();
        }, 1000);
    });
}

function stepTwo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Step Two completed.');
            resolve();
        }, 1500);
    });
}

function stepThree() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Step Three completed.');
            resolve();
        }, 500);
    });
}

function stepFour() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Step Four completed.');
            resolve();
        }, 800);
    });
}

async function main() {
    console.log('Start of the improvement process.');

    try {
        await stepOne();
        await stepTwo();
        await stepThree();
        await stepFour();
        console.log('End of the improvement process.');
        return 1
    } catch (error) {
        console.error('An error occurred:', error);
        throw error
    }
}

module.exports = main
