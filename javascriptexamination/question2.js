class players{
    constructor(username,tweet){
        this.username=username;
        this.tweet=tweet;
    }
    getPlay=()=>{
        console.log(this.username);
        console.log(this.tweet);
    }
}
var obj1=new players("sachin",1)
obj1.getPlay();
var obj2=new players("sehwag",1)
obj2.getPlay();
var obj3=new players("kohli",1)
obj3.getPlay();
var obj4=new players("sachin",2)
obj4.getPlay();
var obj5=new players("kohli",1)
obj5.getPlay();
var arr=[]
arr.push(obj1)
arr.push(obj2)
arr.push(obj3)
 arr.push(obj4)
 arr.push(obj5)
 var q1=arr.map(obj=>obj.tweet).reduce((obj1,obj2)=>obj1>obj2?obj1:obj2)
 console.log(q1)
 var q2=arr.filter(obj=>obj.tweet==q1)
 console.log(q2)
 var q3=arr.sort((obj1,obj2)=>obj2.tweet-obj1.tweet)
 console.log(q3)