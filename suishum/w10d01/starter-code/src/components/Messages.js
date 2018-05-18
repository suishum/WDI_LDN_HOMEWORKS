import React from 'react';

const Messages = ({ messages, deleteMessage }) => {
  // console.log(messages);
  return (
    <table>
      {messages.map((message, i) =>
        <tr key={i}>
          <td className="message">{message}</td>
          <td><button onClick={() => deleteMessage(message)} className="btn red">x</button></td>
        </tr>)}
    </table>
  );
};

export default Messages;
