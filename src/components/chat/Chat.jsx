import React, { useState } from 'react';
import './chat.scss';
import OpenAI from 'openai';
import { FormControl, Textarea, Button, Spinner } from '@chakra-ui/react';

//Authorization: Bearer OPENAI_API_KEY
const Chat = () => {
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const [toggleMenu, setToggleMenu] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [apiResponse, setApiResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
    console.log('first');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 1,
        max_tokens: 200,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      setApiResponse(response.choices[0].message.content);
    } catch (error) {
      console.log(error);
      setApiResponse('error.message');
    }
    setLoading(false);
  };
  return (
    <>
      <button className="toggle">
        <i
          className={`${
            toggleMenu ? 'fas fa-angle-down arrow' : 'fas fa-angle-up arrow'
          }`}
          onClick={() => {
            handleToggle();
          }}
        ></i>
      </button>
      <div
        className={`${toggleMenu ? 'toggleContainer show' : 'toggleContainer'}`}
      >
        <div style={{ height: '100%' }}>
          <div className="chatbox">
            <div>
              <strong className="homeBack">
                {apiResponse && (
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <pre>
                      <strong>API response:</strong>
                      {apiResponse}
                    </pre>
                  </div>
                )}
              </strong>
            </div>
          </div>
          <div>
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                padding: '15px',
                //flexDirection: 'row',
                //padding: '5px',
              }}
            >
              {/* <textarea
                type="text"
                //value={prompt}
                placeholder="What can I help you with?"
                onChange={(e) => setPrompt(e.target.value)}
                style={{
                  width: '80%',
                  display: 'flex',
                  padding: '5px',
                  alignItems: 'center',
                }}
              ></textarea> */}
              {/* <FormControl> */}
              <Textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="What can I help you with?"
                type="text"
                size="sm"
                style={{
                  width: '85%',
                  textAlign: 'center',
                  paddingTop: '25px',
                  border: '2px solid green',
                }}
              />
              <button
                disabled={loading || prompt.length === 0}
                style={{
                  width: '15%',
                  fontSize: '25px',
                }}
                type="submit"
              >
                {/* {loading ? 'Generating...' : 'Generate'} */}
                {/* {loading ? <Spinner /> : <i className="fas fa-arrow-right"></i>} */}
                {loading ? <Spinner /> : 'GO'}
              </button>
              {/* </FormControl> */}
            </form>
          </div>
          {/* {apiResponse && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <pre>
            <strong>API response:</strong>
            {apiResponse}
          </pre>
        </div>
      )} */}
        </div>
      </div>
    </>
  );
};

export default Chat;
