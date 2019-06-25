import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMessages } from "../store/actions/messages";
import MessageItem from "../components/MessageItem";

class MessageList extends Component {
  componentDidMount() {
    this.props.fetchMessages();
  }
  render() {
    const { messages } = this.props;
    let messageList = messages.map(msg => (
      <MessageItem
        key={msg._id}
        date={msg.createAt}
        text={msg.text}
        username={msg.user.username}
        profileImageUrl={msg.user.profileImageUrl}
      />
    ));
    return messageList;
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(
  mapStateToProps,
  { fetchMessages }
)(MessageList);
