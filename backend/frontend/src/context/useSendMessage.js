import React , { useEffect, useState } from 'react'
import axios from 'axios';
import useConversation from '../zustand/useConversation.js';

const useSendMessage = () => {

    const [loading, setLoading] = useState(false);
    const { messages, setMessage, selectedConversation } = useConversation();
    const sendMessages = async( message)=>{
                     setLoading(true);
                         try {
                             const res = await axios.post(
                                 `/api/message/send/${selectedConversation._id}`,
                                 { message }
                             );
                             setMessage([...messages, res.data ]);
                             setLoading(false);
        
                         }catch(error) {
                            console.log("Error in send Messages", error)
                             setLoading(false);
                         }
                 }
  return {loading , sendMessages}
};

export default useSendMessage;


