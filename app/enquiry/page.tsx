export default function EnquiryPage() {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-3xl">
        <h1 className="text-center text-5xl font-bold text-[#8B1E2D]">
          Student Enquiry
        </h1>

        <form className="mt-14 rounded-[32px] border border-gray-200 bg-white p-10">
          <div className="grid gap-6">
            <input
              placeholder="Student Name"
              className="rounded-2xl border border-gray-300 p-4 outline-none"
            />

            <input
              placeholder="Phone Number"
              className="rounded-2xl border border-gray-300 p-4 outline-none"
            />

            <input
              placeholder="Class"
              className="rounded-2xl border border-gray-300 p-4 outline-none"
            />

            <textarea
              placeholder="Message"
              rows={5}
              className="rounded-2xl border border-gray-300 p-4 outline-none"
            />

            <button className="rounded-full bg-[#8B1E2D] px-8 py-4 text-white">
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}