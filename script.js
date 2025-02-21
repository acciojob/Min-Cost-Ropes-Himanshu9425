function mincost(arr)
{ 
//write your code here
	
// return the min cost
	arr=arr.sort((a,b)=>a-b);
	let Totalcost=0;
	while(arr.length>1){
		let first=arr.shift();
		let second=arr.shift();
		let cost+=first+second;
		Totalcost+=cost;
		arr.push(cost);
		arr=arr.sort((a,b)=>a-b);
	}
  return Totalcost;
}

module.exports=mincost;
