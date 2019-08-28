/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

import './MainForm.scss';

const MainForm = ({
  errors,
  touched,
  props,
}) => {
  console.log('in form', props);

  // const [tab, setTab] = useState(props.tab);
  // useEffect(() => {
  //   setTab(props.);
  // }, [props.]);

  // const addTab = (event) => {
  //   event.preventDefault();
  // };
  return (
    <div className="Main-Form">
      <Form>
        <Field
          type="text"
          name="name"
          placeholder="Name"
          validateOnChange={false}
          validateOnBlur
        />
        {touched.name && errors.name && (
        <p className="error">{errors.name}</p>
        )}
        <Field
          type="text"
          name="url"
          placeholder="URL"
          validateOnChange={false}
          validateOnBlur
        />
        {touched.url && errors.url && (
        <p className="error">{errors.url}</p>
        )}
        <Field
          type="text"
          name="description"
          placeholder="Description"
          validateOnChange={false}
          validateOnBlur
        />
        {touched.description && errors.description && (
        <p className="error">{errors.description}</p>
        )}
        <Field
          type="text"
          name="category"
          placeholder="category"
          validateOnChange={false}
          validateOnBlur
        />
        {touched.category && errors.category && (
        <p className="error">{errors.category}</p>
        )}
        <Field
          component="select"
          type="text"
          name="option"
          placeholder="None"
          validateOnChange={false}
          validateOnBlur
        >
          <option value="public">Public</option>
          <option value="private">Private</option>
        </Field>
        {touched.option && errors.option && (
        <p className="error">{errors.option}</p>
        )}
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};
const FormikMainForm = withFormik({
  mapPropsToValues({
    name, url, description, option, category, edit, match,
  }) {
    return {
      name: name || '',
      url: url || '',
      description: description || '',
      option: option || 'Public',
      category: category || '',
      match,
      tabId: match && match.tabId,
      edit: edit || false,
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    url: Yup.string().required(),
    description: Yup.string().required(),
    option: Yup.string().required(),
    category: Yup.string(),
  }),

  handleSubmit(values, { setStatus, event, resetForm }) {
    event.preventDefault();
    const restCallType = values.edit === true ? 'put' : 'post';
    const { tabId } = values;
    axios[restCallType]('', values)
      // put endpoint of server when ready above
      .then((res) => {
        console.log('in login form', res.data);
        setStatus(res.data);
      })
      .catch((err) => console.log(err.response));
  }
  ,

})(MainForm);

export default FormikMainForm;
