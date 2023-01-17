var posts =[
    {userId:1, postName:"post1"},
    {userId:2, postName:"post2"},
    {userId:3, postName:"post3"},
    {userId:1, postName:"post4"},
    {userId:1, postName:"post5"},
    {userId:2, postName:"post6"},
    {userId:1, postName:"post7"},
    {userId:2, postName:"post8"},
    {userId:3, postName:"post9"},
];



let userCounts = {};

posts.forEach(function(post) {
  if (userCounts[post.userId] === undefined) {
    userCounts[post.userId] = 0;
  }
  userCounts[post.userId]++;
  

});

const postCount=function(arr){
    let userCounts = {};

    arr.forEach(function(post) {
      if (userCounts[post.userId] === undefined) {
        userCounts[post.userId] = 0;
      }
      userCounts[post.userId]++;
      
    
    });

    return Object.keys(userCounts).map(e=>({userId:e,postCount:userCounts[e]}))
};

