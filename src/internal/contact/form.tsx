import React from 'react';
import styled from '@emotion/styled';

const Form: React.FCX = ({ className }) => (
  <form
    className={className}
    name='contact'
    method='POST'
    data-netlify='true'
    data-netlify-honeypot='bot-field'
  >
    <input type='hidden' name='form-name' value='contact' />
    <input type='hidden' name='bot-field' />

    <div>
      <label>
        name<abbr title='required'>*</abbr>
        <input
          type='text'
          className='form-control'
          name='name'
          placeholder='your name'
          maxLength={30}
          minLength={2}
          required
          autoComplete='name'
        />
      </label>
    </div>

    <div>
      <label>
        mail<abbr title='required'>*</abbr>
        <input
          type='email'
          name='email'
          placeholder='your e-mail'
          pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
          required
          autoComplete='email'
        />
      </label>
    </div>
    <div>
      <label>
        <p>message</p>
        <abbr title='required'></abbr>
        <textarea name='content' rows={8} required />
      </label>
    </div>
    <div>
      <button type='submit'>submit</button>
    </div>
  </form>
);

export const StyledForm = styled(Form)`
  position: relative;

  abbr {
    text-decoration: none;
  }

  input[type='text'],
  input[type='email'] {
    width: 100%;
    padding: 0.3em;
    color: #aaaaaa;
    border: none;
    border-bottom: 2px solid #59595f;
    transition: 0.5s;
    :focus {
      border-bottom: 2px solid #a9a9af;
      outline: none;
    }
  }

  textarea {
    color: #fff;
    border: 2px solid #59595f;
    transition: 0.5s;
    :focus {
      border: 2px solid #a9a9af;
      outline: none;
    }
  }
`;

export default StyledForm;
