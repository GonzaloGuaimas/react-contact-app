import React from 'react'
import { Contact } from '../../models/contact.class'
import ContactComponent from '../../pure/contact'

function ContactListComponent() {

  const defaultContact = new Contact('NameExample','SurnameExample','exam@exam.com',false)
  return (
    <div>
        <div>
            <h1>My Contacts</h1>
        </div>
        <ContactComponent contact={defaultContact} ></ContactComponent>
    </div>
  )
}

export default ContactListComponent
