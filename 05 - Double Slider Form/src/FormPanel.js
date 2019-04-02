import React from 'react';
import './css/FormPanel.css';

// stateless component depicting the panel with input elements
const FormPanel = ({ signIn }) => {
  // heading
  const heading = signIn ? 'Sign in' : 'Create account';

  // array for authentications platforms (dead links as a proof of concept)
  const social = [
    {
      href: '#',
      icon: 'f'
    },
    {
      href: '#',
      icon: 't'
    },
    {
      href: '#',
      icon: 'in'
    }
  ];
  // paragraph shared by both versions of the panel
  const paragraph = 'Or use your email account';

  // array of input elements, specifying the type and placeholder
  const inputs = [
    {
      type: 'text',
      placeholder: 'Email'
    },
    {
      type: 'password',
      placeholder: 'Password'
    }
  ];
  // if the signIn boolean directs toward the sign up form, include an additional input in the inputs array, for the name
  if (!signIn) {
    inputs.unshift({
      type: 'text',
      placeholder: 'Name'
    });
  }

  // link also shared by both versions of the panel
  const link = {
    href: '#',
    text: 'Forgot your password?'
  }

  // button to hypothetically sign in/up
  const button = signIn ? 'Sign in' : 'Sign up';

  // render the specified content in the matching elements
  return (
    <div className="Panel FormPanel">
      <h2>{heading}</h2>
      <div className="Social">
        {
          social.map(({ href, icon }) => <a href={href} key={icon}>{icon}</a>)
        }
      </div>
      <p>{paragraph}</p>
      <form>
        {
          inputs.map(({ type, placeholder }) => <input type={type} key={placeholder} placeholder={placeholder} />)
        }
      </form>
      <a href={link.href}>{link.text}</a>
      <button>{button}</button>
    </div>
  );
};

export default FormPanel;