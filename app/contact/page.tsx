import { contactInfo } from "@/data/contact";

export default function ContactPage() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <h1 className="text-center text-5xl font-bold text-[#8B1E2D]">
          Contact Us
        </h1>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          {/* Left */}

          <div className="rounded-[32px] border border-gray-200 bg-white p-10">
            <h2 className="text-3xl font-bold text-[#8B1E2D]">
              Get In Touch
            </h2>

            <div className="mt-8 space-y-5">
              <p>
                <strong>Phone:</strong>{" "}
                {contactInfo.phone}
              </p>

              <p>
                <strong>Email:</strong>{" "}
                {contactInfo.email}
              </p>

              <p>
                <strong>Address:</strong>{" "}
                {contactInfo.address}
              </p>
            </div>
          </div>

          {/* Right */}

          <div className="rounded-[32px] overflow-hidden border border-gray-200">
            <iframe
              src={contactInfo.mapEmbed}
              width="100%"
              height="100%"
              loading="lazy"
              className="min-h-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}