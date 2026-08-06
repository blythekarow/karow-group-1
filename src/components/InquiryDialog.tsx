import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/26739173/46f615q/";

interface InquiryDialogProps {
  trigger: React.ReactNode;
  formType: string;
  title: string;
  description?: string;
  messageLabel?: string;
  messagePlaceholder?: string;
}

const InquiryDialog = ({
  trigger,
  formType,
  title,
  description,
  messageLabel = "Message",
  messagePlaceholder = "A few details...",
}: InquiryDialogProps) => {
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", organization: "", message: "" });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const reset = () => {
    setSent(false);
    setForm({ name: "", email: "", organization: "", message: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.includes("@")) {
      toast.error("Please add your name and a valid email.");
      return;
    }
    setSending(true);
    try {
      const data = new URLSearchParams({ formType, name: form.name, email: form.email, organization: form.organization, details: form.message });
      await fetch(WEBHOOK_URL + "?" + data.toString(), { method: "GET", mode: "no-cors" });
      setSent(true);
    } catch {
      toast.error("Something went wrong. Please email blythe.karow@thekarowgroup.com directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (!o) reset();
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {!sent ? (
          <>
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              {description && <DialogDescription>{description}</DialogDescription>}
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div className="space-y-1.5">
                <Label htmlFor="iq-name">Name</Label>
                <Input id="iq-name" value={form.name} onChange={(e) => update("name", e.target.value)} required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="iq-email">Email</Label>
                <Input id="iq-email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="iq-org">
                  Organization <span className="text-muted-foreground font-normal">(optional)</span>
                </Label>
                <Input id="iq-org" value={form.organization} onChange={(e) => update("organization", e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="iq-msg">{messageLabel}</Label>
                <Textarea id="iq-msg" rows={4} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder={messagePlaceholder} />
              </div>
              <Button
                type="submit"
                disabled={sending}
                className="w-full bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground"
              >
                {sending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send"
                )}
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <DialogTitle className="mb-2">Thank you</DialogTitle>
            <DialogDescription>Your message is on its way to Blythe. You'll hear back soon.</DialogDescription>
            <Button className="mt-6" variant="outline" onClick={() => setOpen(false)}>
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default InquiryDialog;
