
function make(arr, el) {
    var i, i_m, item;
    var len = arr.length;
    var res = [];

    for (i = len; i >= 0; i--) {
        res.push(
            ([]).concat(
                arr.slice(0, i),
                [el],
                arr.slice(i, i_m)
            )
        );
    }

    return res;
}

function combinations(arr) {
    var prev, curr, el, i;
    var len = arr.length;

    curr = [[arr[0]]];

    for (i = 1; i < len; i++) {
        el = arr[i];
        prev = curr;
        curr = [];

        prev.forEach(function (item) {
            curr = curr.concat(
                make(item, el)
            );
        });
    }

    return curr;
    // return console.log(curr)
}

m = [1, 2, 3, 4, 5, 6, 7]
combinations(m)


function declOfNum(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}


// declOfNum(count, ['найдена', 'найдено', 'найдены']);