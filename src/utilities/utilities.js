const getData = async () => {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/?client_id=9UphDS2o6jtsNxJ1yGv2wwmP_KdYnS2-vzrtAQlepao`, 
       {method: "GET", headers: {"Content-Type": "application/json"}} )
       const data = await response.json();
       const nameArray = ["Rupert", "Cuthbert", "Peggy", "Moss", "Oggy", "Taz", "Pussington", "Rufus", "Winnie", "MT", "Miss Mauw"];
       const myArray = data.map(item => {
        const rand = Math.floor (Math.random() * 10);
        const timeArray = ["1d", "2d", "3d", "4d", "5d", "6d", "7d", "1w", "2w", "3w", "4w", "5w", "6w", "7w", "8w", "9w", "10w"];
        const time = Math.floor (Math.random() * 16);
        const likes = Math.floor (Math.random() * 1000);
        const myName = nameArray [rand];
        const timeStamp = timeArray [time];
        return {postImage: item.urls.regular, likes: likes, timestamp: timeStamp, user: myName}; 
       });
       
       return myArray;
    
    } catch (error) {
        console.log(error);
    }
}

export default getData;