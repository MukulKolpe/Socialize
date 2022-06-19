import React, { useState, useEffect } from "react";
import { Field, Formik, Form } from "formik";
import axios from "axios";
import { Button, ButtonGroup } from "@material-ui/core";
import DatePicker from "react-datepicker";
import "./MultiStepForm.css";

import "react-datepicker/dist/react-datepicker.css";

const MultiStepForm = () => {
  const [stepNumber, setStepNumber] = useState(0);
  const [formOne, setFormOne] = useState({});
  const [formTwo, setFormTwo] = useState({});
  const [formThree, setFormThree] = useState({});

  const [submit, setSubmit] = useState(false);
  const nextStep = () => {
    if (stepNumber === 2) {
      setSubmit(true);
    }
    window.scrollTo(0, 0);
  };

  const laststep = () => {
    window.scrollTo(0, 0);
    setStepNumber(stepNumber - 1);
  };
  //"http://localhost:5000/api/addEvent"
  useEffect(() => {
    if (submit) {
      axios.post(console.log(formOne, formTwo, formThree), {
        formOne,
        formTwo,
        formThree,
      });
    }
  }, [formOne, formThree, formTwo, submit]);
  const RangeDisplay = () => {
    return (
      <ul className="timeline" id="timeline">
        <li
          className={
            stepNumber === 0
              ? "li active"
              : stepNumber > 0
              ? "li complete"
              : "li"
          }
        >
          <div className="status"></div>
        </li>
        <li
          className={
            stepNumber === 1
              ? "li active"
              : stepNumber > 1
              ? "li complete"
              : "li"
          }
        >
          <div className="status"></div>
        </li>
        <li
          className={
            stepNumber === 2
              ? "li active"
              : stepNumber > 2
              ? "li complete"
              : "li"
          }
        >
          <div className="status"></div>
        </li>
      </ul>
    );
  };
  const FormStart = () => {
    return (
      <div className="form-start">
        <h2>Organize an Event</h2>
        <p>Create an event and invite your friends to join you.</p>
        <Formik
          initialValues={{
            title: formOne.title ? formOne.title : "",
            description: formOne.description ? formOne.description : "",
            createdBy: formOne.createdBy ? formOne.createdBy : "",
          }}
          onSubmit={(values) => {
            setFormOne(values);
            setStepNumber(1);
            nextStep();
          }}
        >
          <Form className="form" method="post">
            <div className="form1-div">
              <div>
                <label htmlFor="title" className="form-name">
                  Event Name <span className="required-sign">*</span>
                </label>
                <Field
                  type="text"
                  className="text-field"
                  id="title"
                  name="title"
                  maxLength="32"
                  required
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Please fill-in this field")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                />
              </div>
              <div>
                <label htmlFor="description" className="form-name">
                  Event Description
                </label>
                <Field
                  type="text"
                  className="text-field"
                  id="description"
                  name="description"
                  maxLength="80"
                />
              </div>
              <div>
                <label htmlFor="createdBy" className="form-name">
                  Organizer <span className="required-sign">*</span>
                </label>
                <Field
                  type="text"
                  className="text-field"
                  id="createdBy"
                  name="createdBy"
                  maxLength="32"
                  required
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Please fill-in this field")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                />
              </div>
            </div>
            <Button type="submit" className="btn" title="Next Step">
              Next Step
            </Button>
          </Form>
        </Formik>
      </div>
    );
  };
  const FormSecond = () => {
    const [date, setDate] = useState(new Date());
    return (
      <div className="form-second">
        <h2>Set Date and Time of the event</h2>
        <Formik
          initialValues={{
            date: formTwo.selected ? formTwo.selected : null,
          }}
          onSubmit={(values) => {
            setFormTwo(values);
            setStepNumber(2);
            nextStep();
          }}
        ></Formik>
        <div>
          <DatePicker
            className="date-picker"
            id="date"
            name="date"
            selected={date}
            onChange={(date) => setDate(date)}
            showTimeSelect
            showTimeInput
            timeFormat="HH:mm"
            dateFormat="MMMM d, yyyy h:mm aa"
            placeholderText="Select Date and Time"
            value={setDate}
          />
        </div>
        <div className="btn-wrapper">
          <button onClick={laststep} className="btn-prev">
            <span className="back">&larr;</span> Previous Step
          </button>
          <Button
            onClick={() => setStepNumber(2)}
            secondary
            type="submit"
            className="btn-next"
            title="Next Step"
          >
            Next Step
          </Button>
        </div>
      </div>
    );
  };

  const FormThird = () => {
    return (
      <div className="form-third">
        <h2>More details about the event</h2>
        <Formik
          initialValues={{
            mode: formThree.mode ? formThree.mode : "",
            location: formThree.location ? formThree.location : "",
            theme: formThree.theme ? formThree.theme : "",
          }}
          onSubmit={(values) => {
            setFormThree(values);
            setStepNumber(3);
            nextStep();
          }}
        >
          <Form className="form" method="post">
            <label htmlFor="mode" className="form-name-3">
              Mode of Conduction
            </label>
            <div role="group" aria-labelledby="my-radio-group">
              <label className="form3label">
                <Field type="radio" name="mode" value="Online" required />
                Online
              </label>
              <br></br>
              <label className="form3label">
                <Field type="radio" name="mode" value="In-Person" required />
                In-Person
              </label>
            </div>
            <label htmlFor="mode" className="form-name-3">
              Theme of the event
            </label>
            <div role="group" aria-labelledby="my-radio-group">
              <label className="form3label">
                <Field type="radio" name="theme" value="Sports" required />
                Sports
              </label>
              <br></br>
              <label className="form3label">
                <Field type="radio" name="theme" value="Tech" required />
                Tech
              </label>
              <br></br>
              <label className="form3label">
                <Field type="radio" name="theme" value="Art" required />
                Art
              </label>
              <br></br>
              <label className="form3label">
                <Field type="radio" name="theme" value="Music" required />
                Music
              </label>
              <br></br>
              <label className="form3label">
                <Field type="radio" name="theme" value="Food" required />
                Food
              </label>
              <br></br>
              <label className="form3label">
                <Field type="radio" name="theme" value="Literature" required />
                Literature
              </label>
              <br></br>
              <label className="form3label">
                <Field type="radio" name="theme" value="Others" required />
                Others
              </label>
            </div>
            <div className="btn-wrapper">
              <button onClick={laststep} className="btn-prev">
                <span className="back">&larr;</span> Previous Step
              </button>
              <Button
                primary
                type="submit"
                className="btn-next"
                title="Next Step"
              >
                Submit
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    );
  };
  const FinalForm = () => {
    return (
      <div className="form-final">
        <h2>Thank you for your submission!</h2>
      </div>
    );
  };
  return (
    <div>
      <RangeDisplay />
      {stepNumber === 0 && <FormStart />}
      {stepNumber === 1 && <FormSecond />}
      {stepNumber === 2 && <FormThird />}
      {stepNumber === 3 && <FinalForm />}
    </div>
  );
};

export default MultiStepForm;
