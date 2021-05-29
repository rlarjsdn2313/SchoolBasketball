var Format = (match) => {
    let result = '';
    if (match.Score[0][1] == match.Score[1][1]) {
        result = result + 
`
<div class="match">
    <div class="date">${match.Date}</div>
    <div class="same1">${match.Score[0][0]} : ${match.Score[0][1]}🏆</div>
    <div class="same2">🏆${match.Score[1][0]} : ${match.Score[1][1]}</div>
    <div class="MVP">MVP : ${match.MVP}</div>
</div>
`;
    } else {
        result = result + 
`
<div class="match">
    <div class="date">${match.Date}</div>
    <div class="win">${match.Score[0][0]} : ${match.Score[0][1]}🏆</div>
    <div class="lose">${match.Score[1][0]} : ${match.Score[1][1]}</div>
    <div class="MVP">MVP : ${match.MVP}</div>
</div>
`;
    }

    return result;
}

module.exports = Format