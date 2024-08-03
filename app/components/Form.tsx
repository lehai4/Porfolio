"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import Textarea from "@mui/joy/Textarea";
import { Input } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    subject: yup.string().required(),
    message: yup.string().required(),
  })
  .required();

const FormContact = () => {
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = async (data, e) => {
    e?.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        toast.error("Send Email Failed");
      }
      const res = await response.json();
      toast.success(res.message);
      reset();
    } catch (err) {
      console.error(err);
    }
    e?.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full grid grid-cols-1 gap-6 max-w-[45rem] mx-auto my-[1rem] text-center mb-[3rem]"
    >
      <div className="flex items-center justify-between gap-4">
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              onChange={onChange}
              autoComplete="true"
              color="primary"
              fullWidth
              disableUnderline
              sx={{
                border: "0.5px solid #323946",
                borderRadius: "6px",
                padding: "12px",
                color: "#ffffffe2",
                fontSize: "12px",
                background: "#323946",
              }}
              placeholder="Full name"
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              onChange={onChange}
              type="email"
              autoComplete="true"
              color="primary"
              fullWidth
              disableUnderline
              sx={{
                border: "0.5px solid #323946",
                borderRadius: "6px",
                padding: "12px",
                color: "#ffffffe2",
                fontSize: "12px",
                background: "#323946",
              }}
              placeholder="Email"
            />
          )}
        />
      </div>
      <div className="flex items-center justify-between gap-4">
        <Controller
          name="phone"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              value={value}
              onChange={onChange}
              autoComplete="true"
              color="primary"
              fullWidth
              disableUnderline
              sx={{
                border: "0.5px solid #323946",
                borderRadius: "6px",
                padding: "12px",
                color: "#ffffffe2",
                fontSize: "12px",
                background: "#323946",
              }}
              placeholder="Phone"
            />
          )}
        />
        <Controller
          name="subject"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              value={value}
              onChange={onChange}
              autoComplete="true"
              color="primary"
              fullWidth
              disableUnderline
              sx={{
                border: "0.5px solid #323946",
                borderRadius: "6px",
                padding: "12px",
                color: "#ffffffe2",
                fontSize: "12px",
                background: "#323946",
              }}
              placeholder="Subject"
            />
          )}
        />
      </div>
      <Controller
        name="message"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Textarea
            value={value}
            onChange={onChange}
            size="md"
            minRows={12}
            color="primary"
            sx={{
              mb: 4,
              border: "0.5px solid #323946",
              borderRadius: "6px",
              padding: "12px",
              color: "#ffffffe2",
              fontSize: "12px",
              background: "#323946",
            }}
            placeholder="Message"
          />
        )}
      />
      <button
        type="submit"
        className="my-[15px] py-[14px] px-[45px] cursor-pointer inline-block tracking-[1px] relative transition-all duration-300 bg-primary-color text-black rounded-[50px] text-[20px] font-[600] hover:shadow-none shadow-primary"
      >
        Send message
      </button>
    </form>
  );
};

export default FormContact;
