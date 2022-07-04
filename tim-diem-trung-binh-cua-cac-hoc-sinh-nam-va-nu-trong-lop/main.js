const arr = [
    {
        name: "Ha",
        gender: 'female',
        poin: 8
    },
    {
        name: "Huy",
        gender: 'male',
        poin: 9
    },
    {
        name: "Hung",
        gender: 'male',
        poin: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        poin: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        poin: 10
    },
    {
        name: "Long",
        gender: 'male',
        poin: 5
    },
    {
        name: "Luan",
        gender: 'male',
        poin: 10
    },
    {
        name: "Linh",
        gender: 'female',
        poin: 8
    }

];
let totalFemale = 0;
let totalMale = 0;
let arrFemale = 0;
let arrMale = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i].gender === "female") {
        arrFemale++;
        // tăng lên 1 đơn vị khi là female
        // arrFemale.push(arr[i].gender);
        totalFemale += arr[i].poin;
    } else {
        arrMale++;
        // tăng lên 1 đơn vị khi là male
        // arrMale.push(arr[i].gender);
        totalMale += arr[i].poin;
    }
}
console.log(`Điểm trung bình của nam là : ${totalMale / arrFemale}`);
console.log(`Điểm trung bình của nữ là  : ${totalFemale / arrFemale}`);


