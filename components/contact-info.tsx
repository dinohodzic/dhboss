import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Contact Information</h2>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <MapPin className="h-5 w-5 text-primary" />
          <p>Sarajevo City Center, 71000 Sarajevo, Bosnia and Herzegovina</p>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-primary" />
          <p>+387 33 123 456</p>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-primary" />
          <p>info@dhbosscarrental.com</p>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="h-5 w-5 text-primary" />
          <p>Open daily: 08:00 - 20:00</p>
        </div>
      </div>
    </div>
  )
}

