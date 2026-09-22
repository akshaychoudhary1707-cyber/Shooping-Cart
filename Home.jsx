import Item from "./Item";
const Home = () => {
    const itemData=[
        {image:"../Images/Garden Of Sinners.png",title:"Garden of Sinners",price: 2000 },
        {image:"../Images/All Tommorow.png",title:"All Tommorow",price: 150 },
        {image:"../Images/When Day Break.png",title:"When Day Break",price: 620 },
        {image:"../Images/When They Cry.png",title:"When They Cry",price: 900 },
        {image:"../Images/Dies Irae.png",title:"Dies Irae",price: 1500 },
        {image:"../Images/The Count Of Morte Cristo.png",title:"The Count Of Morte Cristo",price: 700 },
    ];
    return (
        <div className="Home">
           {
            itemData.map((item,index)=>(
                <Item key={index} item={item} />
            ))
           }
        </div>
    );
};
export default Home;