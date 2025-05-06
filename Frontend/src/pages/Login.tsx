import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm space-y-6 text-center">
        {/* Nombre de la plataforma */}
        <h1 className="text-2xl font-bold">Nombre De La Plataforma</h1>

        {/* Formulario */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Ingresar te cuenta</h2>
          <p className="text-sm text-gray-500">Ingresa tus datos para continuar</p>
        </div>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="email@domain.com"
            className="w-full rounded border px-4 py-2"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full rounded border px-4 py-2"
          />

          <button
            type="submit"
            className="w-full rounded bg-black py-2 text-white hover:opacity-90 transition"
          >
            Continuar
          </button>
        </form>

        <p className="text-xs text-gray-400">
          Al hacer clic en continuar, acepta nuestros{' '}
          <span className="underline cursor-pointer">Términos de servicio</span> y{' '}
          <span className="underline cursor-pointer">Política de privacidad</span>.
        </p>

        <div className="relative mt-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs text-gray-400 bg-white px-2">
            <span>or continue with</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
