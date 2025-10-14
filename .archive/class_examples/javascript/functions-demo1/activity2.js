// function that takes an array and sorts alphabetically

const array = ['apple', 'banana', 'Apple', 'Orange', 'aPricot', 'orange'];
const fakeArray = 2;
const sortArray = (array) => {

    if (!Array.isArray(array)) {
        console.error("Must provide an array😤");
        return; // do nothing
    }
    // raw sort
    console.log("raw data sorted:", array.sort());

    // normalize
    const normalized = array.map((item) => item.toLowerCase());
    console.log("normalized data:", normalized.sort());

    // reverse order
    const reverse = array.reverse();
    console.log("raw data in reverse order: ", reverse);

    // reverse but manually:
    const manualReverse = array.sort((a, b) => b-a);
    console.log("raw data in reverse order with explicit comparator: ", manualReverse);

}

sortArray(array);
sortArray(fakeArray);