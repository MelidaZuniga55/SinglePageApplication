import { useForm } from "react-hook-form";

const Login = ({ setUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setUser({
      name: data.name,
      email: data.email,
    });
  };

  return (
    <div className="login-container">
      <div className="login-background">
        <div className="login-overlay"></div>
      </div>

      <div className="login-content">
        <div className="login-card">
          <div className="login-header">
            <div className="login-logo">🎵</div>
            <h2>Bienvenido a Kodigo Music</h2>
            <p>Ingresa para disfrutar de tu música</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <div className="form-section">
              {/* Nombre */}
              <div className="input-group">
                <label htmlFor="name">Nombre completo</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  {...register("name", {
                    required: "El nombre es requerido",
                    minLength: {
                      value: 2,
                      message: "Mínimo 2 caracteres",
                    },
                  })}
                  className={errors.name ? "error" : ""}
                />
                {errors.name && (
                  <span className="error-message">{errors.name.message}</span>
                )}
              </div>

              {/* Email */}
              <div className="input-group">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  {...register("email", {
                    required: "El email es requerido",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "El email no es válido",
                    },
                  })}
                  className={errors.email ? "error" : ""}
                />
                {errors.email && (
                  <span className="error-message">{errors.email.message}</span>
                )}
              </div>

              {/* Contraseña */}
              <div className="input-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  {...register("password", {
                    required: "La contraseña es requerida",
                    minLength: {
                      value: 6,
                      message: "Mínimo 6 caracteres",
                    },
                  })}
                  className={errors.password ? "error" : ""}
                />
                {errors.password && (
                  <span className="error-message">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="login-btn">
                <span>🎵 Iniciar Sesión</span>
              </button>
            </div>
          </form>

          <div className="login-footer">
            <div className="demo-info">
              <div className="info-icon">💡</div>
              <div className="info-content">
                <p>Para probar la aplicación:</p>
                <ul>
                  <li>Nombre: Mínimo 2 caracteres</li>
                  <li>Email: formato válido</li>
                  <li>Contraseña: 6+ caracteres</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
