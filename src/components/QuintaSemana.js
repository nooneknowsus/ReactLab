import React from 'react';
import FormQuiz from './FormQuiz';
import FormTicket from './FormTicket';
import Accordion from './Accordion';
import Chat from './Chat';
import ContactList from './ContactList';
import Messenger from './Messenger';

function QuartaSemana() {
    return (
        <div>
            <br />
            <br />
            <FormQuiz />
            <FormTicket />
            <Accordion />
            <Messenger />
        </div>
    );
}

export default QuartaSemana;