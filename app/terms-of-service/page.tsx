import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { DynamicFooter } from "@/components/dynamic-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export const metadata: Metadata = {
  title: "Terms of Service | Safawala",
  description: "Terms of Service for Safawala wedding turban services. Read our terms and conditions for booking and using our services.",
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Terms of Service</h1>
          <p className="text-center text-muted-foreground mb-12">Last updated: February 2026</p>
          
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <section className="bg-card p-8 rounded-xl border mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using Safawala's services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="bg-card p-8 rounded-xl border mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Services Offered</h2>
              <p className="text-muted-foreground mb-4">Safawala provides the following wedding turban services:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Professional safa/turban tying for groom and barati</li>
                <li>Safa, pagdi, feta, and turban rental services</li>
                <li>Sehra and wedding accessories</li>
                <li>On-site turban tying at wedding venues</li>
                <li>Destination wedding turban services</li>
                <li>Corporate and event turban services</li>
              </ul>
            </section>

            <section className="bg-card p-8 rounded-xl border mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Booking and Payment</h2>
              <h3 className="text-xl font-semibold mb-2 mt-4">3.1 Booking Process</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Bookings can be made via phone, WhatsApp, email, or our website</li>
                <li>All bookings are subject to availability</li>
                <li>A confirmation will be sent once booking is accepted</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-2 mt-4">3.2 Payment Terms</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Advance payment may be required to confirm booking</li>
                <li>Full payment is due before or on the day of service</li>
                <li>We accept cash, UPI, bank transfer, and major payment methods</li>
                <li>Prices are subject to change and will be confirmed at booking</li>
              </ul>
            </section>

            <section className="bg-card p-8 rounded-xl border mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Cancellation Policy</h2>
              <h3 className="text-xl font-semibold mb-2 mt-4">4.1 By Customer</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Cancellation 7+ days before event: Full refund minus processing fee</li>
                <li>Cancellation 3-7 days before event: 50% refund</li>
                <li>Cancellation less than 3 days before event: No refund</li>
                <li>Date changes are subject to availability</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-2 mt-4">4.2 By Safawala</h3>
              <p className="text-muted-foreground">
                In rare circumstances where we must cancel, we will provide full refund and assist in finding alternative arrangements.
              </p>
            </section>

            <section className="bg-card p-8 rounded-xl border mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Service Delivery</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Our specialists will arrive at the agreed time and location</li>
                <li>Please ensure adequate space and lighting for turban tying</li>
                <li>The groom/barati should be ready at the scheduled time</li>
                <li>Delays caused by customer may result in additional charges</li>
                <li>We are not responsible for delays due to traffic or unforeseen circumstances</li>
              </ul>
            </section>

            <section className="bg-card p-8 rounded-xl border mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Rental Terms</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Rental items must be returned within 24 hours of the event</li>
                <li>Items must be returned in the same condition</li>
                <li>Damage or loss will incur additional charges</li>
                <li>Security deposit may be required for high-value items</li>
              </ul>
            </section>

            <section className="bg-card p-8 rounded-xl border mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Liability</h2>
              <p className="text-muted-foreground mb-4">
                Safawala provides services with utmost care and professionalism. However:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>We are not liable for any indirect or consequential damages</li>
                <li>Our liability is limited to the service fee paid</li>
                <li>We are not responsible for allergic reactions to materials (please inform us of any allergies)</li>
                <li>Photography/videography rights of our work belong to both parties</li>
              </ul>
            </section>

            <section className="bg-card p-8 rounded-xl border mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content on our website, including images, text, and designs, is the property of Safawala and is protected by copyright laws. You may not use our content without written permission.
              </p>
            </section>

            <section className="bg-card p-8 rounded-xl border mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Dispute Resolution</h2>
              <p className="text-muted-foreground">
                Any disputes shall be resolved through mutual discussion. If unresolved, disputes will be subject to arbitration in accordance with Indian law, with jurisdiction in Mumbai, Maharashtra.
              </p>
            </section>

            <section className="bg-card p-8 rounded-xl border mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                For any questions regarding these Terms of Service, please contact us:
              </p>
              <ul className="list-none text-muted-foreground space-y-2">
                <li><strong>Phone:</strong> +91 97252 95692</li>
                <li><strong>Email:</strong> info@safawala.com</li>
                <li><strong>WhatsApp:</strong> +91 97252 95692</li>
              </ul>
            </section>

            <section className="bg-card p-8 rounded-xl border">
              <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website. Continued use of our services after changes constitutes acceptance of the new terms.
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
