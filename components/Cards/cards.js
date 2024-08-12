import styles from './style.module.css';
import Card from "../Card/card";
import {useState} from "react";

const Cards = () => {
  const [cards, setCards]=useState([
    {
     title: "Vasario 16-osios gatvė",
     imgUrl: "https://www.vz.lt/apps/pbcsi.dll/storyimage/vz/20240509/MARKETING/240509919/AR/0/AR-240509919.jpg?exactW=800&AlignV=middle&imageversion=Horizontalus&lu=1234",
     description: "Gamtos ritmu žaliuojanti gatvė, su tekančia upe ir daug vietų prisėsti."
   },
   {
     title: "Miesto parkas",
     imgUrl: "https://varena.lt/wp-content/uploads/2023/02/varenos-parkas4.jpg",
     description: "Pušų pavėsis ir medžio drožėjų darbų ekspozicija po atviru dangumi."
   },
   {
     title: "Viešoji biblioteka",
     imgUrl: "https://pazinkdzukija.lt/app/uploads/2022/12/karaliu-pasaka-scaled.jpg",
     description: "Didžiulė freska ant pastato sienos M.K.Čiurlionio paveikslo motyvais."
   },
   {
     title: "Bažnyčia",
     imgUrl: "https://cdn4.onlithuania.com/content/uploads/2021/08/varena-baznycia.jpeg",
     description: "Medinė bažnytėlė miesto centre."
   },
   { 
     title: "Ūlos atotanga",
     imgUrl: "https://photos.wikimapia.org/p/00/01/65/07/22_big.jpg",
     description: "Natūraliai gamtos atverti žemės sluoksniai"
   },
   { 
    title: "Ūlos akis",
    imgUrl: "https://www.checkinlithuania.com/wp-content/uploads/2021/06/IMG_20210611_100556_sumazinta.jpg",
    description: "Ūlos akis, kurioje nuolat verda smėlis"
  },
  
  ]);
  return (
    <div className={styles.main}>
      {cards.map((c)=>{
        return <Card title={c.title} imgUrl={c.imgUrl} description={c.description}/>
      })}
    </div>
  );
};

export default Cards