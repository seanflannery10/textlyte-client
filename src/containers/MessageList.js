import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMessages, removeMessage } from "../store/actions/messages";
import MessageItem from "../components/MessageItem";

class MessageList extends Component {
  componentDidMount() {
    this.props.fetchMessages();
  }
  render() {
    const { messages, removeMessage } = this.props;
    let messageList = messages.map(msg => (
      <MessageItem
        key={msg._id}
        date={msg.createAt}
        text={msg.text}
        username={msg.user.username}
        profileImageUrl={msg.user.profileImageUrl}
        removeMessage={removeMessage.bind(this, msg.user._id, msg._id)}
      />
    ));
    return (
      <div className="row col-sm-8">
        <div className="offset-1 col-sm-10">
          <ul className="list-group" id="messages">
            {messageList}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(
  mapStateToProps,
  { fetchMessages, removeMessage }
)(MessageList);
