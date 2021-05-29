const express = require("express");
const app = express();

const favicon = require("serve-favicon");

const fs = require("fs");
const path = require("path");

const Format = require("./lib/format");

const port = 3000;
const data = "./data/";

app.set("view engine", "ejs");
app.use(favicon(path.join(__dirname, 'favicon.ico')));

const CheckFile = (num) => {
    let fileList = GetFileList();

    let i = 0;
    let check = false;
    while (i < fileList.length) {
        if (`${fileList[i]}` === `${num}.json`) {
            check = true;
            break;
        }
        i++;
    }

    return check;
}

const GetFileList = () => {
    let fileList = fs.readdirSync(data);
    return fileList
}

const ReadMatch = (num) => {
    let isFile = CheckFile(num);
    if (!(isFile)) {
        return {"error" : true}
    }
    let jsonFile = fs.readFileSync(`${data}${num}.json`);
    
    let jsonData = JSON.parse(jsonFile);

    return jsonData;
}



app.get("/", (req, res) => {
    let fileList = GetFileList();
    let i = fileList.length;
    let match = {};
    let result = '';

    
    while (i > 0) {
        match = ReadMatch(i);
        result = result + Format(match);

        if (!(i == 1)) {
            result = result + 
`
<br>
<hr width="450px" align="center" color="#FFFFF3" />
<br>
`;
        }

        i--;
    }

    res.render("index.ejs", { matches : result });
});

app.listen(port, () => {
    console.log(`Server is running(port:${port})`);
});