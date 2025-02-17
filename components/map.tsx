export function Map() {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Our Location</h2>
        <div className="aspect-video">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.9967241596837!2d18.413796315745454!3d43.85636007911462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c8c0b1d3ae45%3A0x3e0cafb0e2f2c0cc!2sSarajevo%20City%20Center!5e0!3m2!1sen!2sba!4v1625584421018!5m2!1sen!2sba"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    )
  }
  
  