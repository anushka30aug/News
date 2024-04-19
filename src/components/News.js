import style from '../CSS/News.module.css'
export default function News(props)
{  
    return(
    
  <div className={style.news}>
    <img className={style.disp} src={(props.props.urlToImage)?props.props.urlToImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR__Boi8jUJYitLnhDhbnxeCVRMjpaE8DJEQ&usqp=CAU"} alt=""/>
    <h4>{props.props.title}</h4>
    <p>{props.props.description}</p>
    <a  className={style.btn} href={props.props.url} target="_blank" rel="noreferrer">Read More</a>
  </div>
    );
}