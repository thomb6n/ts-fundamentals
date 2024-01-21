function timeout(n: number) {
    return new Promise(res => setTimeout(res, n));
}

export async function addNumbers(a: number, b: number) {
    await timeout(500);
    return a + b;
}