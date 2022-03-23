import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { css } from "@emotion/react";

type Inputs = {
  name: string;
  email: string;
};

const hoge = css`
  margin: 100px auto 0;
`;

const StForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="name " />
      <input
        placeholder="mail address"
        {...register("email", {
          required: true,
          maxLength: 14,
          pattern: {
            value:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: "メールアドレスの形式が不正です",
          },
        })}
      />
      <ErrorMessage errors={errors} name="email" />
      <button type="submit" onClick={(e) => onSubmit(data)}>
        Submit
      </button>
    </form>
  );
};

export default StForm;
