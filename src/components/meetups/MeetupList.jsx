import MeetupItem from './MeetupItem'
import classes from './MeetupList.module.css';

function MeetupList(props) {
    return (
      <ul className={classes.list}>
        {props.meetups.map((meetup) => (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image = {meetup.image}
            title = {meetup.title}
            description = {meetup.description}
            address = {meetup.adress}
          />
        ))}
      </ul>
    );
}

export default MeetupList;