import React from "react";
import ReactDOM from "react-dom";
import profile1 from "./image/blank-profile-picture.webp";
import profile2 from "./image/blank-profile-picture.webp";
import profile3 from "./image/blank-profile-picture.webp";
import SingleComment from "./SingleComment"
import UserCard from "./UserCard";

const App = () => {
    return (
        <div className="ui comments">
            <UserCard>
                Hello my name is Balint and I live in Komló.
            </UserCard>
            <UserCard>
                <SingleComment 
                    name="Sarah"
                    date='Today at 5:00pm'
                    picture={profile1}
                    comment="it's amazing" 
                />
            </UserCard>
            <UserCard>
                <SingleComment 
                    name="Joe"
                    date='Today at 6:00pm'
                    picture={profile2}
                    comment="great job" 
                />
            </UserCard>
            <UserCard>
                <SingleComment 
                    name="Smith"
                    date='Today at 7:00pm'
                    picture={profile3}
                    comment='thanks'
                />
            </UserCard>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))