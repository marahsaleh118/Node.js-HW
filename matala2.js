//המגישות: מרח סאלח + נור מוהרה

const maxNum = 237; 
let num;

for(num=2; num<maxNum; num++) 
{
    let count = 0;
    for (let i=1; i<=num; i++)
    {
        if (num % i == 0)
        {
            count++;
        }
    }    
    if(count == 2) 
    {
        console.log(num);
    }
    
}

//באמצעות לולאה עוברים על המספרים מ2 עד 237 ובודקים אם יש למספר שני מחלקים אז הוא מספר ראשוני ואז מדפיסים אותו 

