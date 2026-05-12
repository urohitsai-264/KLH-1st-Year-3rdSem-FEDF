function genericfun<T>(item:T):T{
    return item;
}
console.log(genericfun<String>('Shana'));
console.log(genericfun<number>(6673));