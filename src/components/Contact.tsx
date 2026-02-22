"use client";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import moment from "moment";
import { db } from "../firebaseConfig";
import { toast } from "@/hooks/use-toast";
const Contact = () => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    subject: string;
    message: string;
  }>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields before submitting.",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // Check if user submitted in last 24 hours
      const q = query(collection(db, "contacts"), where("email", "==", email));
      const snapshot = await getDocs(q);

      const now = moment();
      const recentSubmission = snapshot.docs.find((doc) => {
        const submittedAt = doc.data().createdAt?.toDate?.();
        return submittedAt && now.diff(moment(submittedAt), "hours") < 24;
      });

      if (recentSubmission) {
        toast({
          title: "Submission Blocked",
          description: "You can only submit once every 24 hours.",
        });
        return;
      }

      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        createdAt: Timestamp.now(),
      });
      toast({
        title: "Success ",
        description: "Your message has been submitted successfully!",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading mb-16">Get in Touch</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's Collaborate on Your Next Enterprise Solution</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're looking to architect a new Micro Frontend ecosystem or optimize an existing React application, I'm here to help. Reach out to discuss your technical architecture and business goals.
              </p>
            </div>

            <div className="space-y-6">
              <div className="portfolio-card">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a href={`mailto:yashvaddi@gmail.com?subject=Senior%20Frontend%20Engineer%20Inquiry`}>
                      <p className="text-muted-foreground">
                        {["yashvaddi", "gmail.com"].join("@")}
                      </p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="portfolio-card border border-primary/20 bg-secondary/20 hover:border-primary/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Phone</h4>
                    <p className="text-foreground/80 font-medium">
                      <a href="tel:+917600158762" className="hover:text-primary transition-colors">
                        +91 76001 58762
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="portfolio-card border border-primary/20 bg-secondary/20 hover:border-primary/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Location</h4>
                    <p className="text-foreground/80 font-medium">
                      <a
                        href="https://www.google.com/maps/place/Ahmedabad,+Gujarat,+India"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        Ahmedabad, India (Remote)
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="portfolio-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-foreground/90 uppercase tracking-wider mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-secondary/30 border border-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none text-foreground"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 rounded-xl font-black uppercase tracking-widest hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
