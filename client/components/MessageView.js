import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Component, PropTypes } from 'react';
import { setMessageInput } from 'actions/messages';
import MessageList from 'components/MessageList';
import MessageInput from 'components/MessageInput';
import { SIDEBAR_WIDTH, INPUT_HEIGHT } from 'constants/styles';

const styles = {
  container: {
    top: 0,
    right: 0,
    position: 'fixed',
    left: SIDEBAR_WIDTH,
    bottom: INPUT_HEIGHT,
    alignItems: 'flex-end',
    display: 'flex'
  }
};

class MessageView extends Component {
  static propTypes = {
    messages: PropTypes.array.isRequired,
    messageInput: PropTypes.string.isRequired,
    setMessageInput: PropTypes.func.isRequired
  }

  render() {
    const { messages, messageInput, setMessageInput } = this.props;
    return (
      <div style={styles.container}>
        <MessageList messages={messages}/>
        <MessageInput input={messageInput} setInput={setMessageInput}/>
      </div>
    );
  }
}

function select(state) {
  const { data, ui } = state;
  return {
    messages: data.messages,
    messageInput: ui.messageInput
  };
}

function actions(dispatch) {
  return bindActionCreators({
    setMessageInput: setMessageInput
  }, dispatch);
}

export default connect(select, actions)(MessageView);
