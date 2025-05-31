import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useAuth } from "@/contexts/auth-context.jsx";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button.jsx"
function SignIn() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const { signInUser, error } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            username: "",
            password: "",
        },
    });
    const onSubmit = async (data) => {
        console.log(data.username)
        await signInUser(data);
    };


    return (
        <div className="flex items-center justify-center py-8">
            <div className="w-full px-4">
                <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto bg-white rounded-3xl shadow-lg border p-8">
                    <h1 className="text-center mb-8 text-3xl font-bold">Sign in</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Username
                            </label>
                            <Input
                                id="username"
                                type="text"
                                placeholder="username"
                                {...register("username", {
                                    required: "Username is required",
                                    minLength: {
                                        value: 3,
                                        message: "Username must be at least 3 characters",
                                    },
                                })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
                            />
                            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters",
                                        },
                                    })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                                    tabIndex={-1}
                                >
                                    {showPassword ? <EyeIcon size={20} /> : <EyeOffIcon size={20} />}
                                </button>
                            </div>
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                        </div>
                        
                        <Button
                            type="submit"
                            className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            SignIn
                        </Button>
                        {error && <p className="text-sm text-red-500">{error}</p>}
                        <div className="text-center mt-6">
                            <p className="text-black">
                                Don't have an account?{' '}
                                <button
                                    className="text-purple-600 font-medium hover:text-purple-700 hover:underline transition-colors duration-200"
                                    onClick={() => navigate("/system/sign-up")}
                                >
                                    SignUp
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default SignIn;