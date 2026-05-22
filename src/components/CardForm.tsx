import { createCard } from "@/actions/card.actions";

export default function CardForm() {
  return (
    <form
      action={createCard}
      className="max-w-2xl mx-auto space-y-4"
    >
      <input
        name="name"
        placeholder="Name"
        required
        className="w-full border p-3 rounded"
      />

      <input
        name="designation"
        placeholder="Designation"
        className="w-full border p-3 rounded"
      />

      <input
        name="company"
        placeholder="Company"
        className="w-full border p-3 rounded"
      />

      <input
        name="mobile"
        placeholder="Mobile"
        className="w-full border p-3 rounded"
      />

      <input
        name="email"
        placeholder="Email"
        className="w-full border p-3 rounded"
      />

      <input
        name="whatsapp"
        placeholder="WhatsApp"
        className="w-full border p-3 rounded"
      />

      <input
        name="website"
        placeholder="Website"
        className="w-full border p-3 rounded"
      />

      <textarea
        name="bio"
        placeholder="Bio"
        rows={4}
        className="w-full border p-3 rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        Create Card
      </button>
    </form>
  );
}

import CardForm from "@/components/CardForm";

export default function NewCardPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Create New Card
      </h1>

      <CardForm />
    </div>
  );
}