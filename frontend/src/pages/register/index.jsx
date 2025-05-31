import { SquareArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            name: "",
            surname: "",
            username: "",
            password: "",
            passwordAgain: "",
        },
    });
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordAgain, setShowPasswordAgain] = useState(false);
    const password = watch("password");
    const submitForm = async (data) => {
        
        const newData = {
            name: data.name,
            surname: data.surname,
            username: data.username,
            password: data.password,
        };
        console.log(newData);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8">
            <div className="w-full px-4">
            <div>
                {/* Signup Form */}
                <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto bg-white rounded-3xl shadow-lg border p-8">
                    <h1 className="text-3xl font-bold text-center mb-8">Signup</h1>

                    <form onSubmit={handleSubmit(submitForm)}>
                        <div className="space-y-6">
                            {/* Name and Surname */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Name"
                                        {...register("name", { required: "Name is required" })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                    <p className="text-sm text-red-500 mt-2">{errors.name?.message}</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Surname</label>
                                    <input
                                        id="surname"
                                        type="text"
                                        placeholder="Surname"
                                        {...register("surname", { required: "Surname is required" })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                    <p className="text-sm text-red-500 mt-2">{errors.surname?.message}</p>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                                <input
                                    id="username"
                                    type="text"
                                    placeholder="Username"
                                    {...register("username", { required: "Username is required" })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                />
                                <p className="text-sm text-red-500 mt-2">{errors.username?.message}</p>
                            </div>

                            <div className="grid gap-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: {
                                                value: 8,
                                                message: "Password must be at least 8 characters",
                                            },
                                        })}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
                                        tabIndex={-1}
                                    >
                                        {showPassword ? <EyeIcon size={20} /> : <EyeOffIcon size={20} />}
                                    </button>
                                </div>
                                <p className="text-sm text-red-500">{errors.password?.message}</p>
                            </div>

                            <div className="grid gap-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm password</label>
                                <div className="relative">
                                    <input
                                        id="passwordAgain"
                                        type={showPasswordAgain ? "text" : "password"}
                                        placeholder="Confirm password"
                                        className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent "
                                        {...register("passwordAgain", {
                                            required: "Please confirm your password",
                                            validate: (value) =>
                                                        value === password || "Passwords do not match",
                                        })}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPasswordAgain((prev) => !prev)}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
                                        tabIndex={-1}
                                    >
                                        {showPasswordAgain ? <EyeIcon size={20} /> : <EyeOffIcon size={20} />}
                                    </button>
                                </div>
                                <p className="text-sm text-red-500">{errors.passwordAgain?.message}</p>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-purple-600 text-white py-3 rounded-xl font-medium hover:bg-purple-700 transition-colors mt-8"
                            >
                                Signup
                            </button>
                            <div className="text-center mt-6">
                                <span className="text-gray-600">Already have an account? </span>
                                <Link to="/login" className="text-purple-600 font-medium hover:text-purple-700">
                                    Signin
                                </Link>
                            </div>
                        </div>
                    </form>
                    <SquareArrowLeft
                        className="size-6 cursor-pointer mt-4"
                        onClick={() => navigate("/")}
                    />
                </div>
            </div>
            </div>
        </div>
    );
}

export default Register;