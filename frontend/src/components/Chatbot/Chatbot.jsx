import React, { useState, useRef, useEffect } from 'react';
import './chatbot.css';

const TravelChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your travel assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);
  const messagesEndRef = useRef(null);

  const quickQuestions = [
    "How can I book a tour?",
    "What's your cancellation policy?",
    "How do I contact support?",
    "What payment methods do you accept?",
    "How can I modify my booking?",
    "What should I bring on tours?",
    "Do you offer group discounts?",
    "What's included in tour packages?",
    "How do I get refund?",
    "Can I change my travel dates?",
    "What are your popular destinations?",
    "Do you provide travel insurance?"
  ];

  const faqResponses = {
    "how can i book a tour": "To book a tour:\n1. Browse our Tours section\n2. Select your preferred tour\n3. Choose your date and number of guests\n4. Complete the booking form\n5. Make payment\n\nNeed help with a specific tour? Just ask!",
    
    "what's your cancellation policy": "Our cancellation policy:\n• Free cancellation up to 24 hours before the tour\n• 50% refund for cancellations 12-24 hours before\n• No refund for cancellations less than 12 hours\n• Full refund for weather-related cancellations\n\nFor specific cases, contact our support team!",
    
    "how do i contact support": "You can reach our support team:\n📧 Email: support@travelworld.com\n📞 Phone: +1-800-TRAVEL\n💬 Live chat: Right here!\n⏰ Hours: 24/7 support available\n\nI'm here to help with most questions instantly!",
    
    "what payment methods do you accept": "We accept:\n💳 Credit Cards (Visa, MasterCard, Amex)\n🏦 Debit Cards\n💰 PayPal\n🔐 Secure payment processing\n💡 Payment plans available for tours over $500\n\nAll transactions are 100% secure!",
    
    "how can i modify my booking": "To modify your booking:\n1. Log into your account\n2. Go to 'My Bookings'\n3. Select the booking to modify\n4. Click 'Modify Booking'\n5. Make changes and confirm\n\nNote: Changes subject to availability and may incur fees.",
    
    "what should i bring on tours": "Essential items for tours:\n🎒 Comfortable walking shoes\n☀️ Sunscreen and hat\n📷 Camera for memories\n💧 Water bottle\n🆔 Valid ID/passport\n💰 Local currency for tips\n\nSpecific tour requirements will be in your booking confirmation!",
    
    "do you offer group discounts": "Yes! Group discounts available:\n👥 5-9 people: 10% discount\n👥 10-19 people: 15% discount\n👥 20+ people: 20% discount\n🎓 Student groups: Additional 5% off\n💒 Family packages: Special rates\n\nContact us for custom group pricing!",
    
    "what's included in tour packages": "Our tour packages typically include:\n✅ Professional tour guide\n✅ Transportation during tour\n✅ Entry tickets to attractions\n✅ Small group experience (max 15 people)\n✅ Safety equipment if needed\n✅ 24/7 customer support\n\nMeals and accommodation vary by package. Check individual tour details!",
    
    "how do i get refund": "Refund process:\n1. Log into your account\n2. Go to 'My Bookings'\n3. Click 'Request Refund'\n4. Fill refund form\n5. Submit with reason\n\nRefunds processed within 5-7 business days. Amount depends on cancellation timing.",
    
    "can i change my travel dates": "Yes, you can change dates:\n📅 Free changes: 48+ hours before tour\n📅 Small fee: 24-48 hours before\n📅 Subject to availability\n📅 Peak season may have restrictions\n\nTo change dates, go to 'My Bookings' or contact support!",
    
    "what are your popular destinations": "Our top destinations:\n🏔️ Mountain Adventures: Himalayas, Alps\n🏖️ Beach Escapes: Maldives, Bali, Goa\n🏛️ Cultural Tours: India, Europe, Egypt\n🦁 Wildlife Safaris: Africa, Costa Rica\n🌸 Seasonal Specials: Cherry Blossom, Northern Lights\n\nExplore our Tours section for complete list!",
    
    "do you provide travel insurance": "Travel insurance options:\n🛡️ Basic coverage: Medical emergencies\n🛡️ Premium coverage: Trip cancellation + medical\n🛡️ Adventure coverage: High-risk activities\n💰 Starting from $15 per trip\n🌍 Worldwide coverage available\n\nRecommended for international travel!"
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findResponse = (input) => {
    const normalizedInput = input.toLowerCase().trim();
    
    // Direct match first
    if (faqResponses[normalizedInput]) {
      return faqResponses[normalizedInput];
    }
    
    // Enhanced keyword matching with better scoring
    let bestMatch = null;
    let bestScore = 0;
    
    for (const [key, response] of Object.entries(faqResponses)) {
      const keywords = key.split(' ');
      const inputWords = normalizedInput.split(' ');
      
      let score = 0;
      
      // Exact word matches
      keywords.forEach(keyword => {
        if (inputWords.includes(keyword)) {
          score += 2;
        }
      });
      
      // Partial matches
      keywords.forEach(keyword => {
        inputWords.forEach(word => {
          if (word.includes(keyword) || keyword.includes(word)) {
            score += 1;
          }
        });
      });
      
      // Calculate match percentage
      const matchPercentage = score / (keywords.length * 2);
      
      if (matchPercentage > bestScore && matchPercentage > 0.3) {
        bestScore = matchPercentage;
        bestMatch = response;
      }
    }
    
    if (bestMatch) {
      return bestMatch;
    }
    
    // Enhanced fallback responses with keyword detection
    if (normalizedInput.includes('price') || normalizedInput.includes('cost') || normalizedInput.includes('money') || normalizedInput.includes('expensive')) {
      return "Tour prices vary by destination and season. You can view pricing on each tour's detail page. We also offer:\n• Group discounts (10+ people)\n• Early bird specials\n• Seasonal promotions\n• Student discounts\n\nCheck our Tours section for current rates!";
    }
    
    if (normalizedInput.includes('weather') || normalizedInput.includes('climate') || normalizedInput.includes('season') || normalizedInput.includes('rain')) {
      return "Weather information:\n• Check our tour descriptions for seasonal recommendations\n• We monitor weather conditions closely\n• Tours may be modified for safety\n• Full refunds for weather cancellations\n\nBest time to visit depends on your destination preferences!";
    }
    
    if (normalizedInput.includes('food') || normalizedInput.includes('meal') || normalizedInput.includes('lunch') || normalizedInput.includes('dinner')) {
      return "Food & dining information:\n🍽️ Some tours include meals (check tour details)\n🍴 Local restaurant recommendations provided\n🥗 Dietary restrictions accommodated\n🍕 Food tours available in major cities\n\nLet us know about any dietary needs when booking!";
    }
    
    if (normalizedInput.includes('hotel') || normalizedInput.includes('accommodation') || normalizedInput.includes('stay') || normalizedInput.includes('room')) {
      return "Accommodation details:\n🏨 Hotel bookings available through our partners\n⭐ 3-5 star options depending on budget\n🛏️ Single/double/family rooms\n📍 Prime locations near attractions\n💰 Package deals with tours available\n\nContact us for accommodation assistance!";
    }
    
    if (normalizedInput.includes('age') || normalizedInput.includes('child') || normalizedInput.includes('kid') || normalizedInput.includes('family')) {
      return "Age and family information:\n👶 Children under 3: Free\n🧒 Children 3-12: 50% discount\n👨‍👩‍👧‍👦 Family packages available\n🚸 Child-friendly tours specially marked\n👵 Senior citizen discounts (65+)\n\nAll ages welcome on most tours!";
    }
    
    if (normalizedInput.includes('visa') || normalizedInput.includes('passport') || normalizedInput.includes('document') || normalizedInput.includes('requirement')) {
      return "Travel documents required:\n🛂 Valid passport (6+ months validity)\n📋 Visa requirements vary by destination\n💉 Vaccination certificates if required\n🆔 Government-issued photo ID\n📄 Travel insurance recommended\n\nWe can assist with visa information!";
    }
    
    if (normalizedInput.includes('guide') || normalizedInput.includes('language') || normalizedInput.includes('english') || normalizedInput.includes('hindi')) {
      return "Tour guide information:\n👨‍🏫 Professional certified guides\n🗣️ Multiple languages available\n🇮🇳 Hindi, English always available\n🌍 Local language guides in destinations\n📚 Expert knowledge of history & culture\n\nSpecial language requests can be arranged!";
    }
    
    if (normalizedInput.includes('safety') || normalizedInput.includes('secure') || normalizedInput.includes('safe') || normalizedInput.includes('emergency')) {
      return "Safety & security measures:\n🛡️ 24/7 emergency support\n🚑 First aid trained guides\n📱 Emergency contact numbers provided\n🏥 Medical assistance arrangements\n🔒 Secure transportation\n⚠️ Safety briefings before activities\n\nYour safety is our top priority!";
    }
    
    // Show quick questions again for unmatched queries
    setTimeout(() => {
      setShowQuickQuestions(true);
    }, 2000);
    
    return "I'd be happy to help! Here are some topics I can assist with:\n\n• Booking & reservations\n• Payments & refunds\n• Travel requirements\n• Tour information\n• Group bookings\n• Safety measures\n\nTry asking about any of these topics, or contact our support team at support@travelworld.com for detailed assistance!";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setShowQuickQuestions(false);

    // Simulate thinking delay
    setTimeout(() => {
      const response = findResponse(inputValue);
      const botResponse = {
        id: Date.now() + 1,
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      
      // Show quick questions again after bot response (for unmatched queries)
      setTimeout(() => {
        setShowQuickQuestions(true);
      }, 3000);
    }, 1000);

    setInputValue('');
  };

  const handleQuickQuestion = (question) => {
    const newMessage = {
      id: Date.now(),
      text: question,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setShowQuickQuestions(false);

    // Get response
    setTimeout(() => {
      const response = findResponse(question);
      const botResponse = {
        id: Date.now() + 1,
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      
      // Show quick questions again after each response
      setTimeout(() => {
        setShowQuickQuestions(true);
      }, 2000);
    }, 800);
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="chatbot-container">
      {/* Chat Button */}
      {!isOpen && (
        <div className="chatbot-button" onClick={() => setIsOpen(true)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
          </svg>
          <div className="chatbot-notification">!</div>
          <div className="chatbot-tooltip">Need help? Ask me anything!</div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <h3>Travel Assistant</h3>
                <p>Online now</p>
              </div>
            </div>
            <button className="chatbot-close" onClick={() => setIsOpen(false)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender}`}>
                <div className="message-content">
                  {message.sender === 'bot' && (
                    <div className="bot-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                  )}
                  <div className="message-text">
                    <p>{message.text}</p>
                    <div className="message-time">{formatTime(message.timestamp)}</div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Quick Questions */}
            {showQuickQuestions && (
              <div className="quick-questions">
                <div className="quick-questions-header">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  </svg>
                  <span>Quick questions:</span>
                </div>
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    className="quick-question-btn"
                    onClick={() => handleQuickQuestion(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="chatbot-input">
            <div className="input-container">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
              />
              <button
                className="send-button"
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TravelChatbot;