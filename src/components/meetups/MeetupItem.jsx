import Card from '../ui/Card' 
import classes from './MeetupItem.module.css'

function MeetupItem(props) {
    return (
      <Card>
        <li className={classes.item}>
          <div className={classes.image}>
            <img
              src={props.image}
              alt={props.title}
            />
          </div>
          <div className={classes.content}>
            <p>{props.title}</p>
            <p>{props.description}</p>
            <address>{props.address}</address>
          </div>
          <div className={classes.actions}>
            <button>Add to Favourites</button>
          </div>
        </li>
      </Card>
    );
}

export default MeetupItem;