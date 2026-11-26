async function val1() {
    return new Promise((resolve) => {
        setTiemout(() => {
            resolve("val1");
        }, 1000);
    });
}

async function val2(str) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('val2 ${str}');
        }, 1000);
    });
}

async function test() {
    console.log("calling");
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log(res);
}

test();
