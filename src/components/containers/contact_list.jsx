import React, { useState } from 'react'
import { Contact } from '../../models/contact.class'
import ContactComponent from '../../pure/contact'
import PropTypes from 'prop-types'

function ContactListComponent(estado) {

  const [conected,setConected] = useState(estado)

  const defaultContact = new Contact('NameExample','SurnameExample','exam@exam.com',false)
  return (
    <div>
        <div>
            <h1>My Contacts</h1>
        </div>
        <h3>{conected===true ? 'Contact OnLine' : 'Contact OutLine'}</h3>
        <button onClick={() => setConected(!conected)}>{conected===true ? 'OnLine' : 'OutLine'}</button>
        <ContactComponent contact={defaultContact} ></ContactComponent>
    </div>
  )
}

ContactListComponent.propTypes = {
  estado: PropTypes.bool,
};

export default ContactListComponent
