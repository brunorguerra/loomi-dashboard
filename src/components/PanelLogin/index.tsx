import { Container } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

type FormData = {
    email: string;
    password: string;
};

const schema = yup
    .object({
        email: yup.string().email().required(),
        password: yup.string().trim().required(),
    })
    .required();

export const PanelLogin = () => {
    const { authenticate, authenticateFailed, setIsAuthenticateFailed } =
        useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });
    const onSubmit: SubmitHandler<FormData> = (data) => authenticate(data);

    return (
        <Container>
            <div className="content">
                <div className="header">
                    <div className="image">
                        <img
                            src="./assets/logo.svg"
                            alt="Dois triângulos roxos, um na horizontal com opacidade menor e outro na vertical com opacidade maior"
                        />
                        <h2>Entrar na plataforma</h2>
                    </div>
                </div>

                <form method="POST" onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-group">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="text"
                            id="email"
                            placeholder="email@example.com"
                            {...register("email")}
                            onChange={() => setIsAuthenticateFailed(false)}
                        />
                        <div className="messageError">
                            {errors.email && <p>Preencha um email válido.</p>}
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="********"
                            {...register("password")}
                            onChange={() => setIsAuthenticateFailed(false)}
                        />
                        <div className="messageError">
                            {authenticateFailed && (
                                <p className="failedMessage">
                                    Falha ao entrar.
                                </p>
                            )}
                            {errors.password && <p>Preencha sua senha.</p>}
                        </div>
                    </div>
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </Container>
    );
};
