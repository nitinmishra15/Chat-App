
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useConversation from '../zustand/useConversation.js';

const useGetMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessage, selectedConversation } = useConversation();

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            if (selectedConversation && selectedConversation._id) {
                try {
                    const res = await axios.get(
                        `/api/message/get/${selectedConversation._id}`
                    );
                    setMessage(res.data); 
                } catch (error) {
                    console.log("Error in getting Messages", error);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
                console.log("No conversation selected");
            }
        };
        getMessages();
    }, [selectedConversation, setMessage]);

    return { loading, messages };
};

export default useGetMessage;



