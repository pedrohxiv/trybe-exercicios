import { useEffect, useState } from 'react';
import { VscMail, VscMailRead } from 'react-icons/vsc';
import mailList from './mailList';

export default function App() {
  const [mails, setMails] = useState(mailList);

  useEffect(() => {
    if (mails.every((mail) => mail.status === 1)) {
      alert('Parabéns! Você leu todos seus emails!');
    }
  }, [mails]);

  const changeMailStatus = (id, status) => {
    const updatedMails = mails.map((mail) => {
      if (mail.id === id) {
        return { ...mail, status: status };
      }
      return mail;
    });

    setMails(updatedMails);
  };

  return (
    <>
      <div className="bg-green-400 flex justify-center p-12">
        <h1 className="text-3xl text-white font-medium">TrybeMail</h1>
      </div>

      <div className="flex justify-center flex-col sm:flex-row">
        <button
          className="bg-blue-800 shadow-xl text-sm rounded-xl items-center gap-4 text-white flex m-6 p-3"
          type="button"
          onClick={() => setMails(mails.map((mail) => ({ ...mail, status: 1 })))}
        >
          <VscMailRead className="w-6 h-6" />
          Marcar todas como lida
        </button>

        <button
          className="bg-blue-800 shadow-xl text-sm rounded-xl items-center gap-4 text-white flex m-6 p-3"
          type="button"
          onClick={() => setMails(mails.map((mail) => ({ ...mail, status: 0 })))}
        >
          <VscMail className="w-6 h-6" />
          Marcar todas como não lida
        </button>
      </div>

      <div className="border-2 m-6 shadow-2xl rounded-md">
        {mails.map((mail) => (
          <div
            key={mail.id}
            className="flex items-center m-4 gap-2 justify-between p-4"
          >
            <p className={mail.status === 0 ? 'font-black' : 'font-light'}>
              {mail.title}
            </p>
            <div className="flex gap-3">
              <button
                className="bg-blue-800 shadow-xl text-sm rounded-xl text-white flex p-3"
                type="button"
                onClick={() => changeMailStatus(mail.id, 1)}
              >
                <VscMailRead className="w-4 h-4" />
              </button>
              <button
                className="bg-blue-800 shadow-xl text-sm rounded-xl text-white flex p-3"
                type="button"
                onClick={() => changeMailStatus(mail.id, 0)}
              >
                <VscMail className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
