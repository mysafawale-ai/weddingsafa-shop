import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { DynamicFooter } from "@/components/dynamic-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export const metadata: Metadata = {
  title: "Privacy Policy | Safawala",
  description: "Privacy Policy for Safawala wedding turban services. Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Privacy Policy</h1>
          <p className="text-center text-muted-foreground mb-12">Last updated: February 2026</p>
          
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <section className="bg-card p-8 rounded-xl border mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                At Safawala, we collect information you provide directly to us when you:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Fill out our contact or booking forms</li>
                <li>Contact us via phone, email, or WhatsApp</li>
                <li>Make a service booking or inquiry</li>
                <li>Subscribe to our newsletter or updates</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                This information may include your name, phone number, email address, wedding date, venue location, and service preferences.
              </p>
            </section>

            <section className="bg-card p-8 rounded-xl border mb-8">
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Process and fulfill your service bookings</li>
                <li>Communicate with you about our services</li>
                <li>Send booking confirmations and reminders</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our services and customer experience</li>
                <li>Send promotional offers (only with your consent)</li>
              </ul>
            </section>

            <section className="bg-card p-8 rounded-xl border mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>With service providers who assist in our operations</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section className="bg-card p-8 rounded-xl border mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="bg-card p-8 rounded-xl border mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Cookies and Tracking</h2>
              <p className="text-muted-foreground">
                Our website may use cookies to enhance your browsing experience. Cookies are small files stored on your device that help us remember your preferences and understand how you use our site. You can disable cookies in your browser settings, but this may affect some functionality.
              </p>
            </section>

            <section className="bg-card p-8 rounded-xl border mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="bg-card p-8 rounded-xl border mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <ul className="list-none text-muted-foreground space-y-2">
                <li><strong>Phone:</strong> +91 97252 95692</li>
                <li><strong>Email:</strong> info@safawala.com</li>
                <li><strong>WhatsApp:</strong> +91 97252 95692</li>
              </ul>
            </section>

            <section className="bg-card p-8 rounded-xl border">
              <h2 className="text-2xl font-bold mb-4">8. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>
          </div>
        </div>
      </section>

      <DynamicFooter 
        location="India"
        domain="safawala.com"
        type="brand"
      />
      
      <WhatsAppFloat />
    </main>
  )
}
