import React, { useState , useEffect} from 'react'
import "./TinderCard.css"
// import MyTinderCard from "react-tinder-card"
import TinderCard from "react-tinder-card"
import myAxios from "./axios"

function MyTinderCard() {

    
    
    const [array, setArray] = useState([

        {
            
            name: "Abdullah",
            url: "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960"
            },
            {
           
            name: "Usman",
            url: "https://images.unsplash.com/photo-1521336637830-92e5a50e21ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZWxvbiUyMG11c2t8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
            "__v": 0
            }
    ]);
    
    // useEffect(()=>{
    // const  fetchData = async() =>{
    //    const myNew = await myAxios.get("/tinder");
    //     console.log("hello");
    //    console.log(myNew.data);
    // //   setArray(myNew);
    // //   console.log(array);
    // }
    // fetchData();
    // } ,[])
    console.log(array);
 
    const swiped = (dir, name) => {
        console.log("Removing  " + name);
    }

    const outOfFrame = (name) => {
        console.log("swiping  " + name)
    }
    return (
        
            <div className='tinderCards'>


                {array.map((person) => (

                    

<TinderCard
className='swipe'
key={person.name}
preventSwipe={["up","down"]}
onSwipe={(dir)=> swiped(dir,person.name)}
onCardLeftScreen={()=> outOfFrame(person.name)}
>

    <div className='card'
    style={{ backgroundImage : "url("+person.url+")" }}
    >
<h3>{person.name}</h3>
    </div>
</TinderCard>

                ))}




            </div>
        
    )
}

export default MyTinderCard