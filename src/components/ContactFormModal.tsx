// File: components/ContactFormModal.tsx

import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function ContactFormModal() {
    const [open, setOpen] = useState(false);

    return (
        <Dialog>
            <DialogTrigger>
                <Button onClick={() => setOpen(true)}>Contact Us</Button>
            </DialogTrigger>

            {open && (
                <DialogContent className="bg-white">
                    <DialogHeader>
                        <DialogTitle>Contact Us</DialogTitle>
                    </DialogHeader>

                    <form className="space-y-4">
                        <div>
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" name="name" type="text" required />
                        </div>

                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" required />
                        </div>

                        <div>
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" name="message" required />
                        </div>

                        <Button type="submit" className="w-full">
                            Submit
                        </Button>
                    </form>
                </DialogContent>
            )}
        </Dialog>
    );
}
