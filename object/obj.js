// Realtime questions for object and json
const histories = [
  {
    date: "2024-11-07T12:03:04.000Z",
    title: "Brand Contact Updated",
    description: "You modified contact details for POC: Iopsopas.",
  },
  {
    date: "2024-11-07T11:09:31.000Z",
    title: "Task Completed",
    description: "You marked the follow-up task for Iopsopas as done.",
  },
  {
    date: "2024-11-07T09:25:06.000Z",
    title: "Event Scheduled",
    description: "You scheduled a call with Iopsopas.",
  },
  {
    date: "2024-11-07T09:17:26.000Z",
    title: "Note Added",
    description: "You added meeting notes for Iopsopas.",
  },
  {
    date: "2024-10-04T07:31:47.000Z",
    title: "Brand Info Updated",
    description: "You updated company details for Iopsopas.",
  },
  {
    date: "2024-10-03T15:34:56.000Z",
    title: "New Lead Created",
    description: "You added a new lead associated with Iopsopas.",
  },
  {
    date: "2024-08-29T05:23:12.000Z",
    title: "Inventory Linked",
    description: "You linked inventory items to Iopsopas.",
  },
  {
    date: "2024-08-29T05:22:59.000Z",
    title: "New POC Added",
    description: "You added a new point of contact - Iopsopas.",
  },
];
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 1 // How many history records are there in total?
//   console.log(histories.length);
//2. ----------------------------------------------------------------
// What is the most recent activity?
/*const mostRecent=histories.reduce((a,b)=>new Date(a.date) > new Date(b.date)?a:b);
console.log(mostRecent.title); */
// 3.--------------------------------------------------------
// What is the oldest activity?
/*const oldest= histories.reduce((a,b)=>{
    return new Date(a)< new Date(b) ? a:b
})
console.log(oldest.title); */
// 4.---------------------------------------------------------------------
// How many activities happened in November 2024?
/*const novCount= histories.filter((history,index)=>{
return history.date.startsWith("2024-11")
}).length;
console.log(novCount); */
// 5 ------------------------------------------------
// Get all unique activity titles
/*const title=[...new Set(histories.map((unq)=>unq.title))]
console.log(title); */

// 6//------------------------------------------------------
// Get all activities sorted from  oldest to newest 
/*const sorted= [...histories].sort((a,b)=>new Date(a.date)-new Date(b.date))
const res=sorted.map((arange)=>arange.title)
console.log(res); */
// 7 -----------------------------------------------------------
// Get all activities sorted from   newest to oldest
/*const sorted= [...histories].sort((a,b)=>new Date(b.date)-new Date(a.date))
const res=sorted.map((arange)=>arange.title)
console.log(res); */
// 8 ------------------------------------------------------------------
// 7. Find activities that contain the word "Iopsopas" in description
/*const filtered=histories.filter((filData)=>filData.description.includes('Iopsopas'));
console.log(filtered.length); */
// 9.---------------------------------------------------------------
// 8. Group activities by month

/*const grouped=histories.reduce((acc,val)=>{
const month=val.date.slice(0,7);
acc[month]= acc[month]? acc[month]+1:1;
  return acc;
},{});
console.log(grouped); */

function grouped(histories) {
  const result = {};
  for (let i = 0; i < histories.length; i++) {
    const value = histories[i];
    const month = value.date.slice(0, 7);
    if (result[month]) {
      result[month] += 1;
    } else {
      result[month] = 1;
    }
  }
  return result;
}
console.log(grouped(histories));




