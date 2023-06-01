import React from 'react';
import { useForm } from 'react-hook-form';

function FeedbackForm() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onSubmit',
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container  p-5 mt-5 "
      noValidate
    >
      <h3>Leave a Review</h3>
      <span>
        Your email address will not be published Required fields are marked *
      </span>

      <div className="mb-3 form-floating">
        <textarea
          {...register('text', {
            required: 'Comment must not be empty. ',
          })}
          type="text"
          id="text"
          className="form-control border-2 h-25"
        />
        <label htmlFor="text" className="form-label">
          {' '}
          Comment *
        </label>
      </div>

      <div className="mb-3 row">
        <div className="form-floating col ">
          <input
            {...register('name', {
              required: 'Name must not be empty. ',
              minLength: {
                value: 2,
                message: 'Nem must be at least 2 symbols. ',
              },
            })}
            id="name"
            type="text"
            className="form-control  border-2 ps-3"
            placeholder="Your name"
          />
          <label htmlFor="name" className="form-label ps-4">
            Name *
          </label>
        </div>
        <div className="form-floating col mb-3">
          <input
            {...register('email', {
              required: 'You must enter correct email. ',
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Invalid email address',
              },
            })}
            type="email"
            id="email"
            placeholder="email"
            className="form-control  border-2"
          />
          <label htmlFor="email" className="form-label ps-4">
            Email *
          </label>
        </div>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Phone (optional)"
          />
          <label htmlFor="phone" className="form-label ps-4">
            Phone (optional)
          </label>
        </div>
      </div>
      <div className="flex-column align-content-center justify-content-center">
        <div className="text-warning ">
          {errors?.text && (
            <span>{errors?.text?.message || 'Something went wrong!'}</span>
          )}
          {errors?.name && (
            <span>{errors?.name?.message || 'Something went wrong! '}</span>
          )}
          {errors?.email && (
            <span>{errors?.email?.message || 'Something went wrong! '}</span>
          )}
        </div>

        <div className="form-check mb-3">
          <input type="checkbox" className="form-check-input " id="checkbox" />

          <label htmlFor="checkbox" className="ps-3 form-check-label">
            Save my name, email, and website in this browser for the next time I
            comment
          </label>
        </div>

        <input
          type="submit"
          className="btn btn-primary col-xl-4  col-md-6 col-12 btn-lg  py-sm-3 px-sm-5  rounded-pill f"
          value="POST REVIEW"
        />
      </div>
    </form>
  );
}

export default FeedbackForm;
