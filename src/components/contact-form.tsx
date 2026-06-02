"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus("idle");

        const formElement = e.currentTarget;

        // Replace this with your Web3Forms Access Key
        const accessKey = "2d3c8a89-f9b4-4a4c-9b78-868ecbf2d2a9";

        const payload = {
            access_key: accessKey,
            subject: "New Contact Form Submission from Portfolio",
            name: (formElement.elements.namedItem('name') as HTMLInputElement).value,
            email: (formElement.elements.namedItem('email') as HTMLInputElement).value,
            message: (formElement.elements.namedItem('message') as HTMLTextAreaElement).value,
        };

        try {
            const endpoint = "https://api.web3forms" + ".com/submit";
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                formElement.reset();
            } else {
                console.error("Submission Error:", data);
                setStatus("error");
            }
        } catch (error) {
            console.error("Request Error:", error);
            setStatus("error");
        } finally {
            setIsSubmitting(false);

            if (status !== "error") {
                setTimeout(() => setStatus("idle"), 5000);
            }
        }
    }

    return (
        <div className="w-full">
        {status === "success" && (
            <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-start gap-3 text-green-600 dark:text-green-400">
                <CheckCircle2 className="size-5 mt-0.5 shrink-0" />
                <div className="text-sm">
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="opacity-90">I'll get back to you as soon as possible.</p>
                </div>
            </div>
        )}
        {status === "error" && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-3 text-red-600 dark:text-red-400">
                <AlertCircle className="size-5 mt-0.5 shrink-0" />
                <div className="text-sm">
                    <p className="font-semibold">Something went wrong.</p>
                    <p className="opacity-90">Please try again later or contact me via Twitter.</p>
                </div>
            </div>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
            <div className="grid gap-2">
                <Input
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    required
                    disabled={isSubmitting}
                    className="bg-transparent border-border/50 h-12 rounded-xl"
                />
            </div>

            <div className="grid gap-2">
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    required
                    disabled={isSubmitting}
                    className="bg-transparent border-border/50 h-12 rounded-xl"
                />
            </div>

            <div className="grid gap-2">
                <Textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    required
                    disabled={isSubmitting}
                    className="bg-transparent border-border/50 rounded-xl resize-none"
                />
            </div>

            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 rounded-xl mt-2 bg-transparent text-foreground border border-border/50 hover:bg-muted/50 transition-colors shadow-none font-medium"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        Send Message
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                )}
            </Button>
        </form>
    </div>
    );
}
