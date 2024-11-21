import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useLoginUsers } from "../../hooks/useLoginUser";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const { register, handleSubmit } = useForm();
    const { mutate } = useLoginUsers();
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
                <Box width={"100%"} ml={"auto"} mr={"auto"}>
                    <Box width={"100%"} ml={"auto"} mr={"auto"}>
                        <Typography
                            sx={{ mt: 2, textAlign: "center", color: "red" }}
                            variant="h4"
                        >
                            LOGIN
                        </Typography>
                        <Link
                            style={{
                                color: "red",
                                textDecoration: "none",
                                mt: 2,
                                ml: 2,
                                fontSize: "20px",
                            }}
                            to={"/register"}
                        >
                            Register
                        </Link>
                        <form onSubmit={handleSubmit(Submit)}>
                            <div>
                                <TextField
                                    sx={{ mt: 2, width: "600px" }}
                                    type="email"
                                    {...register("email")}
                                    placeholder="email"
                                />
                            </div>
                            <div>
                                <TextField
                                    sx={{ mt: 2, width: "600px" }}
                                    fullWidth
                                    type="password"
                                    {...register("password")}
                                    placeholder="password"
                                />
                            </div>
                            <Button
                                sx={{ mt: 2, width: "600px" }}
                                type="submit"
                                variant="contained"
                                color="success"
                            >
                                Войти
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Container>
        </section>
    );
};
