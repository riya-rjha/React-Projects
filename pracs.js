let arrOfObj = [
    { "Name": "Robert", "Gender": 'M', "Age": 20 },
    { "Name": "Aliana", "Gender": 'F', "Age": 34 },
    { "Name": "Illeana", "Gender": 'F', "Age": 46 },
    { "Name": "Alex", "Gender": 'M', "Age": 30 }
]

const convertToArrofArr = (arrOfObj) => {
    const ansVal = [];
    const ansKey = [];
    for(let i=0; i<arrOfObj.length; i++){
        let currKey = Object.keys(arrOfObj[i]);
        let currValue = Object.values(arrOfObj[i]);
        ansKey.push(currKey);
        ansVal.push(currValue);
    }
    console.log(ansKey);
    console.log(ansVal);
}

convertToArrofArr(arrOfObj);

const convertToArrofArrII = ( ) => {
    const ansVal = [];
    arrOfObj.map((e)=>{

    })
}