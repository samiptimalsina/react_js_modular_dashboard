
import React, { useState } from "react";
import InputField from "../../../shared/components/InputField";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const onSubmit = (e) => {

    }
    return (
        <div>
            <h1 className="text-2xl font-semibold mb-4">Login</h1>
            <form onSubmit={onSubmit}>
                <InputField
                    label="Email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputField
                    label="Password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="flex items-center justify-between">
                    <Button type="submit" disabled={loading}>
                        {loading ? "Signing in..." : "Sign in"}
                    </Button>
                    <a className="text-sm text-blue-600" href="/auth/register">
                        Register
                    </a>
                </div>
            </form>
        </div>
    );
}