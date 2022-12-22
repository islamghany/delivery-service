import { Alert } from "@/components/Alert";
import Button from "@/components/Button";
import Container from "@/components/Container";
import { Input } from "@/components/Form";
import { Title } from "@/components/Typeo";
import { validateEmail, validatePassword } from "@/helpers/validation";
import { useForm } from "react-hook-form";

interface AuthenticateUser {
  password: string;
  email: string;
}
export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthenticateUser>();

  const onSubmit = handleSubmit(async (e) => {
    // const { data } = await exec(e);
    // if (data) {
    //   dispatch(setUser(data));
    // }
  });
  return (
    <Container className="">
      <Title as="h1" className="mt-10  flex  justify-center">
        Login
      </Title>

      <div className="flex justify-center py-12 sm:px-6 lg:px-8">
        {/* <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      {isError && error && (
        <Alert title="Error" type="error">
          {"nfbfh"}
        </Alert>
      )}
      </div> */}
        <form onSubmit={onSubmit} className="space-y-6 w-full max-w-md">
          <Input
            label="Email address"
            type="text"
            autoComplete="email"
            name="email"
            register={register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
            })}
            error={validateEmail(errors)}
          />
          <Input
            name="password"
            label="Password"
            type="password"
            register={register("password", {
              required: true,
              minLength: 8,
              maxLength: 72,
            })}
            required
            error={validatePassword(errors)}
          />

          <Button
            type="submit"
            loading={false}
            className="flex w-full justify-center"
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
