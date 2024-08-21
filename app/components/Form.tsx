"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import Textarea from "@mui/joy/Textarea";
import { Input } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("Please enter name!"),
    email: yup
      .string()
      .email("No match type of email!")
      .required("Please enter email!"),
    phone: yup.string().required("Please enter phone!"),
    subject: yup.string().required("Please enter subject!"),
    message: yup.string().required("Please enter message!"),
  })
  .required();

const FormContact = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
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
        <div className="flex flex-col mb-[15px] w-full">
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
          {errors.name && (
            <p className="text-red-500 text-left text-[9px] sm:text-[10px] md:text-[12px] lg:text-[13px]">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="flex flex-col mb-[15px] w-full">
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
          {errors.email && (
            <p className="text-red-500 text-left text-[9px] sm:text-[10px] md:text-[12px] lg:text-[13px]">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col mb-[15px] w-full">
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
          {errors.phone && (
            <p className="text-red-500 text-left text-[9px] sm:text-[10px] md:text-[12px] lg:text-[13px]">
              {errors.phone.message}
            </p>
          )}
        </div>
        <div className="flex flex-col mb-[15px] w-full">
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
          {errors.subject && (
            <p className="text-red-500 text-left text-[9px] sm:text-[10px] md:text-[12px] lg:text-[13px]">
              {errors.subject.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col mb-[15px] w-full">
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
                marginBottom: "0px",
              }}
              placeholder="Message"
            />
          )}
        />
        {errors.message && (
          <p className="text-red-500 text-left text-[9px] sm:text-[10px] md:text-[12px] lg:text-[13px]">
            {errors.message.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="my-[15px] py-[14px] mb-[70px] cursor-pointer inline-block tracking-[1px] relative transition-all duration-300 bg-primary-color text-black rounded-[50px]  text-[14px] md:text-[16px] lg:text-[20px] font-[600] hover:shadow-none shadow-primary"
      >
        Send message
      </button>
    </form>
  );
};

export default FormContact;
