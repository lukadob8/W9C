// var tweets = ["This", "array", "definitely", "has", "ten", "words", "in", "it", "as", "strings"];
// var arrayLength = tweets.length;


// for(var index = 0; index < arrayLength; index++) {
//     console.log (tweets[index]);
// }



var users = [
    {
        tweet: "This",
        username: "Tom",
        created_at: "11-8-2019",
        age: 19
    },

    {
        tweet: "array",
        username: "John",
        created_at: "11-8-2019",
        age: 17
    },

    {
        tweet: "deffinitly",
        username: "Amy",
        created_at: "11-8-2019",
        age: 22
    },

    {
        tweet: "has",
        username: "Tom",
        created_at: "11-8-2019",
        age: 16
    },

    {
        tweet: "ten",
        username: "Tom",
        created_at: "11-8-2019",
        age: 19
    },

    {
        tweet: "words",
        username: "Tom",
        created_at: "11-8-2019",
        age: 17
    },

    {
        tweet: "in",
        username: "Tom",
        created_at: "11-8-2019",
        age: 25
    },

    {
        tweet: "it",
        username: "Tom",
        created_at: "11-8-2019",
        age: 20
    },

    {
        tweet: "as",
        username: "Tom",
        created_at: "11-8-2019",
        age: 24
    },

    {
        tweet: "strings",
        username: "Tom",
        created_at: "11-8-2019",
        age: 17
    },
]

function filterAge(user) {
    if (user.age >= 18) {
        return true;
    } else {
        return false;
    }
}

var adults = users.filter(filterAge);
console.log (adults);