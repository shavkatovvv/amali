import React from "react";
import { Button, Container, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUsers } from "../../hooks/useRegisterUser";

export const Register = () => {
    const { mutate } = useRegisterUsers();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const Submit = (data) => {
        mutate(data, {
            onSuccess: (data) => {
                localStorage.setItem("userData", JSON.stringify(data));

                navigate("/");
            },
            onError: (err) => {
                console.log(err);
            },
        });
    };
    return (
        <section>
            <Container>
                <div>
                    <div>
                        <Typography
                            sx={{ mt: 2, textAlign: "center", color: "red" }}
                            variant="h4"
                        >
                            REGISTER
                        </Typography>
                        <Link
                            style={{
                                color: "red",
                                textDecoration: "none",
                                mt: 2,
                                ml: 2,
                                fontSize: "20px",
                            }}
                            to={"/login"}
                        >
                            Login
                        </Link>
                        <form onSubmit={handleSubmit(Submit)}>
                            <div>
                                <TextField
                                    sx={{ mt: 2 }}
                                    fullWidth
                                    type="email"
                                    {...register("email")}
                                    placeholder="email"
                                />
                            </div>
                            <div>
                                <TextField
                                    sx={{ mt: 2 }}
                                    fullWidth
                                    type="password"
                                    {...register("password")}
                                    placeholder="password"
                                />
                                <TextField
                                    sx={{ mt: 2 }}
                                    fullWidth
                                    type="text"
                                    {...register("name")}
                                    placeholder="name"
                                />
                            </div>
                            <Button
                                sx={{ mt: 2 }}
                                fullWidth
                                type="submit"
                                variant="contained"
                                color="success"
                            >
                                Login
                            </Button>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
};
