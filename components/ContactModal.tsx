
import React, { useState } from 'react';
import { Language, LocalizedString } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: Language;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, currentLanguage }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const labels: Record<string, LocalizedString> = {
    title: { [Language.KO]: "연락하기", [Language.EN]: "Contact Me" },
    name: { [Language.KO]: "이름", [Language.EN]: "Name" },
    email: { [Language.KO]: "이메일", [Language.EN]: "Email" },
    message: { [Language.KO]: "메시지", [Language.EN]: "Message" },
    send: { [Language.KO]: "보내기", [Language.EN]: "Send" },
    close: { [Language.KO]: "닫기", [Language.EN]: "Close" },
    submitting: { [Language.KO]: "전송 중...", [Language.EN]: "Submitting..." },
    submitted: { [Language.KO]: "메시지가 성공적으로 전송되었습니다!", [Language.EN]: "Message sent successfully!" },
    error: { [Language.KO]: "전송에 실패했습니다. 나중에 다시 시도해주세요.", [Language.EN]: "Failed to send message. Please try again later." },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true); // Simulate submission
    // In a real app, you would handle form submission here (e.g., send an email or API request)
    console.log({ name, email, message });
    // Reset form after a delay or keep modal open with success message
    setTimeout(() => {
        // onClose(); // Optionally close after submission
        // setIsSubmitted(false);
        // setName(''); setEmail(''); setMessage('');
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-[100]">
      <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 w-full max-w-lg transform transition-all">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-slate-700">{labels.title[currentLanguage]}</h2>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-700 transition-colors"
            aria-label={labels.close[currentLanguage]}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {isSubmitted ? (
          <div className="text-center py-8">
            <p className="text-xl text-green-600">{labels.submitted[currentLanguage]}</p>
            <button
              onClick={() => { onClose(); setIsSubmitted(false); setName(''); setEmail(''); setMessage(''); }}
              className="mt-6 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
            >
              {labels.close[currentLanguage]}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-slate-600 mb-1">
                {labels.name[currentLanguage]}
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 transition-shadow"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-slate-600 mb-1">
                {labels.email[currentLanguage]}
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 transition-shadow"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-slate-600 mb-1">
                {labels.message[currentLanguage]}
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 transition-shadow"
              />
            </div>
            <div className="flex justify-end space-x-3">
               <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                {labels.close[currentLanguage]}
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
              >
                {labels.send[currentLanguage]}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
