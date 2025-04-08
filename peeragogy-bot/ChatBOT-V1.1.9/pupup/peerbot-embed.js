import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"

Chatbot.init({
  chatflowid: "9a9a0286-c1c2-45d3-8ee9-8f861ef0fcf7",
  apiHost: "https://peeragogybot-flowise-production-68ec.up.railway.app",
  chatflowConfig: {
    /* Chatflow Config */
  },
  observersConfig: {
    /* Observers Config */
  },
  theme: {
                button: {
                    backgroundColor: '#3B81F6',
                    right: 20,
                    bottom: 20,
                    size: 48,
                    dragAndDrop: true,
                    iconColor: 'white',
                    customIconSrc: 'https://drive.google.com/file/d/1W2ChD2qbqUdl5zvRUlH1kQKBchNHqfQc/view?usp=sharing',
                    autoWindowOpen: {
                        autoOpen: true,
                        openDelay: 2,
                        autoOpenOnMobile: false
                    }
                },
                tooltip: {
                    showTooltip: true,
                    tooltipMessage: 'Hi There 👋!',
                    tooltipBackgroundColor: 'black',
                    tooltipTextColor: 'white',
                    tooltipFontSize: 16
                },
                disclaimer: {
                    title: 'Disclaimer 😎',
                    message: " <em>Talking to this bot may lead to unexpected insights and learning adventures.</em>",
                    textColor: 'black',
                    buttonColor: '#3b82f6',
                    buttonText: 'Start Chatting',
                    buttonTextColor: 'white',
                    blurredBackgroundColor: 'rgba(0, 0, 0, 0.4)',
                    backgroundColor: 'white'
                },
                customCSS: ``,
                chatWindow: {
                    showTitle: true,
                    showAgentMessages: true,
                    title: 'PeeragogyBot',
                    titleAvatarSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
                    welcomeMessage: 'Hi there 👋 I’m PeeragogyBot — your AI peer in co-learning. What shall we explore today??',
                    errorMessage: 'Oops! Something went wrong. Please try again later.',
                    backgroundColor: '#ffffff',
                    backgroundImage: '',
                    height: '100%',
                    width: '100%',
                    fontSize: 16,
                    starterPrompts: [
                        "Peeragogy?",
                        "Newcomer",
                        "Roadmap" ,
                        "Reduce, reuse, recycle",
                        "Carrying capacity",
                        "A specific project" ,
                        "Wrapper",
                        "Heartbeat",
                        "Scrapbook"
                    ],
                    starterPromptFontSize: 15,
                    clearChatOnReload: false,
                    sourceDocsTitle: 'Sources:',
                    renderHTML: true,
                    botMessage: {
                        backgroundColor: '#f7f8ff',
                        textColor: '#303235',
                        showAvatar: true,
                        avatarSrc: 'https://www.svgrepo.com/show/429466/avatar-circus-magician.svg'
                    },
                    userMessage: {
                        backgroundColor: '#3B81F6',
                        textColor: '#ffffff',
                        showAvatar: true,
                        avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png'
                    },
                    textInput: {
                        placeholder: 'Type your question',
                        backgroundColor: '#ffffff',
                        textColor: '#303235',
                        sendButtonColor: '#3B81F6',
                        maxChars: null,
                        maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 50 characters.',
                        autoFocus: true,
                        sendMessageSound: true,
                        sendSoundLocation: 'send_message.mp3',
                        receiveMessageSound: true,
                        receiveSoundLocation: 'receive_message.mp3'
                    },
                    feedback: {
                        color: '#303235'
                    },
                    dateTimeToggle: {
                        date: true,
                        time: true
                    },
                    footer: {
                        textColor: '#303235',
                        text: 'Co-created by:',
                        company: 'Fabrizio Terzi + Flowise & + ChatOpenAi',
                        companyLink: 'https://github.com/FTG-003'
                    }

                }
            }
        })
