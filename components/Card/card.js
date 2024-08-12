import { useState } from 'react';
import styles from './style.module.css';

const Card = ({title, imgUrl, description}) => {
  const [isDescriptionIs, setDescriptionIs]=useState(false);
  return (
    <div className={styles.main} onClick={() => console.log(title)} >
        <h2>{title}</h2>
        <img src={imgUrl}/>
        <button onClick={()=>{
          setDescriptionIs(!isDescriptionIs)
        }}
        >
          {isDescriptionIs? <>Slėpti</>:<>Sužinok daugiau</>}
        </button>
        {isDescriptionIs &&<p>{description}</p>}
    </div>
  );
};
export default Card;