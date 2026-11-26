
function login(username, password) {

    return new Promise((resolve, reject) => {

        console.log("Checking login details...");

        setTimeout(() => {

            if (username === "admin" && password === "1234") {
                resolve("Login Successful!");
            }
            else {
                reject("Invalid username or password!");
            }

        }, 2000);

    });
}

// Calling the promise

login("admin", "1234")

    .then((result) => {
        console.log(result);
    })

    .catch((error) => {
        console.log(error);
    })

    .finally(() => {
        console.log("Login process completed.");
    });
