import React from "react";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0, previous: 0 };
  }

  render() {
    return (
      <div>
        <p>I'm a positive and friendly person.
        Also, I love to set goals and achieve them.
        My important qualities: self-motivated, ability overcome difficulties and the ability to learn.
        These skills help me along the way:</p>
      </div>
    )
  }
}
