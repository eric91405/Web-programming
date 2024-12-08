const userList=[
    {name: 'kms', age: 23, score: 95 },
    {name: 'msk', age: 24, score: 96 },
    {name: 'skm', age: 25, score: 97 },
];

for(const user of userList){
    console.log('user: ', user);
}

userList.forEach(function(a) {
    console.log('user:', a);
});

userList.forEach(a=> console.log('user',a));