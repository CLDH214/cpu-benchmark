const givenBigObject = () => {
    return {randomKeyName: new Array(1024 * 1024 * 50).fill("a")};
}

const serialiseBigObject = (sourceObject: any) => {
    return JSON.stringify(sourceObject);
}

const main = () => {
    const result = serialiseBigObject(givenBigObject());
    console.log(`done stringify an object with length of ${result.length}`)
}

main()