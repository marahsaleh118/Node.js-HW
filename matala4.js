//המגישות : מרח סאלח + נור מוהרה 
const fs = require("fs");

const files = ["f1.txt", "f2.txt", "f3.txt", 
    "f4.txt", "f5.txt","f6.txt", "f7.txt"
    ,"f8.txt", "f9.txt","f10.txt"];

let res = "";

for (let i=0; i<files.length; i++){
    const TextContent = fs.readFileSync( "Text/" + files[i], "utf8");
    const lines = TextContent.split("\n");
    

    for (let j=0; j<i + 1 && j< lines.length; j++)
    {
        res += lines[j] + "\n";
    }
}
    fs.writeFileSync("result.txt", res, "utf8");



//יצרנו תוכנית שיש בה 10 קבצים מסוג טקסטאם בקבצים אלה יש מספר שורות שווה או גדול ממספר הקובץ
// אז מדפיס את כל השורות עד שיגיע למספר השורה השווה למספר הקובץ 
//אם מספר השורות היה קטן ממספר הקובץ אז מדפיסים את כל השורות ללא רווחים ולא משאירים שורות ריקים 
