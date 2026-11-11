

let currentBids = {
    1: 25000,
    2: 10000,
    3: 15000
};

function placeBid(id, startingPrice) {

    let amount = Number(document.getElementById("bid" + id).value);

    if (amount > currentBids[id]) {

        currentBids[id] = amount;

        document.getElementById("result" + id).innerHTML =
            "Bid Successful! Current Bid: ₹" + amount;

    } else {

        document.getElementById("result" + id).innerHTML =
            "Enter a higher bid amount!";
    }
}
